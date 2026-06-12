import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/count-up"
import { ImpactReportButton } from "@/components/impact-report-button"

const ledger = [
  { index: "01", value: 5.6, prefix: "$", suffix: "M", decimals: 1, label: "Distributed in grants", note: "Direct to builders" },
  { index: "02", value: 389, label: "Projects funded", note: "Grassroots-led" },
  { index: "03", value: 56, label: "Countries reached", note: "Six continents" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* Grow-lamp sun, top-right, sun through greenhouse glass */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full animate-sun-pulse"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent) 55%, transparent) 0%, transparent 62%)",
        }}
      />
      {/* Faint Swiss baseline grid, vertical hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)",
          backgroundSize: "clamp(80px, 12.5vw, 160px) 100%",
          maskImage: "linear-gradient(to bottom, black, transparent 92%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: headline column */}
          <div>
            <p className="index-tag animate-grow-up">
              <span className="text-primary">●</span>&nbsp;&nbsp;Coordinating capital for the climate
            </p>

            <h1
              className="mt-6 font-display text-[clamp(2.7rem,6vw,4.6rem)] font-light leading-[1.02] tracking-[-0.02em] text-foreground animate-grow-up"
              style={{ animationDelay: "0.05s" }}
            >
              We fund the people{" "}
              <span className="italic text-primary">growing</span> a
              <br className="hidden md:block" /> livable climate future.
            </h1>

            <p
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground animate-grow-up"
              style={{ animationDelay: "0.12s" }}
            >
              Climate Coordination Network turns crypto into transparent, on-chain
              grants, putting capital directly in the hands of grassroots
              innovators cutting emissions in the real world.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row animate-grow-up"
              style={{ animationDelay: "0.18s" }}
            >
              <ImpactReportButton
                size="lg"
                className="rounded-sm bg-primary px-7 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/90"
              >
                See the impact report
              </ImpactReportButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-sm border-foreground/25 bg-transparent px-7 font-mono text-xs uppercase tracking-[0.14em] text-foreground hover:bg-foreground/[0.04]"
              >
                <a href="#projects">Partner with us</a>
              </Button>
            </div>

            <p
              className="mt-6 flex items-center gap-2 font-mono text-xs tracking-[0.04em] text-muted-foreground animate-grow-up"
              style={{ animationDelay: "0.24s" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Every grant traceable on-chain, no greenwashing, just receipts.
            </p>
          </div>

          {/* Right: seed-catalog ledger */}
          <div className="relative">
            <p className="index-tag mb-4 text-accent">The ledger</p>
            <dl className="divide-y divide-border border-y border-border">
              {ledger.map((row, i) => (
                <div
                  key={row.index}
                  className="flex items-baseline gap-4 py-4 animate-grow-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <span className="index-tag w-6 shrink-0 pt-1">{row.index}</span>
                  <div className="flex-1">
                    <dt>
                      <CountUp
                        to={row.value}
                        prefix={row.prefix}
                        suffix={row.suffix}
                        decimals={row.decimals ?? 0}
                        className="tabular font-mono text-4xl font-medium leading-none text-foreground md:text-5xl"
                      />
                    </dt>
                    <dd className="mt-2 flex items-center justify-between gap-3">
                      <span className="text-sm text-muted-foreground">{row.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        {row.note}
                      </span>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Closing ledger rule, the Swiss spine handing off to the next section */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="ledger-rule" />
      </div>
    </section>
  )
}
