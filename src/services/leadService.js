/**
 * Lead Service — Integration Abstraction Layer
 *
 * Clean service layer for handling form submissions.
 * Currently supports WhatsApp redirect.
 * Ready for future integration with:
 *   - Formspree
 *   - Web3Forms
 *   - EmailJS
 *   - Netlify Forms
 *   - Custom backend (Spring Boot, Laravel, etc.)
 *
 * Usage:
 *   import { submitRegistration, sendLead, openWhatsApp } from './leadService';
 */

import siteConfig from '../config/siteConfig';

// ─── Integration Strategy ───
// Change this value to switch between integrations:
// 'whatsapp' | 'formspree' | 'web3forms' | 'emailjs' | 'netlify' | 'custom'
const INTEGRATION = 'web3forms';

// ─── Configuration for each strategy ───
const integrationConfig = {
  formspree: {
    endpoint: '', // e.g., 'https://formspree.io/f/YOUR_FORM_ID'
  },
  web3forms: {
    // ⚠️ IMPORTANT: Get your free access key from https://web3forms.com
    // Once you have it, paste it inside the quotes below.
    accessKey: '9007b059-b2fe-4008-964d-1810b7fadf14', 
    endpoint: 'https://api.web3forms.com/submit',
  },
  emailjs: {
    serviceId: '',
    templateId: '',
    publicKey: '',
  },
  custom: {
    endpoint: '', // e.g., 'https://your-api.com/api/leads'
  },
};

/**
 * Format form data into a WhatsApp message
 */
function formatWhatsAppMessage(data) {
  const lines = [
    `Hello Street Strength Studio,`,
    ``,
    `I would like to start my fitness journey.`,
    ``,
    `*Name:* ${data.fullName || '—'}`,
    `*Phone:* ${data.phone || '—'}`,
    `*Email:* ${data.email || '—'}`,
  ];

  if (data.age) lines.push(`*Age:* ${data.age}`);
  if (data.gender) lines.push(`*Gender:* ${data.gender}`);
  if (data.location) lines.push(`*Location:* ${data.location}`);
  if (data.fitnessGoal) lines.push(`*Fitness Goal:* ${data.fitnessGoal}`);
  if (data.trainingInterest) lines.push(`*Training Interest:* ${data.trainingInterest}`);
  if (data.experienceLevel) lines.push(`*Experience Level:* ${data.experienceLevel}`);
  if (data.preferredTiming) lines.push(`*Timing:* ${data.preferredTiming}`);
  if (data.message) {
    lines.push(``);
    lines.push(`*Message:* ${data.message}`);
  }

  lines.push(``);
  lines.push(`Please contact me regarding the next steps.`);

  return lines.join('\n');
}

/**
 * Open WhatsApp with pre-filled message
 */
export function openWhatsApp(data = {}) {
  const message = formatWhatsAppMessage(data);
  const encoded = encodeURIComponent(message);
  const phone = siteConfig.contact.phoneClean;
  const url = `https://wa.me/${phone}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Submit registration form data
 * @param {Object} data - Form data
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitRegistration(data) {
  try {
    switch (INTEGRATION) {
      case 'whatsapp':
        openWhatsApp(data);
        return {
          success: true,
          message: 'Redirecting to WhatsApp...',
        };

      case 'formspree': {
        const res = await fetch(integrationConfig.formspree.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Submission failed');
        return { success: true, message: 'Registration submitted successfully!' };
      }

      case 'web3forms': {
        const payload = {
          access_key: integrationConfig.web3forms.accessKey,
          ...data,
          subject: `New Registration — ${data.fullName}`,
        };
        const res = await fetch(integrationConfig.web3forms.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Submission failed');
        return { success: true, message: 'Registration submitted successfully!' };
      }

      case 'netlify':
        // Netlify Forms are handled via form attributes in HTML
        return { success: true, message: 'Submitted via Netlify Forms.' };

      case 'custom': {
        const res = await fetch(integrationConfig.custom.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Submission failed');
        return { success: true, message: 'Registration submitted successfully!' };
      }

      default:
        openWhatsApp(data);
        return { success: true, message: 'Redirecting to WhatsApp...' };
    }
  } catch (error) {
    console.error('Lead submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again or contact us via WhatsApp.',
    };
  }
}

/**
 * Send a quick lead/enquiry
 * Alias for submitRegistration with minimal data
 */
export async function sendLead(data) {
  return submitRegistration(data);
}

const leadService = {
  submitRegistration,
  sendLead,
  openWhatsApp,
};

export default leadService;
