"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ExpandableCard from "@/components/expandable-card"
import { productivityData, businessData, healthData, lifestyleData, workData, meditationData, japaneseData } from "@/lib/content"

const categoryConfig = {
  productivity: {
    title: "Productivity Exercises",
    subtitle: "Work smarter, not harder — simple actions to boost focus and energy.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    data: productivityData,
  },
  business: {
    title: "Business Growth Habits",
    subtitle: "Smart habits that help you grow faster and lead better.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    data: businessData,
  },
  health: {
    title: "Healthy Living Routines",
    subtitle: "Simple, daily actions that keep your mind and body strong.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    data: healthData,
  },
  lifestyle: {
    title: "Mindful Lifestyle Habits",
    subtitle: "Balance work, health, and happiness through mindful routines.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    data: lifestyleData,
  },
  work: {
    title: "Professional Excellence Habits",
    subtitle: "Master workplace skills and build a thriving career.",
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-100",
    data: workData,
  },
  meditation: {
    title: "Meditation Practices",
    subtitle: "Mindful meditation practices.",
    color: "from-lime-400 to-lime-500",
    bgColor: "bg-lime-100",
    data: meditationData,
  },
    japanese: {
    title: "Japanese Tricks",
    subtitle: "Japanese productivity hacks.",
    color: "from-pink-400 to-pink-500",
    bgColor: "bg-pink-100",
    data: japaneseData,
  },
}

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const category = params.category as string
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const config = categoryConfig[category as keyof typeof categoryConfig]

  if (!config) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
        <Navbar isScrolled={isScrolled} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Category not found</h1>
            <Link href="/" className="text-primary hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar isScrolled={isScrolled} />

      <section
        className={`bg-gradient-to-br ${config.color} text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <Link href="/">
              <motion.button
                whileHover={{ x: -4, scale: 1.05 }}
                whileTap={{ x: -2, scale: 0.95 }}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
            </Link>
            <span className="text-sm sm:text-base font-semibold opacity-90">Back to Categories</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">{config.title}</h1>
            <p className="text-base sm:text-lg opacity-90 text-balance">{config.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #f9f5ff 0%, #fce7f3 25%, #e0f2fe 50%, #fce7f3 75%, #f9f5ff 100%)",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-4 sm:space-y-6">
            {config.data.map((item, index) => (
              <ExpandableCard
                key={index}
                title={item.title}
                description={item.description}
                tip={item.tip}
                color={config.color.split(" ")[1]}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
