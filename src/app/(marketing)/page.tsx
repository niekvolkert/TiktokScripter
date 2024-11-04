import { HeroSection } from '@/components/marketing/hero-section'
import { FeatureCard } from '@/components/marketing/feature-card'
import { PricingCard } from '@/components/marketing/pricing-card'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Powered Analysis"
              description="Analyze viral TikTok videos to understand what makes them successful"
            />
            <FeatureCard
              title="Custom Script Generation"
              description="Generate tailored scripts for your specific products and target audience"
            />
            <FeatureCard
              title="Easy Product Management"
              description="Manage your products and generate scripts for multiple items effortlessly"
            />
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$29/mo"
              features={[
                "10 script generations per month",
                "5 product listings",
                "Basic analytics"
              ]}
              buttonText="Choose Plan"
            />
            <PricingCard
              title="Pro"
              price="$79/mo"
              features={[
                "50 script generations per month",
                "Unlimited product listings",
                "Advanced analytics",
                "Priority support"
              ]}
              buttonText="Choose Plan"
              isPrimary
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "Unlimited script generations",
                "Unlimited product listings",
                "Custom integrations",
                "Dedicated account manager"
              ]}
              buttonText="Contact Sales"
            />
          </div>
        </div>
      </section>
    </>
  )
}