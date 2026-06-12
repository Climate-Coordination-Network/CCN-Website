import { CountUp } from "@/components/count-up"

const stats = [
  { index: "01", to: 5617895, prefix: "$", label: "Total funding deployed", note: "Across 12 funding rounds" },
  { index: "02", to: 1104562, prefix: "$", label: "Crowdfunded", note: "Community-powered support" },
  { index: "03", to: 389, label: "Unique projects", note: "Early-stage climate innovators" },
  { index: "04", to: 1115, label: "Total grants", note: "Supporting grassroots builders" },
]

export function ImpactStats() {
  return (
    <section id="impact" className="border-y border-border bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="index-tag">Impact</p>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-tight tracking-[-0.015em] text-foreground">
          The numbers that matter
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          389 experiments in survival, each project a bet on a cooler, fairer future.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
          {stats.map((s) => (
            <div key={s.index} className="bg-card p-4 transition-colors hover:bg-accent/5 sm:p-7 md:p-9">
              <span className="index-tag text-accent">{s.index}</span>
              <CountUp
                to={s.to}
                prefix={s.prefix}
                className="tabular mt-3 block font-mono text-[clamp(1.35rem,4.5vw,2.5rem)] font-medium leading-none text-foreground sm:mt-4"
              />
              <div className="mt-3 text-sm font-medium text-foreground">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
