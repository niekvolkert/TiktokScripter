'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  buttonText: string
  isPrimary?: boolean
}

export function PricingCard({ title, price, features, buttonText, isPrimary = false }: PricingCardProps) {
  return (
    <Card className={isPrimary ? "border-primary" : ""}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold mb-4">{price}</p>
        <ul className="list-disc list-inside mb-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button className="w-full">{buttonText}</Button>
      </CardContent>
    </Card>
  )
}