import type React from "react"
import type { Metadata } from "next"

import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"
import { Space_Grotesk, JetBrains_Mono, IBM_Plex_Sans as V0_Font_IBM_Plex_Sans, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _ibmPlexSans = V0_Font_IBM_Plex_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Climate Coordination Network | Funding Climate Innovation",
  description:
    "Accelerating blockchain-enabled climate solutions globally. $5.5M distributed to 389 projects across 56 countries.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
