'use client'

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  buttonText: string
  isPrimary?: boolean
}

export function PricingCard({ 
  title, 
  price, 
  features, 
  buttonText, 
  isPrimary = false 
}: PricingCardProps) {
  return (
    <div className={cn(
      "flex flex-col p-8 rounded-lg border bg-card",
      isPrimary && "border-primary shadow-lg scale-105"
    )}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 text-4xl font-bold">{price}</div>
      <ul className="mt-8 space-y-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-primary mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button 
        className={cn("mt-8", isPrimary && "bg-primary text-primary-foreground")}
        variant={isPrimary ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </div>
  )
}