import { programs } from '../data';
import { Container, SectionHeading } from '../components/ui';
import { ProgramCard, CTASection } from '../components/shared';

export default function Programs() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-neutral-50">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Programs</span>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
              Find the Right Program for Your Goals
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Every program is personalized to your experience level, goals, and lifestyle. 
              No cookie-cutter plans—just coaching designed around you.
            </p>
          </div>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not Sure Which Program Is Right?"
        description="Book a free consultation and we'll help you find the best fit for your goals and experience."
        primaryCta="Book Consultation"
        dark
      />
    </main>
  );
}
