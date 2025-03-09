"use client"

import { motion } from "framer-motion"
import { Brain, Code2, BarChart3, Building2, Youtube, Database, PenTool, Cloud, Gem, CheckCircle } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Integrated with DeepSeek 671B",
    description:
      "Leverage the power of DeepSeek's 671B parameter AI model for intelligent code analysis and suggestions.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Analyze Code Complexity",
    description: "Get detailed insights into your code's time and space complexity to optimize your solutions.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Comprehensive Insights",
    description: "Track your progress with detailed analytics on problem-solving patterns and improvement areas.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Track Appeared Companies",
    description: "Know which companies frequently ask specific problems to target your preparation effectively.",
  },
  {
    icon: <Youtube className="h-8 w-8 text-primary" />,
    title: "Full YouTube Experience",
    description: "Watch tutorial videos without leaving the platform, saving time and maintaining focus.",
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Top YouTube Videos Database",
    description: "Access a curated collection of the best explanation videos for each LeetCode problem.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Sketch with Excalidraw",
    description: "Visualize algorithms and data structures with the integrated Excalidraw sketching tool.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Automatic Cloud Sync",
    description: "Your progress, notes, and solutions are automatically synced across all your devices.",
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "No Premium Subscription",
    description: "Access all features without any premium subscription requirements or hidden costs.",
  },
]

const Features = () => {
  return (
    <section id="features" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          Why Use <span className="text-primary">LeetBoost</span>?
        </h2>
        <p className="section-subheading max-w-3xl mx-auto">
          Supercharge your coding interview preparation with our comprehensive suite of tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Everything Under the Hood</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p>Advanced algorithm pattern recognition</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p>Personalized study plans based on your progress</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p>Interview simulation with real company questions</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p>Code optimization suggestions</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p>Multiple solution approaches comparison</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p>Regular updates with new features</p>
            </div>
          </div>
          <p className="text-center mt-8 text-lg italic text-muted-foreground">
            "Unlock productivity and efficiency like never before!"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

