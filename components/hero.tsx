import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/30 to-card">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="relative opacity-95 mix-blend-normal">
              <Image
                src="/images/design-mode/Logo%20Design%20%282%29(1).png"
                alt="Climate Coordination Network Logo"
                width={180}
                height={180}
                className="drop-shadow-sm"
                priority
              />
            </div>
            <div className="text-left">
              <div className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                <div className="text-5xl">Climate</div>
                <div className="text-5xl">Coordination</div>
                <div className="text-5xl">Network</div>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Accelerating blockchain-enabled climate solutions on a global scale. Funding the grassroots innovators
            rewriting our climate future.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 py-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-mono text-primary">$5.6M</div>
              <div className="text-sm text-muted-foreground mt-1">Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-mono text-secondary">389</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-mono text-accent">56</div>
              <div className="text-sm text-muted-foreground mt-1">Countries</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="https://impact.climatecoordination.org" target="_blank" rel="noopener noreferrer">
                View Impact Report
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary/30 hover:bg-primary/10 bg-transparent"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
