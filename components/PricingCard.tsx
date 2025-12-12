import Button from './Button'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export default function PricingCard({ name, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`flex flex-col p-8 rounded-lg ${highlighted ? 'bg-gray-900 text-white border-2 border-gray-900' : 'bg-white border border-gray-200'}`}>
      <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <div className="mb-4">
        <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          {price}
        </span>
      </div>
      <p className={`text-sm mb-6 ${highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className={`text-sm flex items-start ${highlighted ? 'text-gray-200' : 'text-gray-700'}`}>
            <span className="mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        href="https://publo.vercel.app" 
        variant={highlighted ? 'secondary' : 'primary'}
        className="w-full text-center"
      >
        Get Started
      </Button>
    </div>
  )
}
