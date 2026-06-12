"use client"

import { useEffect, useRef, useState } from "react"

type Project = {
  name: string
  tagline: string
  location: string
  funding: string
  rounds: number
  description: string
  achievements?: string[]
  quote?: string
  potential: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: "Astral Protocol",
    tagline: "Building a Decentralized Geospatial Future",
    location: "UK",
    funding: "$45,000+",
    rounds: 10,
    description:
      "An open-source R&D studio pioneering the decentralized geospatial web, privacy-focused alternatives to Google Maps, Uber, and Tinder that put location data back in users' hands.",
    achievements: [
      "Developed a beta Location Proof Protocol and the user-friendly Astral Logbook app",
      "Sponsored hackathons (Funding the Commons × EarthCommons), attracting 9 projects",
      "Advanced zero-knowledge location proofs, zkMaps was an ETHDenver finalist",
      "Partnered with the University of Maryland to decentralize satellite imagery on IPFS",
    ],
    quote: "We're not just building tech, we're fostering a movement.",
    potential:
      "Astral's tools verify reforestation, track urban carbon footprints, and validate satellite data, bringing transparency to the $2B carbon-offset market.",
    tags: ["Geospatial", "Privacy", "Climate Monitoring"],
  },
  {
    name: "Atlantis",
    tagline: "Building the Impact Layer for Climate Action",
    location: "India",
    funding: "$150,000+",
    rounds: 13,
    description:
      'A peer-to-peer impact network, the "GitHub for climate impact", that verifies, connects, and rewards real-world climate actions, turning fragmented efforts into a global force.',
    achievements: [
      "Launched Impact Miner (live) and Impact Foundry (beta)",
      "Validated the tech with Mercy Corps Ventures",
      "Grew to 4,000+ members while generating early revenue, rare for public-goods projects",
      "Latin America pilot showed 3x higher engagement when actions unlock microloans",
    ],
    quote: "Most impact reporting is either greenwashing or invisible, we're making it transparent and tradable.",
    potential:
      "Atlantis' tools could connect 10M+ grassroots climate efforts to funding by 2030, bridging the $4T climate funding gap.",
    tags: ["Impact Tracking", "Web3", "Microloans"],
  },
  {
    name: "Beyond Fossil Fuels",
    tagline: "Indigenous Stewardship as Climate Justice",
    location: "Canada",
    funding: "Gitcoin/CCN funded",
    rounds: 3,
    description:
      "Uplifting Indigenous legal battles where defending sovereignty is the sacred duty to steward the earth, supporting land defenders blocking pipelines and challenging climate inaction.",
    achievements: [
      "Backed the Tiny House Warriors reclaiming Secwepemc land, blocking the Trans Mountain pipeline",
      "Supported Tsleil-Waututh Nation's Sacred Trust to halt tar sands expansion",
      "Advanced the Wet'suwet'en Constitutional case to align Canada with Paris Agreement limits",
    ],
    quote: "We aren't protesters; we're fulfilling our ancestral duty to the land.",
    potential:
      "Beyond Fossil Fuels isn't funding lawsuits, it's supporting the reclamation of Indigenous stewardship as climate action.",
    tags: ["Indigenous Rights", "Legal Action", "Pipeline Resistance"],
  },
  {
    name: "Blue Energy Reef",
    tagline: "Reviving Reefs with Blue Energy",
    location: "Indonesia",
    funding: "$92,000",
    rounds: 1,
    description:
      "The Gili Eco Trust, with AquaGen, merges Biorock reef restoration with ocean-powered renewable energy, resilient reefs that grow up to 10x faster while running entirely on clean power.",
    achievements: [
      "Deployed the first blue-energy Biorock reef in Gili Trawangan, powered by AquaGen's Minnow marine turbine",
      "Proved Biorock resilience, structures survived the 2016 mass bleaching with 8x faster coral growth",
    ],
    quote: "We're not just saving corals, we're engineering climate resilience.",
    potential:
      "With 90% of reefs at risk by 2050, this model could replicate globally, turning ocean energy into carbon sequestration and coastal protection.",
    tags: ["Ocean", "Coral Reefs", "Blue Energy"],
  },
  {
    name: "Blue Filter",
    tagline: "Clean Water for a Thirsty Planet",
    location: "Palestine",
    funding: "$80,000+",
    rounds: 2,
    description:
      "Tackling water scarcity with plant-based filtration technology, sustainable, low-cost clean drinking water that avoids the carbon emissions of energy-intensive purification.",
    achievements: [
      "Developed an eco-friendly filtration system using plant seeds, no harmful chemicals",
      "Began scaling production to Gaza, the West Bank, Egypt, Iraq, and Jordan",
      "Laid groundwork for local manufacturing and technician training programs",
    ],
    quote: "We're not just filtering water; we're building resilience.",
    potential:
      "With 2 billion people lacking safe water, Blue Filter's model could prevent millions of tons of CO₂ from energy-heavy desalination, while saving lives.",
    tags: ["Water Purification", "Clean Technology", "Climate Adaptation"],
  },
  {
    name: "GainForest",
    tagline: "AI + Blockchain for Indigenous-Led Climate Action",
    location: "Switzerland",
    funding: "$29,900+",
    rounds: 11,
    description:
      "A decentralized science platform that turns Indigenous stewards into verified conservationists, using AI and blockchain to reward the data that safeguards biodiversity.",
    achievements: [
      "Built AI tools to digitize Indigenous ecological knowledge, now used in COP negotiations",
      "Launched Conservation Data Income, rewarding hypercert-backed forest protection",
      "Hosted EcoHackathon 2024 (130+ participants), spawning AI solutions for the Amazon",
    ],
    quote: "Indigenous communities protect 80% of biodiversity, our tech ensures they're paid for it.",
    potential:
      "GainForest's model could channel $1B+ annually to frontline stewards by verifying their impact across three continents.",
    tags: ["AI", "Indigenous Rights", "Conservation"],
  },
  {
    name: "Kokonut Network",
    tagline: "Syntropic Agroforestry Revolution",
    location: "Dominican Republic",
    funding: "$55,249",
    rounds: 7,
    description:
      "Combining syntropic agroforestry with decentralized governance to rebuild food forests and economies from the ground up, while farmers own their data, carbon credits, and future.",
    achievements: [
      "Built 3 operational farms in the Dominican Republic, with 3 more in development",
      "Pioneered a 6-month maturity model (down from 4 years) using organic inputs",
      "Partnered with the Dominican Dept. of Agriculture to scale smallholder land rights via blockchain titles",
    ],
    quote: "We're not just planting trees, we're planting economic systems.",
    potential:
      "Sequesters 5x more carbon than monocultures while generating $3,200+/hectare, an open-source playbook any community can replicate.",
    tags: ["Agroforestry", "ReFi", "Food Security"],
  },
  {
    name: "ReFi DAO",
    tagline: "Scaling the Regenerative Finance Movement",
    location: "Global",
    funding: "$350,000",
    rounds: 10,
    description:
      "Supporting, scaling, and empowering the ReFi movement by developing public goods, funding models, and infrastructure that let regenerative projects thrive.",
    achievements: [
      "Distributed $100,000+ to 30+ Local Nodes since 2021",
      "Hosted 100+ events across 58+ cities",
      "Built Impact Data Commons (on-chain impact tracking) and Prosperity Passport",
    ],
    quote: "Connecting local regenerative projects with global funding through retroactive and quadratic funding.",
    potential:
      "A foundational layer for the ReFi ecosystem, turning grassroots regeneration into fundable, verifiable public goods.",
    tags: ["ReFi Infrastructure", "Community Building", "Education"],
  },
  {
    name: "Shamba Network",
    tagline: "The dMRV Revolution for Smallholder Farmers",
    location: "Kenya",
    funding: "$110,000+",
    rounds: 4,
    description:
      "Decentralized monitoring, reporting, and verification (dMRV) tools, turning satellite data and blockchain into financial lifelines for 500M smallholder farmers and carbon markets alike.",
    achievements: [
      "Built the Web3 Climate Oracle, delivering real-time ecological data",
      "Developed dMRV tools enabling 200,000+ tree plantings and youth-led ground-truth data",
      "Onboarded 10,000+ farmers into carbon markets through workshops",
    ],
    quote: "We're not just measuring trees, we're measuring trust.",
    potential:
      "Shamba's tools could verify 50M+ tons of CO₂ sequestration annually, unlocking the $10B voluntary carbon market for smallholders.",
    tags: ["dMRV", "Carbon Markets", "Smallholder Farmers"],
  },
  {
    name: "The Solar Foundation",
    tagline: "Powering Climate Justice Through Solar Sovereignty",
    location: "US/Africa",
    funding: "$58,775",
    rounds: 5,
    description:
      "Deploying solar microgrids and appliances across off-grid Africa, turning sunlight into financial freedom, education, and healthcare while slashing emissions.",
    achievements: [
      "Built 10+ solar projects across Nigeria, Tanzania, Uganda, and Kenya, including a hospital install serving 2,000+ patients yearly",
      "Distributed 400+ solar lanterns, boosting children's study time by 3 hours/night",
      "Launched the OMAW microgrid in Tanzania, powering a school and offsetting 1 ton of CO₂ monthly",
    ],
    quote: "We're not just installing panels, we're igniting energy independence.",
    potential:
      "With 600 million still off-grid, their model could avoid 50M+ tons of CO₂ annually if scaled.",
    tags: ["Solar Energy", "Energy Access", "Off-Grid"],
  },
  {
    name: "Solarpunk Nomads",
    tagline: "Pioneering Zero-Carbon Nomadism for Climate Resilience",
    location: "Italy",
    funding: "$49,000",
    rounds: 8,
    description:
      "Turning climate adaptation into a mobile, joyful movement, proving that zero-emission living can be scalable, educational, and even fun.",
    achievements: [
      "Built 4 zero-carbon vehicles, incl. a solar camper bike (Belgium) and an electric tuk-tuk (India)",
      "Led 10+ workshops across 3 continents",
      "Established the first Solarpunk Hub in Italy, a prototype for nomadic resilience",
    ],
    quote: "We're not just reducing footprints, we're creating pathways.",
    potential:
      "SPN's model could mobilize 1M+ climate-aware travelers by 2030, cutting emissions while seeding local hubs.",
    tags: ["Mobility", "Education", "Zero-Carbon"],
  },
  {
    name: "The Elephant Room",
    tagline: "Turning Climate Anxiety into Action",
    location: "Canada",
    funding: "CCN funded",
    rounds: 2,
    description:
      "High-impact multimedia campaigns that turn apathy into action, partnering with Indigenous communities, governments, and activists to make climate solutions tangible and urgent.",
    achievements: [
      "Stopped destructive projects like the Raven Coal Mine; backed the Tsleil-Waututh fight against Kinder Morgan",
      "Pioneered UN-recognized programs like Cool Neighborhoods and The Great Climate Race",
      "Mobilized voters with VoteClimate campaigns and challenged Canada's FIPA treaty",
    ],
    quote: "We don't just sound the alarm; we hand people the tools to turn it off.",
    potential:
      "When stories shift, so do power structures, pipelines get stopped, neighborhoods transform, and politicians step up.",
    tags: ["Media Campaigns", "Climate Communication", "Grassroots Organizing"],
  },
]

