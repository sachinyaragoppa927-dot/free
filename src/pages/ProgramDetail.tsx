import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users } from 'lucide-react';
import { programs } from '../data';
import { Container, SectionHeading } from '../components/ui';
import { FAQAccordion, CTASection } from '../components/shared';
import { faqData } from '../data';

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-neutral-50">
        <Container>
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
                <Clock className="w-3 h-3" />
                {program.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
                <Users className="w-3 h-3" />
                {program.targetAudience}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">{program.name}</h1>
            <p className="text-lg text-neutral-600 leading-relaxed">{program.shortDescription}</p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Overview" title="What to Expect" align="left" />
              <p className="text-neutral-600 leading-relaxed">{program.overview}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Who This Is For</h3>
              <ul className="space-y-3">
                {program.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <SectionHeading eyebrow="Included" title="What You Get" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {program.included.map((item) => (
              <div key={item} className="bg-white border border-neutral-200 rounded-lg p-4 flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-padding">
        <Container>
          <SectionHeading eyebrow="Process" title="How It Works" />
          <div className="max-w-3xl mx-auto space-y-6">
            {program.process.map((step) => (
              <div key={step.step} className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <SectionHeading eyebrow="FAQ" title={`Questions About ${program.name}`} />
          <FAQAccordion faqs={faqData.slice(0, 4)} />
        </Container>
      </section>

      <CTASection
        title={`Start Your ${program.name} Journey`}
        description="Book a free consultation to discuss if this program is right for you."
        primaryCta="Book Consultation"
        dark
      />
    </main>
  );
}
