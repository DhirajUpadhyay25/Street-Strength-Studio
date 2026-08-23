/**
 * Street Strength Studio — Site Configuration
 * Single source of truth for all business information.
 * Update values here — they propagate across the entire site.
 */

const siteConfig = {
  // ─── Business Identity ───
  name: 'Street Strength Studio',
  shortName: 'SS Studio',
  tagline: 'Build Your Body. Master Your Movement.',
  description:
    'Premium calisthenics, strength, stamina and movement training studio in Faridabad. Build real strength with bodyweight mastery, expert coaching, and a supportive community.',

  // ─── Owner / Coach ───
  coach: {
    name: 'Hitesh Raj Upadhyay',
    title: 'Calisthenics Coach & Founder',
    instagram: 'hiten_calisthenics',
    instagramUrl:
      'https://www.instagram.com/hiten_calisthenics?igsh=MWpjdGlhYmFjeWZxNg==',
    philosophy: 'Consistency beats motivation.',
  },

  // ─── Contact ───
  contact: {
    phone: '+91 9654563119',
    phoneClean: '9654563119', // for tel: links
    email: 'hiteshofficial010@gmail.com',
    whatsappLink: 'https://wa.link/xsauiy',
    // To change the WhatsApp number, update the link above
    // or replace with: `https://wa.me/${phoneClean}`
  },

  // ─── Location ───
  location: {
    address: 'Shop no 3, First Floor, Gopi Colony, Sec-19, Old Faridabad',
    city: 'Faridabad',
    state: 'Haryana',
    country: 'India',
    pincode: '121002',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9310873275435!2d77.31538177529274!3d28.421336175780738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd707738a871%3A0x452e25c7e43b4474!2sStreet%20strength%20studio!5e0!3m2!1sen!2sin!4v1782735953532!5m2!1sen!2sin',
    mapLink: 'https://maps.google.com/?q=Street+strength+studio+Faridabad',
    coordinates: { lat: 28.421336, lng: 77.315382 },
  },

  // ─── Hours ───
  hours: {
    weekday: 'Mon – Sat',
    morning: '6:00 AM – 9:00 AM',
    evening: '5:00 PM – 9:00 PM',
    closed: 'Sunday',
    display: 'Mon – Sat: 6–9 AM & 5–9 PM',
  },

  // ─── Social Media ───
  social: {
    instagram: {
      handle: '@dr_ss_studio',
      url: 'https://www.instagram.com/dr_ss_studio?igsh=a2xjOW5pdXBmMmNq',
    },
    instagramPersonal: {
      handle: '@hiten_calisthenics',
      url: 'https://www.instagram.com/hiten_calisthenics?igsh=MWpjdGlhYmFjeWZxNg==',
    },
  },

  // ─── Real Statistics (verified) ───
  stats: {
    yearsExperience: '3+',
    clients: '50+',
    coaches: '5+',
  },

  // ─── Pricing ───
  pricing: {
    monthly: { price: '₹1,499', duration: '30 Days' },
    quarterly: { price: '₹3,899', duration: '90 Days' },
    yearly: { price: '₹12,999', duration: '365 Days' },
  },

  // ─── SEO ───
  seo: {
    title: 'Street Strength Studio — Premium Calisthenics & Strength Training in Faridabad',
    description:
      'Build real strength with calisthenics, bodyweight training, stamina conditioning and fat loss programs. Expert coaching at Street Strength Studio, Faridabad.',
    canonicalUrl: 'https://street-strength-studio.netlify.app',
    ogImage: '/imagess/logo.png',
  },

  // ─── Developer Credit ───
  developer: {
    name: 'Dhiraj Upadhyay',
    instagram: 'https://www.instagram.com/mr.dhiraj15?igsh=MXkxMmR3Ymcxczhtdg==',
  },

  // ─── Navigation ───
  navLinks: [
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default siteConfig;
