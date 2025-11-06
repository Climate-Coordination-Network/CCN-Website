import Image from "next/image"

export function Footer() {
  const partners = [
    "Octant",
    "Giveth",
    "Charmverse",
    "Arbitrum",
    "Optimism",
    "Gitcoin",
    "FileCoin Green",
    "Regen Network",
    "Toucan",
    "Celo",
  ]

  return (
    <footer className="border-t border-primary/10 bg-card/50">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/design-mode/Logo%20Design%20%282%29.png"
                  alt="Climate Coordination Network"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Climate Coordination Network</span>
            </div>
            <p className="text-sm text-muted-foreground text-balance leading-relaxed">
              Accelerating blockchain-enabled climate solutions on a global scale.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Impact Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Funding Rounds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get Involved</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Apply for Funding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-primary/10 pt-8 mb-8">
          <h3 className="text-sm font-semibold mb-4 text-center text-muted-foreground">Our Partners & Funders</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Climate Coordination Network. Making crypto a force for planetary good.</p>
          <p className="mt-2 font-mono text-xs">climatecoordination.org</p>
        </div>
      </div>
    </footer>
  )
}
