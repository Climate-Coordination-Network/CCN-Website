"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PDF_URL = "/impact-report.pdf"

type ImpactReportButtonProps = {
  children?: React.ReactNode
  variant?: React.ComponentProps<typeof Button>["variant"]
  size?: React.ComponentProps<typeof Button>["size"]
  className?: string
  /** Render a plain link/menu-item instead of a Button */
  asMenuItem?: boolean
}

export function ImpactReportButton({
  children = "Impact Report",
  variant,
  size,
  className,
  asMenuItem = false,
}: ImpactReportButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {asMenuItem ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "flex w-full items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground",
            className,
          )}
        >
          {children}
          <span aria-hidden className="text-accent">↗</span>
        </button>
      ) : (
        <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
          {children}
        </Button>
      )}
      {open && <ReportViewer onClose={() => setOpen(false)} />}
    </>
  )
}

function ReportViewer({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  if (!mounted) return null

  // Portal to <body> so the fixed overlay escapes any ancestor with a
  // backdrop-filter/transform (e.g. the sticky blurred header), which would
  // otherwise become its containing block and trap it.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Climate Coordination Network Impact Report"
      className="fixed inset-0 z-[100] flex flex-col bg-foreground/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-border bg-background px-4 py-3">
          <div className="min-w-0">
            <p className="index-tag text-accent">Impact Report</p>
            <h2 className="truncate font-display text-base font-medium text-foreground">
              Climate Coordination Network, 2025
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-sm border-border bg-transparent font-mono text-[11px] uppercase tracking-[0.1em]"
            >
              <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                Open tab
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-sm bg-primary font-mono text-[11px] uppercase tracking-[0.1em] text-primary-foreground hover:bg-primary/90"
            >
              <a href={PDF_URL} download="CCN-Impact-Report-2025.pdf">
                Download
              </a>
            </Button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Viewer */}
        <div className="min-h-0 flex-1 bg-muted">
          <iframe
            src={`${PDF_URL}#view=FitH`}
            title="CCN Impact Report"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
