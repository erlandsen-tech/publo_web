import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            Publo
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/how-it-works" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/pricing" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <a 
              href="https://publo.vercel.app" 
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Start Writing
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
