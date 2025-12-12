import PricingCard from '@/components/PricingCard'

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose the plan that fits your writing journey. All plans include core writing tools and AI assistance.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Free Trial"
              price="€0"
              description="Perfect for exploring Publo and starting your first manuscript."
              features={[
                "One active manuscript",
                "AI-guided outlining",
                "Basic manuscript assistant",
                "Chapter management",
                "Export to Markdown",
                "14-day trial period"
              ]}
            />
            
            <PricingCard
              name="Creator"
              price="€12/mo"
              description="For serious writers ready to complete their book projects."
              features={[
                "Unlimited manuscripts",
                "Full AI writing assistance",
                "Context-aware manuscript assistant",
                "Character & world-building tools",
                "Revision tracking",
                "Export to all formats (EPUB, PDF, Word, Markdown)",
                "Priority support"
              ]}
              highlighted={true}
            />
            
            <PricingCard
              name="Professional"
              price="€29/mo"
              description="Advanced tools for authors, publishers, and writing professionals."
              features={[
                "Everything in Creator",
                "Manuscript analytics & insights",
                "Advanced AI models",
                "Collaboration features",
                "Custom export templates",
                "API access",
                "Dedicated support",
                "Early access to new features"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            All Plans Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="font-semibold mb-2">Unlimited Writing</h3>
              <p className="text-sm text-gray-600">Write as much as you need without word limits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-semibold mb-2">AI Assistance</h3>
              <p className="text-sm text-gray-600">Context-aware help throughout your manuscript</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📤</div>
              <h3 className="font-semibold mb-2">Export Formats</h3>
              <p className="text-sm text-gray-600">Professional formats ready for publishing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-gray-600">Your writing is secure and confidential</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens to my manuscripts if I cancel?</h3>
              <p className="text-gray-600">You can export all your manuscripts before canceling. Your data remains accessible for 30 days after cancellation for export purposes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee for first-time subscribers. If Publo isn't right for you, we'll refund your payment in full.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is my writing private and secure?</h3>
              <p className="text-gray-600">Absolutely. Your manuscripts are encrypted, never used to train AI models, and only accessible by you. We take privacy seriously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Start Writing Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Begin your 14-day free trial. No credit card required.
            </p>
            <a 
              href="https://publo.vercel.app" 
              className="inline-block rounded-lg px-6 py-3 text-sm font-medium transition-colors bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
            >
              Try Publo Free
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
