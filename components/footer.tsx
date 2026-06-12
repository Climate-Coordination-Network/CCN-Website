import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-7 md:px-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Climate Coordination Network"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-display text-sm font-semibold leading-tight text-foreground">
            Climate Coordination
            <span className="block text-[10px] font-normal uppercase tracking-[0.2em] text-muted-foreground">
              Network
            </span>
          </span>
        </div>
        <p className="mt-3 max-w-xs text-pretty text-xs leading-relaxed text-muted-foreground">
          Funding the grassroots innovators rewriting our climate future.
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Climate Coordination Network. Making crypto a force for planetary good.</p>
          <p className="font-mono tracking-[0.06em]">climatecoordination.org</p>
        </div>
      </div>
    </footer>
  )
}
