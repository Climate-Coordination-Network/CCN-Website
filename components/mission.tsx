import { Card } from "@/components/ui/card"

export function Mission() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
              <p className="text-lg md:text-xl text-balance text-muted-foreground">
                We're on a mission to accelerate blockchain-enabled climate solutions on a global scale, catalyzing
                diverse forms of climate action in order to create a sustainable and equitable future for all.
              </p>
              <p className="text-balance text-xl text-muted-foreground">
                Through strategic grant distribution coupled with support, we empower climate projects that are
                dedicated to reducing greenhouse gas emissions and serving as essential core infrastructure for web3
                climate solutions.
              </p>
              <p className="text-balance text-xl text-muted-foreground">
                Climate Coordination Network has empowered the community to turn climate concern into collective action;
                funding high-impact projects, advancing on-chain carbon markets, and fostering transparency in climate
                finance. Thanks to crypto-native funding, we've built tools that bridge Web3 innovation with real-world
                environmental impact.
              </p>
              <p className="text-lg md:text-xl font-semibold text-primary text-balance">
                Together, we can make crypto a force for planetary good.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
