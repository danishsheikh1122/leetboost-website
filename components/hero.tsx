"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Chrome } from "lucide-react" // Import Chrome icon

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const rect = heroRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      const xPercent = x / rect.width
      const yPercent = y / rect.height

      const moveX = (xPercent - 0.5) * 20
      const moveY = (yPercent - 0.5) * 20

      heroRef.current.style.setProperty("--move-x", `${moveX}px`)
      heroRef.current.style.setProperty("--move-y", `${moveY}px`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(255, 161, 22, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
      }}
    >
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url("/grid.svg")',
          backgroundSize: "50px 50px",
          transform: "translateX(var(--move-x, 0)) translateY(var(--move-y, 0))",
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your smart companion to
              <span className="gradient-text block mt-2">crack coding interviews</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              LeetBoost integrates with DeepSeek 671B AI to provide code complexity analysis, comprehensive insights,
              and everything you need to ace your technical interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg px-8">
                <Link target="_blank" href="https://chromewebstore.google.com/detail/flaiolpaemmhhehdgcigplkjgbgiealf?utm_source=item-share-cb">
                  DOWNLOAD NOW
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            {/* Available on Section */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-muted-foreground text-lg">Available on:</span>
              <Link
                href="https://chromewebstore.google.com/detail/flaiolpaemmhhehdgcigplkjgbgiealf?utm_source=item-share-cb"
                target="_blank"
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Chrome className="h-6 w-6 text-primary" />
                <span>Chrome Web Store</span>
              </Link>
              {/* Future support */}
              <span className="text-muted-foreground text-lg opacity-50">| Edge & Firefox (Coming soon)</span>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mt-[2rem]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-amber-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                <img
                  src="/heroimage.png?height=400&width=800"
                  alt="LeetBoost Dashboard"
                  className="w-full h-[50rem]"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
