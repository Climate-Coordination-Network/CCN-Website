"use client"

import { useEffect, useRef, useState } from "react"

type Category = {
  name: string
  short: string
  percentage: number
  color: string
  blurb: string
  impact: string
}

const categories: Category[] = [
  {
    name: "Regenerative Agriculture, Ecosystem Restoration & Food Security",
    short: "Regenerative Agriculture",
    percentage: 15,
    color: "oklch(0.49 0.099 160)",
    blurb: "Soil is not dirt, it is the skin of the living world, and we have scarred it. Regenerative agriculture heals those wounds.",
    impact: "A global shift could sequester over 20% of current annual CO₂ emissions.",
  },
  {
    name: "Forestry & Reforestation",
    short: "Forestry & Reforestation",
    percentage: 15,
    color: "oklch(0.40 0.07 158)",
    blurb: "Forests are the lungs of the planet. Every sapling is a promise: the future will be greener than the past.",
    impact: "Restoring 350M hectares of degraded forest could sequester 1.7B tons of CO₂ per year.",
  },
  {
    name: "Web3 & ReFi Infrastructure",
    short: "Web3 & ReFi",
    percentage: 13,
    color: "oklch(0.56 0.08 184)",
    blurb: "The old systems broke the world; the new ones must repair it. Web3 is a toolbox for transparency and trust.",
    impact: "Blockchain verification and tokenized carbon markets could slash millions of tons of GHG emissions.",
  },
  {
    name: "Community, Activism & Education",
    short: "Community & Education",
    percentage: 11,
    color: "oklch(0.62 0.07 150)",
    blurb: "Change begins where people gather. Education is the spark; community is the fire.",
    impact: "Advocacy helped drive 75% of Fortune 500 firms to disclose emissions and 90% of G20 nations to draft climate plans.",
  },
  {
    name: "Decentralised & Sustainable Economies",
    short: "Decentralised Economies",
    percentage: 11,
    color: "oklch(0.60 0.09 128)",
    blurb: "Centralization is the cult of more; decentralization is the art of enough.",
    impact: "Community-governed energy, production and carbon markets could avoid up to 1B tons of CO₂ annually.",
  },
  {
    name: "Renewable Energy",
    short: "Renewable Energy",
    percentage: 8,
    color: "oklch(0.77 0.132 78)",
    blurb: "The sun, wind, and rivers whisper the same truth: energy need not cost the Earth.",
    impact: "Solar and wind could avoid 23B tons of CO₂ by 2050; EVs could cut transport emissions by 50–70%.",
  },
  {
    name: "Ocean Regeneration",
    short: "Ocean Regeneration",
    percentage: 6,
    color: "oklch(0.62 0.08 205)",
    blurb: "The sea does not forget. Restoring coral reefs, rewilding mangroves and kelp forests, because a living ocean means a living world.",
    impact: "Coral reefs and mangroves store 5x more carbon per acre than tropical forests.",
  },
  {
    name: "Conservation & Biodiversity",
    short: "Conservation",
    percentage: 5,
    color: "oklch(0.71 0.07 148)",
    blurb: "The fight to save what remains: the last tigers, the vanishing bees, the ecosystems that hum with life.",
    impact: "Protecting just 1.2% of Earth's land could prevent 60% of projected species extinctions.",
  },
  {
    name: "Carbon Accounting & Offsetting",
    short: "Carbon Accounting",
    percentage: 5,
    color: "oklch(0.72 0.10 92)",
    blurb: "The atmosphere keeps a ledger, and we are deep in debt. Carbon accounting is the reckoning.",
    impact: "Verified accounting + offsetting could slash 8B tons/year of GHG if Fortune 500 firms hit net-zero by 2030.",
  },
  {
    name: "Hybrid Projects",
    short: "Hybrid Projects",
    percentage: 5,
    color: "oklch(0.58 0.135 45)",
    blurb: "The wildcards, the hackers, the poets, the mad scientists stitching together improbable answers.",
    impact: "Proof that the fight against climate change needs every kind of mind, every kind of heart.",
  },
  {
    name: "Indigenous & Grassroots Support",
    short: "Indigenous & Grassroots",
    percentage: 3,
    color: "oklch(0.50 0.09 58)",
    blurb: "Indigenous communities have stewarded the earth for millennia; now, their voices lead the way.",
    impact: "Protects 80% of global biodiversity on 20% of land, yet receives less than 1% of climate funding.",
  },
  {
    name: "Waste Management",
    short: "Waste Management",
    percentage: 3,
    color: "oklch(0.60 0.03 120)",
    blurb: "We built a civilization on trash. Waste management is the great unmaking, turning landfills into lessons.",
    impact: "Methane capture, composting and recycling could cut global GHG emissions by 10–15% by 2030.",
  },
]

export function ImpactCategories() {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (e) => e[0].isIntersecting && setShown(true),
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const current = categories[active]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="index-tag">Allocation</p>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-tight tracking-[-0.015em] text-foreground">
          Where the money went
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Every grant, distributed across twelve climate-solution categories. Hover or tap a
          segment to read its story.
        </p>

        {/* Single 0–100% stacked bar, fills one category at a time */}
        <div ref={ref} className="mt-12">
          <div className="flex h-12 w-full overflow-hidden rounded-md border border-border bg-muted">
            {categories.map((c, i) => (
              <button
                key={c.name}
                type="button"
                aria-label={`${c.short}, ${c.percentage}%`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative h-full transition-[width,flex-grow] duration-700 ease-out"
                style={{
                  width: shown ? `${c.percentage}%` : "0%",
                  backgroundColor: c.color,
                  transitionDelay: `${i * 110}ms`,
                  opacity: active === i ? 1 : 0.82,
                  boxShadow: active === i ? "inset 0 0 0 2px var(--background)" : "none",
                }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>0%</span>
            <span>100% · $5.6M deployed</span>
          </div>
        </div>

        {/* Legend, 3 columns × 4 rows */}
        <ul className="mt-10 grid grid-cols-3 gap-x-4 gap-y-1 sm:gap-x-8">
          {categories.map((c, i) => (
            <li key={c.name}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-3 border-b border-border py-2.5 text-left transition-colors ${
                  active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-[2px]"
                  style={{ backgroundColor: c.color, opacity: active === i ? 1 : 0.7 }}
                />
                <span className="flex-1 truncate text-sm">{c.short}</span>
                <span className="tabular font-mono text-sm font-medium">{c.percentage}%</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Detail panel, full width below the legend */}
        <div className="mt-8 grid gap-x-8 gap-y-4 rounded-md border border-border bg-card p-6 md:grid-cols-[10rem_1fr] md:p-8">
          <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-2">
            <span
              className="tabular font-mono text-5xl font-medium leading-none"
              style={{ color: current.color }}
            >
              {current.percentage}%
            </span>
            <span className="index-tag text-accent">{String(active + 1).padStart(2, "0")} / 12</span>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium leading-tight text-foreground">
              {current.name}
            </h3>
            <p className="mt-2 max-w-2xl text-pretty text-sm italic leading-relaxed text-muted-foreground">
              {current.blurb}
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-foreground/80">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                Why it matters:{" "}
              </span>
              {current.impact}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
