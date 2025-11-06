"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ChevronDown } from "lucide-react"

export function FeaturedProjects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      name: "Astral Protocol",
      location: "UK",
      funding: "$45,000+",
      rounds: 10,
      description:
        "Pioneering the decentralized geospatial web—building privacy-focused alternatives to Google Maps with location data as a public good.",
      impact: "Helping verify reforestation projects and validate satellite data for climate scientists.",
      tags: ["Geospatial", "Privacy", "Climate Monitoring"],
    },
    {
      name: "Atlantis",
      location: "India",
      funding: "$150,000+",
      rounds: 13,
      description:
        'Creating a peer-to-peer impact network—the "GitHub for climate impact" that tracks and incentivizes real-world actions.',
      impact: "Could connect 10M+ grassroots climate efforts to funding by 2030, bridging the $4T climate funding gap.",
      tags: ["Impact Tracking", "Web3", "Microloans"],
    },
    {
      name: "Beyond Fossil Fuels",
      location: "Canada",
      funding: "Gitcoin/CCN funded",
      rounds: 3,
      description:
        "Uplifting Indigenous legal battles where defending sovereignty means stewarding the earth—supporting land defenders blocking pipelines and challenging climate inaction.",
      impact:
        "Supporting Tiny House Warriors, Tsleil-Waututh Nation's Sacred Trust, and Wet'suwet'en Constitutional case to halt tar sands expansion.",
      tags: ["Indigenous Rights", "Legal Action", "Pipeline Resistance"],
    },
    {
      name: "Blue Energy Reef",
      location: "Indonesia",
      funding: "$92,000",
      rounds: 1,
      description:
        "Merging Biorock reef restoration with ocean-powered renewable energy, creating resilient reefs that grow 10x faster.",
      impact: "Reefs sequester 900M tons of CO₂ yearly, buffer 95% of wave energy, support $30B in economic value.",
      tags: ["Ocean", "Coral Reefs", "Blue Energy"],
    },
    {
      name: "Blue Filter",
      location: "Palestine",
      funding: "$80,000+",
      rounds: 2,
      description:
        "Tackling water scarcity with innovative plant-based filtration technology—providing sustainable, low-cost clean drinking water while reducing carbon emissions from energy-intensive purification.",
      impact:
        "Eco-friendly filtration using plant seeds eliminates harmful chemicals and high-energy processes. Serving communities in Gaza, West Bank, Egypt, Iraq, and Jordan. Could prevent millions of tons of CO₂ from desalination and chemical treatments.",
      tags: ["Water Purification", "Clean Technology", "Climate Adaptation"],
    },
    {
      name: "GainForest",
      location: "Switzerland",
      funding: "$29,900+",
      rounds: 11,
      description:
        "Using AI and blockchain to turn Indigenous stewards into verified conservationists, protecting 80% of global biodiversity.",
      impact: "Built AI tools to digitize Indigenous ecological knowledge, now used in COP negotiations.",
      tags: ["AI", "Indigenous Rights", "Conservation"],
    },
    {
      name: "Kokonut Network",
      location: "Dominican Republic",
      funding: "$55,249",
      rounds: 7,
      description:
        "Combining syntropic agroforestry with decentralized governance to rebuild food forests and economies from the ground up.",
      impact: "Sequester 5x more carbon than monocultures, generating $3,200+/hectare annual income.",
      tags: ["Agroforestry", "ReFi", "Food Security"],
    },
    {
      name: "ReFi DAO",
      location: "Global",
      funding: "$350,000",
      rounds: 10,
      description:
        "ReFi DAO exists to support, scale, and empower the ReFi movement by developing public goods, funding models, and infrastructure that enable regenerative projects to thrive.",
      impact:
        "Since 2021, distributed $100,000+ to 30+ Local Nodes while hosting 100+ events across 58+ cities. Built foundational Web3 tools including Impact Data Commons for on-chain impact tracking and Prosperity Passport, connecting local regenerative projects with global funding through innovative models like retroactive and quadratic funding.",
      tags: ["ReFi Infrastructure", "Community Building", "Education"],
    },
    {
      name: "Shamba Network",
      location: "Kenya",
      funding: "$110,000+",
      rounds: 4,
      description:
        "Building decentralized monitoring, reporting, and verification (dMRV) tools—turning satellite data and blockchain into financial lifelines for 500M smallholder farmers.",
      impact:
        "Could verify 50M+ tons of CO₂ sequestration annually, unlocking the $10B voluntary carbon market for smallholders.",
      tags: ["dMRV", "Carbon Markets", "Smallholder Farmers"],
    },
    {
      name: "Solar Foundation",
      location: "US/Africa",
      funding: "$58,775",
      rounds: 5,
      description:
        "Deploying solar microgrids and appliances across Nigeria, Tanzania, Uganda, and Kenya—turning sunlight into financial freedom while slashing emissions.",
      impact:
        "Built 10+ solar projects, distributed 400+ solar lanterns, offsetting 12+ tons of CO₂ yearly per project.",
      tags: ["Solar Energy", "Energy Access", "Off-Grid"],
    },
    {
      name: "Solarpunk Nomads",
      location: "Italy",
      funding: "$49,000",
      rounds: 8,
      description:
        "Turning climate adaptation into a mobile, joyful movement—proving that zero-emission living can be scalable and educational.",
      impact: "Built 4 zero-carbon vehicles, led 10+ workshops across 3 continents.",
      tags: ["Mobility", "Education", "Zero-Carbon"],
    },
    {
      name: "The Elephant Room",
      location: "Canada",
      funding: "CCN funded",
      rounds: 2,
      description:
        "Crafting high-impact multimedia campaigns that turn climate apathy into action—partnering with Indigenous communities, local governments, and activists to make climate solutions tangible and urgent.",
      impact:
        "Stopped destructive projects like the Raven Coal Mine, supported Indigenous nations against pipelines, created award-winning programs like Cool Neighborhoods (UN-recognized), and mobilized voters with VoteClimate campaigns.",
      tags: ["Media Campaigns", "Climate Communication", "Grassroots Organizing"],
    },
  ]

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/50 to-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Spotlighting innovative initiatives rewriting our climate future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index

            return (
              <Card
                key={index}
                className={`p-4 bg-card border-2 border-primary/10 hover:border-primary/40 transition-all cursor-pointer dark:border-primary/50 dark:shadow-lg dark:shadow-primary/20 dark:bg-card/80 dark:hover:border-primary/70 dark:hover:shadow-xl dark:hover:shadow-primary/30 ${
                  isExpanded ? "md:col-span-2 lg:col-span-3" : ""
                }`}
                onClick={() => toggleProject(index)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1 truncate">{project.name}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="space-y-4 pt-2 border-t-2 border-primary/10 dark:border-primary/30 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Funding: </span>
                          <span className="font-mono font-semibold text-primary">{project.funding}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Rounds: </span>
                          <span className="font-mono font-semibold">{project.rounds}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                        {project.description}
                      </p>

                      <div className="p-3 bg-primary/5 rounded-lg border-2 border-primary/10 dark:border-primary/20">
                        <p className="text-xs text-foreground/80 leading-relaxed text-balance">
                          <span className="font-semibold text-primary">Impact: </span>
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
