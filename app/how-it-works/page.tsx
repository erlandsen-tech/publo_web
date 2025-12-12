import Button from '@/components/Button'

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
            How Publo Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From first idea to published book, Publo guides you through every stage of the writing process.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold mb-6">
                Step 1
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Create or Import Your Manuscript
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Begin your writing journey by starting a new project or importing existing work. Publo supports multiple formats including Word documents, plain text, and Markdown.
                </p>
                <p>
                  Set up your project structure with customizable templates for novels, memoirs, non-fiction, or create your own structure from scratch.
                </p>
                <p>
                  Organize your manuscript into chapters, parts, or sections that make sense for your story.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-12 border border-gray-200">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-8"></div>
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                  Import Manuscript
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-lg p-12 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gray-900 flex-shrink-0"></div>
                  <div className="space-y-2 flex-grow">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gray-200 flex-shrink-0"></div>
                  <div className="space-y-2 flex-grow">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-3/5"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-gray-200 flex-shrink-0"></div>
                  <div className="space-y-2 flex-grow">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold mb-6">
                Step 2
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Write with Intelligent Guidance
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>AI-Guided Outlining:</strong> Structure your narrative with intelligent suggestions for plot points, character arcs, and thematic development.
                </p>
                <p>
                  <strong>Context-Aware Assistance:</strong> Ask questions about your manuscript and get answers based on everything you've written. The assistant understands your characters, timeline, and story world.
                </p>
                <p>
                  <strong>Editing and Refinement:</strong> Improve your prose with AI-powered suggestions that maintain your unique voice while enhancing clarity, flow, and impact.
                </p>
                <p>
                  <strong>Character and World Management:</strong> Track characters, locations, timelines, and important details in an organized system that keeps everything at your fingertips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold mb-6">
                Step 3
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Export and Publish
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  When your manuscript is ready, export it in the format that works best for your publishing path.
                </p>
                <p>
                  <strong>EPUB:</strong> Create ebooks ready for distribution on major platforms like Amazon Kindle, Apple Books, and Kobo.
                </p>
                <p>
                  <strong>PDF:</strong> Generate professional PDF files for print-on-demand services or sharing with agents and publishers.
                </p>
                <p>
                  <strong>Word:</strong> Export to Microsoft Word format for traditional publishing workflows or further editing.
                </p>
                <p>
                  <strong>Markdown:</strong> Keep your manuscript in a portable, future-proof format.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-12 border border-gray-200">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-gray-900 mb-4">Export Format</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-2 border-gray-900 rounded-lg p-4 text-center font-medium">
                    EPUB
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 text-center text-gray-600">
                    PDF
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 text-center text-gray-600">
                    Word
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 text-center text-gray-600">
                    Markdown
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gray-900 text-white rounded-lg py-3 font-medium">
                    Export Manuscript
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Ready to Start Writing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join authors who are turning their ideas into published books with Publo.
            </p>
            <Button href="https://publo.vercel.app" variant="primary">
              Start Your Book Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
