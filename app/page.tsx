import Hero from "@/components/hero"
import Features from "@/components/features"
import Screenshots from "@/components/screenshots"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Pricing />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  )
}

