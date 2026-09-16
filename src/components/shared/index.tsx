import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { Program, Testimonial, PricingPlan, FAQ, SuccessStory } from '../../data';
import { LinkButton } from '../ui';
import { useScrollReveal } from '../../hooks';

/* Program Card */
interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`group bg-white border border-neutral-200 rounded-xl p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:border-primary-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
          <Clock className="w-3 h-3" />
          {program.duration}
        </span>
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
        {program.name}
      </h3>
      <p className="text-neutral-600 text-sm leading-relaxed mb-4">{program.shortDescription}</p>
      <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-5">
        <Users className="w-3.5 h-3.5" />
        <span>{program.targetAudience}</span>
      </div>
      <ul className="space-y-2 mb-6">
        {program.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700">
            <Check className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
      <Link
        to={`/programs/${program.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
      >
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
      </Link>
    </div>
  );
}

/* Testimonial Card */
interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
        ))}
      </div>
      <blockquote className="text-neutral-700 leading-relaxed mb-6">
        "{testimonial.content}"
      </blockquote>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-neutral-900 text-sm">{testimonial.name}</p>
          <p className="text-xs text-neutral-500">{testimonial.role}</p>
        </div>
        <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
          {testimonial.program}
        </span>
      </div>
    </div>
  );
}

/* Pricing Card */
interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl p-6 md:p-8 transition-all duration-300 ${
        plan.highlighted
          ? 'bg-neutral-900 text-white ring-2 ring-primary-500 shadow-xl scale-[1.02]'
          : 'bg-white border border-neutral-200 hover:shadow-lg'
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
        {plan.name}
      </h3>
      <p className={`text-sm mb-4 ${plan.highlighted ? 'text-neutral-300' : 'text-neutral-500'}`}>
        {plan.description}
      </p>
      <div className="flex items-baseline gap-1 mb-6">
        <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
          ${plan.price}
        </span>
        <span className={`text-sm ${plan.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
          /{plan.period}
        </span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-primary-400' : 'text-primary-600'}`} />
            <span className={plan.highlighted ? 'text-neutral-200' : 'text-neutral-700'}>{feature}</span>
          </li>
        ))}
      </ul>
      <LinkButton
        to="/contact"
        variant={plan.highlighted ? 'primary' : 'outline'}
        className="w-full"
      >
        {plan.cta}
      </LinkButton>
    </div>
  );
}

/* FAQ Accordion */
interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-5">
          <button
            className="flex items-center justify-between w-full text-left gap-4 group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-${index}`}
          >
            <span className="text-base font-medium text-neutral-900 group-hover:text-primary-700 transition-colors">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`faq-${index}`}
            role="region"
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-neutral-600 leading-relaxed text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Success Story Card */
interface SuccessStoryCardProps {
  story: SuccessStory;
}

export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
          <span className="text-sm font-bold text-primary-700">{story.name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 text-sm">{story.name}, {story.age}</p>
          <p className="text-xs text-neutral-500">{story.program} • {story.duration}</p>
        </div>
      </div>
      <p className="text-neutral-700 text-sm leading-relaxed mb-4">{story.summary}</p>
      <blockquote className="border-l-2 border-primary-500 pl-4 mb-4">
        <p className="text-neutral-600 text-sm italic">"{story.quote}"</p>
      </blockquote>
      <div className="flex flex-wrap gap-2">
        {story.highlights.map((highlight) => (
          <span key={highlight} className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full">
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Stat Card */
interface StatCardProps {
  value: string;
  label: string;
  light?: boolean;
}

export function StatCard({ value, label, light = false }: StatCardProps) {
  return (
    <div className="text-center">
      <p className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-neutral-900'}`}>
        {value}
      </p>
      <p className={`text-sm mt-1 ${light ? 'text-neutral-300' : 'text-neutral-500'}`}>{label}</p>
    </div>
  );
}

/* CTA Section */
interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  dark?: boolean;
}

export function CTASection({ title, description, primaryCta = 'Book Consultation', secondaryCta, dark = false }: CTASectionProps) {
  return (
    <section className={`section-padding ${dark ? 'bg-neutral-900' : 'bg-primary-50'}`}>
      <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-neutral-900'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/contact" size="lg">
            {primaryCta}
          </LinkButton>
          {secondaryCta && (
            <LinkButton to="/programs" variant="outline" size="lg">
              {secondaryCta}
            </LinkButton>
          )}
        </div>
      </div>
    </section>
  );
}
