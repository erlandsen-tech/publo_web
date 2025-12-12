import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Write better books with intelligent assistance.
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Publo helps you plan, write, and refine your book with AI-powered structure, editing, and insights — without losing your voice.
          </p>
          <div className="flex gap-4">
            <Button href="https://publo.vercel.app" variant="primary">
              Start Writing
            </Button>
            <Button href="#features" variant="secondary">
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">
              Every Life Deserves Its Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                For centuries, history has been written only by those with the skills, time, and resources to write. The great novels, the celebrated memoirs, and the documented lives belong to the privileged few whose voices were preserved. But countless meaningful stories — the grandmother who crossed an ocean with only hope, the craftsman who built a town, the colleague whose quiet resilience changed a life — risk disappearing, not for lack of significance, but for lack of access to the tools of storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Democratizing Cultural Heritage */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Democratizing Cultural Heritage
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Publo believes that every lived experience has value. Every local story, family legend, and hard-won lesson deserves to be captured and preserved.
              </p>
              <p>
                The true barrier to documentation has never been content — it has been access. What if the grandmother who says, "I can't write," could still become the author of her own story? What if literacy and writing skill were no longer the gatekeepers of cultural memory?
              </p>
              <p className="font-semibold text-gray-900">
                Publo doesn't replace the authentic voice — it amplifies it. It removes technical and cognitive barriers while preserving emotional truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Every Author
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to write, refine, and publish your book.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="AI-Guided Outlining"
              description="Structure your book with intelligent guidance that helps you organize ideas into compelling chapters and narrative arcs."
            />
            <FeatureCard
              title="Context-Aware Manuscript Assistant"
              description="Get intelligent suggestions and answers based on your entire manuscript using vector-search technology."
            />
            <FeatureCard
              title="Editing and Rewriting Tools"
              description="Refine your prose with AI-powered editing that maintains your unique voice while improving clarity and flow."
            />
            <FeatureCard
              title="Character and World-Building"
              description="Track characters, timelines, locations, and world details in one organized system."
            />
            <FeatureCard
              title="Chapter and Revision Workflows"
              description="Manage multiple drafts, track changes, and maintain version control throughout your writing process."
            />
            <FeatureCard
              title="Secure, Private Data"
              description="Your writing belongs to you. Privacy-focused handling ensures your stories remain confidential."
            />
            <FeatureCard
              title="Export Formats"
              description="Export your finished manuscript to EPUB, PDF, Markdown, or Word format for publishing or sharing."
            />
          </div>
        </div>
      </section>

      {/* How Publo Works Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Publo Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to bring your story to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Create or Import</h3>
              <p className="text-gray-600">
                Start a new manuscript or import existing work to begin your journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Write with Guidance</h3>
              <p className="text-gray-600">
                Use AI-powered tools to structure, draft, and refine your book.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Export and Publish</h3>
              <p className="text-gray-600">
                Export your completed manuscript in your preferred format and share your story.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button href="/how-it-works" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Your Story Matters
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join us in preserving what matters. Publo empowers anyone to become an author — people who never believed they could write a book, families wanting to preserve legacy, and communities whose histories deserve more than silence.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              The greatest stories are not only those that made it to print — but those waiting to be told.
            </p>
            <Button href="https://publo.vercel.app" variant="secondary">
              Start Your Story Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
