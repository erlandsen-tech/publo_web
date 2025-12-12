import Button from '@/components/Button'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Every Life Deserves Its Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Publo is more than writing software. It's a movement to democratize storytelling and preserve the cultural heritage of every community.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              For centuries, history has been written only by those with the skills, time, and resources to write. The great novels, the celebrated memoirs, and the documented lives belong to the privileged few whose voices were preserved. But countless meaningful stories — the grandmother who crossed an ocean with only hope, the craftsman who built a town, the colleague whose quiet resilience changed a life — risk disappearing, not for lack of significance, but for lack of access to the tools of storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Democratizing Cultural Heritage */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Democratizing Cultural Heritage
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Publo believes that every lived experience has value. Every local story, family legend, and hard-won lesson deserves to be captured and preserved.
            </p>
            <p>
              The true barrier to documentation has never been content — it has been access. What if the grandmother who says, "I can't write," could still become the author of her own story? What if literacy and writing skill were no longer the gatekeepers of cultural memory?
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Inequality */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">
            Narrative Inequality
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              The bottleneck in cultural preservation is not a shortage of meaningful experiences. It is the lack of accessible tools to capture them.
            </p>
            <p>
              Illiteracy and limited writing skills restrict agency. If you cannot document your story, you must rely on someone else to decide whether it deserves to be recorded.
            </p>
            <p className="text-white font-semibold text-xl">
              Publo doesn't replace the authentic voice — it amplifies it.
            </p>
            <p>
              It removes technical and cognitive barriers while preserving emotional truth.
            </p>
            <p className="text-xl">
              Publo says to the grandmother, the factory worker, the unsung hero:
            </p>
            <p className="text-2xl font-semibold text-white italic">
              Your story matters. Let's write it down together.
            </p>
          </div>
        </div>
      </section>

      {/* Publo's Purpose */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Publo's Purpose
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Publo is an AI-enabled ghostwriter built to unlock the vast, untapped treasury of human experiences that have never been written.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              It gives voice to stories that have always mattered but have never been heard.
            </p>
          </div>
        </div>
      </section>

      {/* Who Publo Is For */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Publo Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                First-Time Authors
              </h3>
              <p className="text-gray-700">
                People who never believed they could write a book but have stories worth sharing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Families
              </h3>
              <p className="text-gray-700">
                Those wanting to preserve legacy and document family histories for future generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Communities
              </h3>
              <p className="text-gray-700">
                Groups whose histories deserve more than silence and need to be preserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            The Greatest Stories
          </h2>
          <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
            The greatest stories are not only those that made it to print — but those waiting to be told.
          </p>
          <Button href="https://publo.vercel.app" variant="primary">
            Start Your Story
          </Button>
        </div>
      </section>

      {/* About AiAkaki */}
      <section className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">Built by</p>
            <h3 className="text-2xl font-bold">AiAkaki</h3>
            <p className="text-gray-300 mt-4">
              Creating tools that empower human creativity and preserve cultural heritage.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
