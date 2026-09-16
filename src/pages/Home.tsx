import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { programs, testimonials, faqData, coachInfo } from '../data';
import { LinkButton, Container, SectionHeading } from '../components/ui';
import { ProgramCard, TestimonialCard, FAQAccordion, StatCard, CTASection } from '../components/shared';
import { useScrollReveal } from '../hooks';

const HERO_IMAGE = "https://image.qwenlm.ai/generated-images/e82b4c71-5851-44ad-9425-c7b18f96d0d2/_result.png";
const COACH_IMAGE = "https://image.qwenlm.ai/generated-images/5bd70f74-a6f4-4bae-af75-169063687fc8/_result.png";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/40" />
      </div>

      <Container className="relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 mb-6">
            <Shield className="w-4 h-4" />
            Professional Fitness Coaching
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Build Strength That
            <span className="block text-primary-400">Fits Your Life</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-lg">
            Personalized coaching for adults who want real results—without the extremes. 
            Evidence-based training, sustainable nutrition, and genuine support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <LinkButton to="/contact" size="lg">
              Book a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </LinkButton>
            <LinkButton to="/programs" variant="outline" size="lg" className="border-neutral-500 text-neutral-200 hover:border-white hover:text-white">
              Explore Programs
            </LinkButton>
          </div>
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-500" />
              500+ clients coached
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-500" />
              10+ years experience
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-500" />
              98% client retention
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-12 bg-neutral-50 border-y border-neutral-200">
      <Container>
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <StatCard value="500+" label="Clients Coached" />
          <StatCard value="10+" label="Years Experience" />
          <StatCard value="98%" label="Client Retention" />
          <StatCard value="4.9" label="Average Rating" />
        </div>
      </Container>
    </section>
  );
}

function CoachIntroSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-padding">
      <Container>
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-200">
              <img
                src={COACH_IMAGE}
                alt={coachInfo.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">{coachInfo.experience} Experience</p>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Meet Your Coach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">{coachInfo.name}</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">{coachInfo.philosophy}</p>
            <div className="space-y-3 mb-8">
              {coachInfo.certifications.slice(0, 3).map((cert) => (
                <div key={cert} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-700">{cert}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
              Learn more about Coach Nova
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="Coaching Built Around Your Goals"
          description="Choose the program that matches where you are and where you want to be. Every plan is personalized to you."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();
  const steps = [
    { icon: Target, title: "Consultation", description: "We start with a free call to understand your goals, experience, and lifestyle." },
    { icon: TrendingUp, title: "Custom Plan", description: "Your coach designs a personalized program built around your specific needs." },
    { icon: Users, title: "Ongoing Support", description: "Regular check-ins, form reviews, and adjustments keep you progressing." },
  ];

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Simple Process, Real Results"
          description="Getting started is straightforward. Here's what to expect."
        />
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Step {index + 1}</span>
              <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Real feedback from real people who've worked with NovaFit."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Answers to questions we hear most often from prospective clients."
        />
        <FAQAccordion faqs={faqData.slice(0, 5)} />
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <CoachIntroSection />
      <ProgramsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection
        title="Ready to Start Your Transformation?"
        description="Book a free consultation and discover how personalized coaching can help you reach your goals."
        primaryCta="Book Free Consultation"
        secondaryCta="View Programs"
        dark
      />
    </main>
  );
}
