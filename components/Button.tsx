import Link from 'next/link'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block rounded-lg px-6 py-3 text-sm font-medium transition-colors'
  const variantStyles = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
  }
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={combinedStyles}>
      {children}
    </button>
  )
}
