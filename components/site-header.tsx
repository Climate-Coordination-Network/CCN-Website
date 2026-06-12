"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ImpactReportButton } from "@/components/impact-report-button"

const nav = [
  { label: "Mission", href: "#mission" },
  { label: "Impact", href: "#impact" },
  { label: "Partners", href: "#partners" },
  { label: "Projects", href: "#projects" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = open ? "hidden" : prev
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Climate Coordination Network"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="font-display text-[15px] font-semibold leading-none tracking-tight text-foreground">
            Climate Coordination
            <span className="block text-[11px] font-normal uppercase tracking-[0.22em] text-muted-foreground">
              Network
            </span>
          </span>
        </a>

        {/* Hamburger — the single site-navigation control */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-muted"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu panel */}
      {open && (
        <>
          <button
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-40 cursor-default bg-foreground/20 backdrop-blur-sm"
          />
          <nav className="absolute inset-x-0 top-full z-50 border-b border-border bg-background shadow-lg">
            <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
              <ul className="divide-y divide-border">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center py-4 transition-colors hover:text-primary"
                    >
                      <span className="font-display text-xl font-light text-foreground">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ImpactReportButton
                  size="lg"
                  className="w-full rounded-sm bg-primary font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/90"
                >
                  Open Impact Report
                </ImpactReportButton>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
