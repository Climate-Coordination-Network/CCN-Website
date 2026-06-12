import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google"

// Glasshouse Ledger type system:
// Fraunces — warm high-contrast display serif (solarpunk soul)
// Hanken Grotesk — clean neutral body sans
// IBM Plex Mono — Swiss ledger precision for data & figures
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--ff-display",
  axes: ["SOFT", "opsz"],
})
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--ff-sans" })
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--ff-mono",
})

export const metadata: Metadata = {
  title: "Climate Coordination Network | Funding Climate Innovation",
  description:
    "Verifiable, on-chain climate funding. $5.6M distributed to 389 grassroots projects across 56 countries.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${hankenGrotesk.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
