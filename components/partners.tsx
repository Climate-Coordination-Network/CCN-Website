// Logos can be dropped into /public/partners/<slug>.svg later and swapped in
// for the text label — the tile layout is sized to hold them.
const funders = [
  "Momus", "Octant", "Giveth", "Charmverse", "Arbitrum", "Optimism", "Gitcoin",
  "FileCoin Green", "FileCoin", "BigGreen DAO", "Regen Network", "Toucan", "Celo", "Stakefish",
]

const partners = ["Octant", "Giveth", "Charmverse", "Arbitrum", "Optimism", "Regen Network"]

export function Partners() {
  return (
    <section id="partners" className="border-y border-border bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="index-tag">Partners &amp; Funders</p>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-tight tracking-[-0.015em] text-foreground">
          Backed by the builders of regenerative finance
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          CCN&rsquo;s grants are powered by an ecosystem of funders and partners who believe
          climate capital should be transparent, on-chain, and community-led.
        </p>

        {/* Funders */}
        <div className="mt-12">
          <h3 className="index-tag text-accent">Funders</h3>
          <div className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-2">
            {funders.map((name) => (
              <div
                key={name}
                className="flex min-h-14 items-center justify-center rounded-sm border border-border bg-card px-2 py-2 text-center transition-colors hover:border-primary/40 hover:bg-accent/5"
              >
                <span className="font-display text-[11px] font-medium leading-tight text-foreground/80 sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborations */}
        <div className="mt-12">
          <h3 className="index-tag text-accent">Collaborations &amp; Partnerships</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {partners.map((name) => (
              <span
                key={name}
                className="rounded-sm border border-border bg-card px-4 py-2 font-mono text-sm tracking-[0.02em] text-foreground/80 transition-colors hover:border-primary/50"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
