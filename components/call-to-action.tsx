import { Button } from "@/components/ui/button"
import { ImpactReportButton } from "@/components/impact-report-button"

const ways = [
  { index: "01", title: "Philanthropic capital", body: "Fund the 2026 grant rounds and put money directly into builders' hands." },
  { index: "02", title: "Partnership", body: "Co-create and co-fund future rounds, shaped around your climate thesis." },
  { index: "03", title: "Collaboration", body: "Host or co-design a round with us and reach grassroots innovators worldwide." },
]

export function CallToAction() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-lg border border-border bg-secondary px-6 py-14 md:px-14 md:py-20">
          {/* grow-lamp glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full animate-sun-pulse"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklch, var(--accent) 45%, transparent) 0%, transparent 65%)",
            }}
          />
          <div className="relative">
            <p className="index-tag text-accent">Join us</p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.015em] text-[oklch(0.97_0.014_95)]">
              Join the climate{" "}
              <span className="italic text-accent">revolution.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[oklch(0.97_0.014_95)]/75">
              This isn&rsquo;t a victory lap, it&rsquo;s a call to action. We&rsquo;re raising for 2026
              with a goal to distribute at least{" "}
              <span className="tabular font-mono text-accent">$1M</span> to early-stage climate
              innovators, especially in the Global South.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-[oklch(0.97_0.014_95)]/15 bg-[oklch(0.97_0.014_95)]/15 sm:grid-cols-3">
              {ways.map((w) => (
                <div key={w.index} className="bg-secondary p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{w.index}</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-[oklch(0.97_0.014_95)]">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[oklch(0.97_0.014_95)]/70">{w.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <ImpactReportButton
                size="lg"
                className="rounded-sm bg-accent px-7 font-mono text-xs uppercase tracking-[0.14em] text-accent-foreground hover:bg-accent/90"
              >
                See the impact report
              </ImpactReportButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-sm border-[oklch(0.97_0.014_95)]/30 bg-transparent px-7 font-mono text-xs uppercase tracking-[0.14em] text-[oklch(0.97_0.014_95)] hover:bg-[oklch(0.97_0.014_95)]/10"
              >
                <a href="mailto:hello@climatecoordination.org">Partner with us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
