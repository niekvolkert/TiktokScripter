import { HeroSection } from '@/components/marketing/hero-section.tsx'
import { FeatureSection } from '@/components/marketing/feature-section.tsx'
import { PricingSection } from '@/components/marketing/pricing-card.tsx'

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <FeatureSection />
      <PricingSection />
    </>
  )
}