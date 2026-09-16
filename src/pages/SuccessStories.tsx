import { useState } from 'react';
import { successStories, testimonials } from '../data';
import { Container, SectionHeading } from '../components/ui';
import { SuccessStoryCard, TestimonialCard, CTASection } from '../components/shared';

const categories = ['All', 'Strength Foundation', 'Performance Accelerator', 'Lean Transformation'];

export default function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStories = activeFilter === 'All'
    ? successStories
    : successStories.filter((s) => s.program === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-neutral-50">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Results</span>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
              Real People, Real Progress
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Every client's journey is different. Here are some stories from people who 
              committed to the process and saw meaningful change.
            </p>
            <p className="text-sm text-neutral-500 mt-4">
              * Individual results vary. These stories represent real client experiences but outcomes 
              depend on many factors including consistency, effort, and individual circumstances.
            </p>
          </div>
        </Container>
      </section>

      {/* Stories with filter */}
      <section className="section-padding">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stories grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredStories.map((story) => (
              <SuccessStoryCard key={story.name} story={story} />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No stories found for this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients Say"
            description="Feedback from people who've experienced the coaching firsthand."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Write Your Own Success Story?"
        description="Start with a free consultation. No commitment, no pressure—just a conversation about your goals."
        primaryCta="Book Consultation"
        dark
      />
    </main>
  );
}
