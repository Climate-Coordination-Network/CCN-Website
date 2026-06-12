import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { ImpactStats } from "@/components/impact-stats"
import { ImpactCategories } from "@/components/impact-categories"
import { Partners } from "@/components/partners"
import { FeaturedProjects } from "@/components/featured-projects"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Mission />
      <ImpactStats />
      <ImpactCategories />
      <Partners />
      <FeaturedProjects />
      <CallToAction />
      <Footer />
    </main>
  )
}
