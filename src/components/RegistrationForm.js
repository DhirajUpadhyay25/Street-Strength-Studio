import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import RevealOnScroll from './ui/RevealOnScroll';
import FormField from './ui/FormField';
import Button from './ui/Button';
import { submitRegistration, openWhatsApp } from '../services/leadService';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  age: '',
  gender: '',
  location: '',
  fitnessGoal: '',
  trainingInterest: '',
  experienceLevel: '',
  preferredTiming: '',
  message: '',
};

const fitnessGoals = [
  'Strength', 'Calisthenics', 'Fat Loss', 'Stamina',
  'Mobility', 'General Fitness', 'Personal Training',
];

const trainingInterests = [
  'Calisthenics', 'Strength Training', 'Fat Loss Program',
  'Stamina & Conditioning', 'Mobility & Balance', 'Personal Training',
];

const experienceLevels = ['Beginner', 'Intermediate', 'Advanced'];
const trainingTimings = [
  'Morning Batch (6:00 AM - 9:00 AM)',
  'Evening Batch (5:00 PM - 9:00 PM)',
  'Flexible / Not Sure',
];
const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = 'Name is required';
  if (!form.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^[+]?\d{10,15}$/.test(form.phone.replace(/\s/g, '')))
    errors.phone = 'Enter a valid phone number';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Enter a valid email address';
  
  if (form.age) {
    const ageNum = parseInt(form.age, 10);
    if (isNaN(ageNum) || ageNum <= 5) {
      errors.age = 'Age must be strictly greater than 5 years';
    }
  }

  if (!form.gender) errors.gender = 'Please select your gender';
  if (!form.location.trim()) errors.location = 'Location is required';
  if (!form.fitnessGoal) errors.fitnessGoal = 'Please select a fitness goal';
  if (!form.experienceLevel) errors.experienceLevel = 'Please select your experience level';
  if (!form.preferredTiming) errors.preferredTiming = 'Please select a preferred timing';
  return errors;
}

const RegistrationForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    const result = await submitRegistration(form);
    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const handleWhatsApp = () => {
    openWhatsApp(form);
  };

  if (submitted) {
    return (
      <section className="relative py-section bg-black" aria-label="Registration confirmation">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
            <p className="text-gray-400 mb-6">
              Thank you for your interest. We'll get back to you soon.
            </p>
            <Button variant="primary" onClick={() => setSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="register" className="relative py-section overflow-hidden bg-brand-dark" aria-label="Registration form">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-[180px]" aria-hidden="true" />

      <Container className="relative">
        <RevealOnScroll>
          <SectionHeading
            tag="Join Us"
            title="Register Now"
            titleAccent="Register"
            subtitle="Fill in your details below and take the first step toward transforming your body."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl p-8 md:p-12 relative"
            noValidate
          >
            {/* Soft inner glow for premium feel */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange/5 to-transparent pointer-events-none" aria-hidden="true" />
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 relative z-10">
              <FormField
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                error={errors.fullName}
                placeholder="Your full name"
                required
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="+91 XXXXX XXXXX"
                required
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your@email.com"
              />
              <FormField
                label="Age"
                name="age"
                type="number"
                value={form.age}
                onChange={handleChange}
                error={errors.age}
                placeholder="Must be > 5"
                required
              />
              <FormField
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                error={errors.gender}
                options={genderOptions}
                required
              />
              <FormField
                label="Location (City / Area)"
                name="location"
                value={form.location}
                onChange={handleChange}
                error={errors.location}
                placeholder="e.g. Sector 19, Faridabad"
                required
              />
              <FormField
                label="Fitness Goal"
                name="fitnessGoal"
                value={form.fitnessGoal}
                onChange={handleChange}
                error={errors.fitnessGoal}
                options={fitnessGoals}
                required
              />
              <FormField
                label="Training Interest"
                name="trainingInterest"
                value={form.trainingInterest}
                onChange={handleChange}
                options={trainingInterests}
              />
              <FormField
                label="Experience Level"
                name="experienceLevel"
                value={form.experienceLevel}
                onChange={handleChange}
                error={errors.experienceLevel}
                options={experienceLevels}
                required
              />
              <FormField
                label="Preferred Training Time"
                name="preferredTiming"
                value={form.preferredTiming}
                onChange={handleChange}
                error={errors.preferredTiming}
                options={trainingTimings}
                required
              />
            </div>

            <div className="mt-5">
              <FormField
                label="Message"
                name="message"
                type="textarea"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your fitness goals or any questions..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 relative z-10">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitting}
                icon={<Send size={16} />}
                className="flex-1"
              >
                {submitting ? 'Sending...' : 'Submit Registration'}
              </Button>
              <Button
                type="button"
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                showWhatsapp
                className="flex-1"
              >
                Continue on WhatsApp
              </Button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-6 relative z-10">
              Your information is 100% secure. We will only use this to contact you regarding your training.
            </p>
          </form>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default RegistrationForm;
