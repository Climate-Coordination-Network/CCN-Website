export function Mission() {
  return (
    <section id="mission" className="bg-background pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="index-tag">Mission</p>
        <div className="mt-6 ledger-rule" />

        <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.1rem)] font-light leading-[1.08] tracking-[-0.015em] text-foreground">
              Turning climate concern into{" "}
              <span className="italic text-primary">collective action.</span>
            </h2>
            <p className="mt-8 max-w-md font-display text-2xl font-light italic leading-snug text-secondary">
              &ldquo;Together, we can make crypto a force for planetary good.&rdquo;
            </p>
          </div>

          <div className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              We accelerate blockchain-enabled climate solutions on a global scale,
              catalyzing diverse forms of climate action to build a sustainable and
              equitable future for all.
            </p>
            <p>
              Through strategic grant distribution paired with hands-on support, we
              empower projects reducing greenhouse-gas emissions and building the core
              infrastructure for Web3 climate solutions.
            </p>
            <p>
              CCN funds high-impact projects, advances on-chain carbon markets, and
              fosters transparency in climate finance, bridging Web3 innovation with
              measurable, real-world environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
