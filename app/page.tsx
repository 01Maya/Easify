"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FunFactsCarousel from "@/components/fun-facts-carousel"
import { motion } from "framer-motion"
import { HyperText } from "@/components/ui/hyper-text" // MagicUI HyperText import

const categories = [
  {
    id: "productivity",
    title: "Productivity",
    subtitle: "Work smarter, not harder",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    icon: "⚡",
  },
  {
    id: "business",
    title: "Business",
    subtitle: "Smart growth habits",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    icon: "📈",
  },
  {
    id: "health",
    title: "Health",
    subtitle: "Daily wellness routines",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    icon: "💚",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    subtitle: "Mindful living habits",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    icon: "🌟",
  },
  {
    id: "work",
    title: "Work",
    subtitle: "Professional excellence habits",
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-100",
    icon: "💼",
  },
  {
    id: "japanese",
    title: "Japanese Tricks",
    subtitle: "Japanese productivity hacks",
    color: "from-pink-400 to-pink-500",
    bgColor: "bg-pink-100",
    icon: "💡",
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }
return (
  <main className="min-h-screen relative z-10 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
    <Navbar isScrolled={isScrolled} />

    {/* Hero Section */}
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          Intelligent Reads for{" "}
          <motion.span
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Evolving Minds
          </motion.span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
          Discover insights that matter. Blending lifestyle, health, work, growth, and productivity for a smarter, inspired you.
        </p>

        <HyperText
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 
                     bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 
                     bg-clip-text text-transparent inline-block transition-transform 
                     hover:scale-105"
          duration={2500}
          delay={800}
          animateOnHover={true}
        >
          Ease in. Level up. Live better.
        </HyperText>
      </motion.div>

      {/* ✅ Scroll Icon fixed to bottom */}
      <div
        className="absolute bottom-10 flex justify-center w-full animate-bounce-soft cursor-pointer"
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight * 0.9,
            behavior: "smooth",
          });
        }}
      >
        <ChevronDown className="w-6 h-6 text-primary/60 hover:text-primary transition-colors duration-300" />
      </div>
    </section>

      {/* Category Cards Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link href={`/${category.id}`} className="block">
                  <motion.div
                    className={`h-64 sm:h-72 rounded-2xl bg-gradient-to-br ${category.color} p-6 sm:p-8 flex flex-col justify-between cursor-pointer shadow-lg overflow-hidden relative group`}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-5xl sm:text-6xl mb-4">{category.icon}</div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {category.title}
                      </h2>
                      <p className="text-white/90 text-sm sm:text-base">
                        {category.subtitle}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="relative z-10 flex items-center gap-2 text-white font-semibold"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Explore</span>
                      <span>→</span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <FunFactsCarousel />
      <Footer />
    </main>
  )
}
