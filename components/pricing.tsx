"use client"

import { motion } from "framer-motion"
import { Check, Cross } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Pricing = () => {
  return (
    <section id="pricing" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          Simple, <span className="text-primary">Transparent</span> Pricing
        </h2>
        <p className="section-subheading max-w-3xl mx-auto">
          No hidden fees, no premium tiers - just powerful tools to help you succeed
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-xl mx-auto">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="h-full ">
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground ml-2">/ forever</span>
              </div>
              <CardDescription className="mt-2">
                Perfect for individual developers preparing for interviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI-powered code analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Company tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Big O Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Hand Pick videos database</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>YouTube integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Excalidraw sketching</span>
                </li>
                <li className="flex items-start gap-2">
                  <Cross className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 rotate-45" />
                  <span>Cloud sync</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">ENJOY</Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="h-full border-primary">
            <CardHeader>
              <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full w-fit mb-4">
                RECOMMENDED
              </div>
              <CardTitle>Pro Plan</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-muted-foreground ml-2">/ month</span>
              </div>
              <CardDescription className="mt-2">Enhanced features for serious interview preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Everything in Free plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Advanced algorithm pattern recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized study plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Mock interview simulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default">
                Upgrade to Pro
              </Button>
            </CardFooter>
          </Card>
        </motion.div> */}
      </div>

      {/* <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          Need a custom plan for your team or organization?{" "}
          <a href="#contact" className="text-primary hover:underline">
            Contact us
          </a>
        </p>
      </div> */}
    </section>
  )
}

export default Pricing

