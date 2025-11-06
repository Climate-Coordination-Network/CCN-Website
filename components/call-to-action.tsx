import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Zap } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 dark:border-primary/30 dark:shadow-xl dark:shadow-primary/10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

          <div className="relative space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Join the Climate Revolution</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                This is not a victory lap; it's a call to action. We're raising funds for 2026 with a goal to distribute
                at least $1M to early-stage climate innovators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Philanthropic Capital</h3>
                <p className="text-sm text-muted-foreground text-balance">Support funding rounds in 2026</p>
              </div>

              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-4 bg-secondary/10 rounded-xl">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Partnership</h3>
                <p className="text-sm text-muted-foreground text-balance">
                  Co-create and co-fund future rounds with us
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Collaboration</h3>
                <p className="text-sm text-muted-foreground text-balance">
                  Host or co-design rounds with your climate thesis
                </p>
              </div>
            </div>

            <div className="space-y-6 p-6 bg-card/50 rounded-xl border-2 border-primary/20 dark:border-primary/30">
              <p className="text-lg text-center text-balance leading-relaxed">
                The funding landscape is still failing early-stage climate innovators. There are few mechanisms to get
                capital into the hands of grassroots builders—especially those in the Global South—when they need it
                most.
              </p>
              <p className="text-center text-primary font-semibold text-lg">
                Let's fill the gap between ideas and scale, together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
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

            <div className="text-center pt-4"></div>
          </div>
        </Card>
      </div>
    </section>
  )
}
