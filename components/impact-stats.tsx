import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Zap, Users } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "$5,617,895",
      label: "Total Funding Deployed",
      description: "Across 12 funding rounds",
    },
    {
      icon: DollarSign,
      value: "$1,104,562",
      label: "Crowdfunded",
      description: "Community-powered support",
    },
    {
      icon: Zap,
      value: "389",
      label: "Unique Projects",
      description: "Early-stage climate innovators",
    },
    {
      icon: Users,
      value: "1,115",
      label: "Total Grants",
      description: "Supporting grassroots builders",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Numbers That Matter</h2>
          <p className="text-xl max-w-2xl mx-auto text-balance text-muted-foreground">
            389 experiments in survival—each project a bet on a cooler, fairer future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 dark:border-primary/30 dark:shadow-lg dark:shadow-primary/5"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/15 rounded-xl">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-mono text-primary">{stat.value}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
