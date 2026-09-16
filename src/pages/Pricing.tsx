import { pricingPlans, faqData } from '../data';
import { Container, SectionHeading } from '../components/ui';
import { PricingCard, FAQAccordion, CTASection } from '../components/shared';
import { Check, X } from 'lucide-react';

const comparisonFeatures = [
  { feature: 'Custom training program', foundation: true, performance: true, elite: true },
  { feature: 'Monthly program adjustments', foundation: true, performance: true, elite: true },
  { feature: 'Direct messaging access', foundation: true, performance: true, elite: true },
  { feature: 'Progress tracking', foundation: true, performance: true, elite: true },
  { feature: 'Nutrition coaching', foundation: false, performance: true, elite: true },
  { feature: 'Video form reviews', foundation: false, performance: true, elite: true },
  { feature: 'Recovery protocols', foundation: false, performance: true, elite: true },
  { feature: 'Priority messaging', foundation: false, performance: true, elite: true },
  { feature: 'Competition prep', foundation: false, performance: false, elite: true },
  { feature: 'Custom meal plans', foundation: false, performance: false, elite: true },
  { feature: 'Direct phone access', foundation: false, performance: false, elite: true },
  { feature: 'Weekly check-in calls', foundation: false, performance: true, elite: true },
];

export default function Pricing() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-neutral-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Pricing</span>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-3 mb-6">
              Invest in Your Health
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Transparent pricing with no hidden fees. Choose the level of support 
              that matches your goals and budget.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title="Feature Comparison"
            description="See exactly what's included in each plan."
          />
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 pr-4 font-semibold text-neutral-900 min-w-[200px]">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-neutral-900">Foundation</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600">Performance</th>
                  <th className="text-center py-4 pl-4 font-semibold text-neutral-900">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-neutral-100">
                    <td className="py-3 pr-4 text-neutral-700">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {row.foundation ? <Check className="w-4 h-4 text-primary-600 mx-auto" /> : <X className="w-4 h-4 text-neutral-300 mx-auto" />}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.performance ? <Check className="w-4 h-4 text-primary-600 mx-auto" /> : <X className="w-4 h-4 text-neutral-300 mx-auto" />}
                    </td>
                    <td className="py-3 pl-4 text-center">
                      {row.elite ? <Check className="w-4 h-4 text-primary-600 mx-auto" /> : <X className="w-4 h-4 text-neutral-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Pricing Questions"
            description="Common questions about our coaching packages."
          />
          <FAQAccordion faqs={faqData} />
        </Container>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Book a free consultation. We'll discuss your goals and help you choose the right plan—no pressure."
        primaryCta="Book Consultation"
        dark
      />
    </main>
  );
}
