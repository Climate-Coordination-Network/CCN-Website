"use client"

import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  to: number
  durationMs?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

// Ledger tally — figures count up once the element scrolls into view.
export function CountUp({
  to,
  durationMs = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setValue(to)
      return
    }

    const run = (start: number, now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      // easeOutExpo — fast tally that settles, like a ledger landing
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setValue(to * eased)
      if (t < 1) requestAnimationFrame((n) => run(start, n))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          requestAnimationFrame((now) => run(now, now))
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [to, durationMs])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
