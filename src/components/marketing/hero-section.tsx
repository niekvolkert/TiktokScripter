import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Generate Viral-Worthy Social Ad Scripts</h1>
        <p className="text-xl mb-8">Analyze TikTok videos and create engaging scripts for your products</p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  )
}