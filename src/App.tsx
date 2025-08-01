import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Solution } from "@/components/sections/Solution"
import { Features } from "@/components/sections/Features"
import { Mission } from "@/components/sections/Mission"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Mission />
      <CTA />
      <Footer />
    </div>
  )
}

export default App