"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FunFactsCarousel from "@/components/fun-facts-carousel"

const categories = [
  { id: "productivity", title: "Productivity", subtitle: "Work smarter, not harder", color: "from-purple-500 to-purple-600", icon: "⚡" },
  { id: "business", title: "Business", subtitle: "Smart growth habits", color: "from-blue-500 to-blue-600", icon: "📈" },
  { id: "health", title: "Health", subtitle: "Daily wellness routines", color: "from-green-500 to-green-600", icon: "💚" },
  { id: "lifestyle", title: "Lifestyle", subtitle: "Mindful living habits", color: "from-orange-500 to-orange-600", icon: "🌟" },
  { id: "work", title: "Work", subtitle: "Professional excellence habits", color: "from-purple-400 to-purple-500", icon: "💼" },
  { id: "meditation", title: "Meditation", subtitle: "Mindful meditation practices", color: "from-lime-400 to-lime-500", icon: "🧘🏻" }, 
  { id: "exercise", title: "Exercise", subtitle: "Effective workout routines", color: "from-sky-400 to-sky-500", icon: "🏋🏻" },
  { id: "japanese", title: "Japanese Tricks", subtitle: "Japanese productivity hacks", color: "from-pink-400 to-pink-500", icon: "💡" },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Ease in🍀", "Level up⚡", "Live better❤️"]

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Word rotation with pause
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3200) // smoother + small pause between words
    return () => clearInterval(interval)
  }, [words.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <main className="min-h-screen relative z-10 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <Navbar isScrolled={isScrolled} />

      {/* ✅ Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 text-center overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Intelligent Reads for{" "}
            <span className="gradient-title bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Evolving Minds
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
            Discover insights that matter. Blending lifestyle, health, work, growth, and productivity for a smarter, inspired you.
          </p>

          {/* ✅ Smooth Word Rotate (custom built) */}
          <div className="w-full flex justify-center items-center relative overflow-hidden" style={{ minHeight: "3.5rem" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                className="absolute text-2xl sm:text-3xl lg:text-4xl font-semibold text-center
                           bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 
                           bg-clip-text text-transparent inline-block drop-shadow-[0_4px_8px_rgba(180,120,255,0.4)]"
                initial={{ opacity: 0, y: 25, rotateX: 80 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -25, rotateX: -80 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Scroll Down Icon */}
        <div
          className="absolute bottom-10 flex justify-center w-full animate-bounce-soft cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" })}
        >
          <ChevronDown className="w-6 h-6 text-primary/60 hover:text-primary transition-colors duration-300" />
        </div>
      </section>

      {/* ✅ Category Cards */}
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
                    className={`h-64 sm:h-72 rounded-2xl bg-gradient-to-br ${category.color} p-6 sm:p-8 
                                flex flex-col justify-between cursor-pointer shadow-lg overflow-hidden relative group`}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="text-5xl sm:text-6xl mb-4">{category.icon}</div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{category.title}</h2>
                      <p className="text-white/90 text-sm sm:text-base">{category.subtitle}</p>
                    </div>

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
