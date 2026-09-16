import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';

interface FormData {
  name: string;
  email: string;
  phone: string;
  goal: string;
  contactMethod: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const goals = [
  'Build strength',
  'Lose fat / improve body composition',
  'Improve overall fitness',
  'Prepare for an event/competition',
  'Recover from injury / rebuild',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    goal: '',
    contactMethod: 'email',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.phone && !/^[\d\s\-+()]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.goal) {
      newErrors.goal = 'Please select your primary goal';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus('loading');

    // Simulate API call - replace with actual API integration
    // Example: await fetch('/api/consultation', { method: 'POST', body: JSON.stringify(formData) })
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <main>
        <section className="pt-28 md:pt-36 section-padding">
          <Container>
            <div className="max-w-lg mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                <Send className="w-7 h-7 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-4">Consultation Request Received</h1>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Thank you for your interest, {formData.name}. We'll review your information and 
                reach out within 24 hours to schedule your free consultation.
              </p>
              <p className="text-sm text-neutral-500">
                Check your email at <strong>{formData.email}</strong> for a confirmation.
              </p>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-8 bg-neutral-50">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Contact</span>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Fill out the form below and we'll reach out within 24 hours to schedule 
              a call. No commitment, no pressure—just a conversation about your goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200'
                    } focus:outline-none focus:ring-2`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200'
                    } focus:outline-none focus:ring-2`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Phone Number <span className="text-neutral-400 text-xs">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors ${
                      errors.phone
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200'
                    } focus:outline-none focus:ring-2`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.phone}</p>
                  )}
                </div>

                {/* Goal */}
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Primary Goal <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="goal"
                    value={formData.goal}
                    onChange={(e) => handleChange('goal', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors ${
                      errors.goal
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-200'
                    } focus:outline-none focus:ring-2`}
                    aria-invalid={!!errors.goal}
                    aria-describedby={errors.goal ? 'goal-error' : undefined}
                  >
                    <option value="">Select your goal</option>
                    {goals.map((goal) => (
                      <option key={goal} value={goal}>{goal}</option>
                    ))}
                  </select>
                  {errors.goal && (
                    <p id="goal-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.goal}</p>
                  )}
                </div>

                {/* Contact Method */}
                <div>
                  <fieldset>
                    <legend className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Contact Method
                    </legend>
                    <div className="flex gap-6">
                      {[
                        { value: 'email', label: 'Email' },
                        { value: 'phone', label: 'Phone' },
                        { value: 'either', label: 'Either' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={option.value}
                            checked={formData.contactMethod === option.value}
                            onChange={(e) => handleChange('contactMethod', e.target.value)}
                            className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
                          />
                          <span className="text-sm text-neutral-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Message <span className="text-neutral-400 text-xs">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-sm transition-colors focus:border-primary-500 focus:ring-primary-200 focus:outline-none focus:ring-2 resize-none"
                    placeholder="Tell us about your goals, experience, or any questions you have..."
                  />
                </div>

                {/* Error state */}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
                    <p className="text-sm text-red-700">
                      Something went wrong. Please try again or email us directly at hello@novafit.com.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <Button type="submit" size="lg" loading={status === 'loading'} className="w-full sm:w-auto">
                  Submit Consultation Request
                </Button>

                <p className="text-xs text-neutral-500">
                  By submitting this form, you agree to be contacted about our coaching services. 
                  We'll never share your information with third parties.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-neutral-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <a href="mailto:hello@novafit.com" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                        hello@novafit.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone</p>
                      <a href="tel:+15551234567" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Location</p>
                      <p className="text-sm text-neutral-600">Online coaching — available worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Response Time</p>
                      <p className="text-sm text-neutral-600">Within 24 hours on business days</p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-neutral-200" />

                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-2">What to Expect</h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Free 20-minute consultation call</li>
                    <li>• Goal assessment and program recommendation</li>
                    <li>• No obligation to sign up</li>
                    <li>• Questions welcome</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
