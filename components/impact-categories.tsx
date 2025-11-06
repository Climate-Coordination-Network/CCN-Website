"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Sprout, Trees, Waves, Sun, Network, Users, Leaf, Scale, Trash2, Layers, ChevronDown } from "lucide-react"

export function ImpactCategories() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const categories = [
    {
      icon: Sprout,
      name: "Regenerative Agriculture & Food Security",
      percentage: 15,
      description:
        "Soil is not dirt - it is the skin of the living world. Regenerative agriculture heals those wounds.",
      impact: "Could sequester over 20% of current annual CO₂ emissions",
    },
    {
      icon: Trees,
      name: "Forestry and Reforestation",
      percentage: 15,
      description:
        "Forests are the lungs of the planet. Every sapling is a promise: the future will be greener than the past.",
      impact: "Restoring 350M hectares could sequester 1.7B tons of CO₂ per year",
    },
    {
      icon: Sun,
      name: "Renewable Energy",
      percentage: 8,
      description:
        "Energy need not cost the Earth. Dismantling the fossil empire, one solar panel and turbine at a time.",
      impact: "Solar and wind could avoid 23B tons of CO₂ by 2050",
    },
    {
      icon: Network,
      name: "Web3 & ReFi Infrastructure",
      percentage: 13,
      description:
        "The old systems broke the world; the new ones must repair it. Web3 is a toolbox for transparency and trust.",
      impact: "Blockchain could slash millions of tons of GHG emissions",
    },
    {
      icon: Users,
      name: "Community, Education & Advocacy",
      percentage: 11,
      description: "Change begins where people gather. Education is the spark; community is the fire.",
      impact: "75% of Fortune 500 now disclosing emissions",
    },
    {
      icon: Scale,
      name: "Decentralized & Sustainable Economies",
      percentage: 11,
      description: "Centralization is the cult of more; decentralization is the art of enough.",
      impact: "Could avoid up to 1B tons of CO₂ annually",
    },
    {
      icon: Waves,
      name: "Ocean Regeneration",
      percentage: 6,
      description:
        "The sea does not forget. Ocean regeneration is crucial; restoring coral reefs, rewilding mangroves.",
      impact: "Coastal ecosystems store 5x more carbon than tropical forests",
    },
    {
      icon: Leaf,
      name: "Conservation & Biodiversity",
      percentage: 5,
      description:
        "The fight to save what remains; the last tigers, the vanishing bees, the ecosystems that hum with life.",
      impact: "Protecting 1.2% of Earth could prevent 60% of extinctions",
    },
    {
      icon: Layers,
      name: "Carbon Accounting and Offsetting",
      percentage: 5,
      description: "The atmosphere keeps a ledger. Carbon accounting is the reckoning—measuring what we owe.",
      impact: "Could slash 8B tons/year of GHG emissions",
    },
    {
      icon: Trash2,
      name: "Waste Management",
      percentage: 3,
      description:
        "Turning landfills into lessons, plastic into possibility. The cleanup after the party we never should have thrown.",
      impact: "Could slash global GHG emissions by 10-15% by 2030",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Where the Money Went</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Real-world impact across diverse climate solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category, index) => {
            const isExpanded = expandedCard === index
            return (
              <Card
                key={index}
                className={`p-4 bg-card border-2 border-primary/10 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 cursor-pointer dark:border-primary/50 dark:shadow-lg dark:shadow-primary/20 dark:bg-card/80 dark:hover:border-primary/70 dark:hover:shadow-xl dark:hover:shadow-primary/30 ${
                  isExpanded ? "md:col-span-2" : ""
                }`}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xl font-bold font-mono text-primary">{category.percentage}%</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-balance leading-tight">{category.name}</h3>

                    {isExpanded && (
                      <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-sm text-muted-foreground text-balance leading-relaxed">
                          {category.description}
                        </p>
                        <p className="text-xs text-primary/80 font-medium text-balance">{category.impact}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center pt-1">
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
