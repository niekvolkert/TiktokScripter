import { HeroSection } from '@/components/marketing/hero-section'
import { FeatureSection } from '@/components/marketing/feature-section'
import { PricingSection } from '@/components/marketing/pricing-section'

export default function MarketingPage() {
  return (
    <div className="flex flex-col gap-20 py-8">
      <HeroSection />
      <FeatureSection />
      <PricingSection />
    </div>
  )
}