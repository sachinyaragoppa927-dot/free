import { CheckCircle, Award, BookOpen, Heart } from 'lucide-react';
import { coachInfo } from '../data';
import { Container, SectionHeading, LinkButton } from '../components/ui';
import { StatCard, CTASection } from '../components/shared';
import { useScrollReveal } from '../hooks';

const COACH_IMAGE = "https://image.qwenlm.ai/generated-images/5bd70f74-a6f4-4bae-af75-169063687fc8/_result.png";

export default function About() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal();
  const { ref: certsRef, isVisible: certsVisible } = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-neutral-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">About</span>
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
                Coaching Rooted in Science, Delivered with Care
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                I'm Coach Nova—founder of NovaFit Performance. I've spent over a decade helping 
                adults build strength, improve their health, and develop sustainable fitness habits.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-200">
                <img
                  src={COACH_IMAGE}
                  alt={coachInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-neutral-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coachInfo.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Philosophy"
                title="How I Approach Coaching"
                align="left"
              />
              <p className="text-neutral-600 leading-relaxed mb-6">
                {coachInfo.philosophy}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Every program I design is built on the same principles: progressive overload, 
                individualization, and sustainability. No two clients are the same, so no two 
                programs should be either.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: BookOpen, title: "Evidence-Based", description: "Programming grounded in exercise science research, not trends or fads." },
                { icon: Heart, title: "Human-Centered", description: "Your life, preferences, and wellbeing come first. Training should enhance your life." },
                { icon: Award, title: "Results-Focused", description: "We track progress objectively and adjust based on data, not guesswork." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Story */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div
            ref={storyRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <SectionHeading eyebrow="My Story" title="From Sedentary to Strength" />
            <p className="text-neutral-600 leading-relaxed text-lg">
              {coachInfo.story}
            </p>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications & Education"
            description="Ongoing education ensures my coaching stays current with the latest research."
          />
          <div
            ref={certsRef}
            className={`max-w-2xl mx-auto space-y-4 transition-all duration-700 ${
              certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {coachInfo.certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-3 bg-white border border-neutral-200 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">{cert}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss your goals and find the right program for you."
        primaryCta="Book a Consultation"
        dark
      />
    </main>
  );
}
