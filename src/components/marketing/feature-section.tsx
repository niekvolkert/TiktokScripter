'use client'

import { CodeIcon, BrainCircuitIcon, SparklesIcon } from 'lucide-react'

const features = [
  {
    title: "AI-Powered Script Generation",
    description: "Generate engaging scripts for your TikTok videos using advanced AI technology.",
    icon: BrainCircuitIcon,
  },
  {
    title: "Viral Content Analysis",
    description: "Analyze successful TikTok content to understand what makes videos go viral.",
    icon: SparklesIcon,
  },
  {
    title: "Custom Script Templates",
    description: "Access pre-made templates or create your own for consistent brand messaging.",
    icon: CodeIcon,
  },
]

export function FeatureSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features that Drive Results
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 