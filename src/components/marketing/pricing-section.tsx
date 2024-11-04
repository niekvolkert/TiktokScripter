'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for getting started",
    features: [
      "5 scripts per month",
      "Basic analytics",
      "Standard templates",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Best for growing creators",
    features: [
      "Unlimited scripts",
      "Advanced analytics",
      "Custom templates",
      "Priority support",
      "Team collaboration",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-lg border bg-card"
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 text-4xl font-bold">{plan.price}<span className="text-xl text-muted-foreground">/month</span></div>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 