export function FeaturedProjects() {
  const [active, setActive] = useState<number | null>(null)
  const project = active === null ? null : projects[active]
  const detailRef = useRef<HTMLDivElement>(null)

  // Scroll the detail panel into view when a project opens, offsetting the
  // sticky header so the panel isn't tucked underneath it.
  useEffect(() => {
    if (active === null || !detailRef.current) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" })
  }, [active])

  return (
    <section id="projects" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="index-tag">Projects</p>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-tight tracking-[-0.015em] text-foreground">
          Featured projects
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          A living catalog of {projects.length} grassroots innovators rewriting our climate
          future. Select one to read its story.
        </p>

        {/* Compact name grid */}
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((p, index) => {
            const isActive = active === index
            return (
              <button
                key={p.name}
                type="button"
                onClick={() => setActive(isActive ? null : index)}
                aria-expanded={isActive}
                className={`flex flex-col gap-2 rounded-sm border p-4 text-left transition-colors ${
                  isActive
                    ? "border-primary bg-accent/5"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="index-tag text-accent">P-{String(index + 1).padStart(2, "0")}</span>
                  <span
                    className={`font-mono text-base leading-none transition-transform ${
                      isActive ? "rotate-45 text-primary" : "text-muted-foreground"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </div>
                <span className="font-display text-base font-medium leading-tight text-foreground">
                  {p.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  {p.location}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail panel, opens below the grid */}
        {project && (
          <div ref={detailRef} className="mt-4 scroll-mt-24 rounded-md border border-primary/40 bg-card p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="index-tag text-accent">
                  P-{String((active ?? 0) + 1).padStart(2, "0")} · {project.location}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm italic text-muted-foreground">{project.tagline}</p>
              </div>
              <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
                <span>
                  <span className="block text-[10px] text-foreground/50">FUNDED</span>
                  <span className="tabular text-base font-medium text-primary">{project.funding}</span>
                </span>
                <span>
                  <span className="block text-[10px] text-foreground/50">ROUNDS</span>
                  <span className="tabular text-base font-medium text-foreground">{project.rounds}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.quote && (
                  <p className="border-l-2 border-primary pl-3 font-display text-base italic leading-snug text-foreground">
                    &ldquo;{project.quote}&rdquo;
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {project.achievements && (
                  <ul className="space-y-2">
                    {project.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-snug text-foreground/80">
                        <span className="mt-1 font-mono text-[10px] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="rounded-sm border-l-2 border-accent bg-accent/5 p-4">
                  <p className="text-pretty text-sm leading-relaxed text-foreground/80">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                      Potential:{" "}
                    </span>
                    {project.potential}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
