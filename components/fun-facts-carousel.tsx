"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const funFacts = [
  {
    fact: "Did you know? People who exercise regularly are 30% more productive at work.",
    icon: "💪",
  },
  {
    fact: "Fun fact: Taking short breaks every hour increases focus and creativity by 25%.",
    icon: "⏰",
  },
  {
    fact: "Interesting: A 10-minute walk can boost your mood and energy levels for hours.",
    icon: "🚶",
  },
  {
    fact: "Science says: Reading for just 6 minutes can reduce stress by up to 68%.",
    icon: "📚",
  },
  {
    fact: "Did you know? Drinking water improves brain function and concentration by 14%.",
    icon: "💧",
  },
  {
    fact: "Fun fact: Meditation for 10 minutes daily can improve memory and focus significantly.",
    icon: "🧘",
  },
    {
    fact: "Did you know? Listening to music while working can improve your cognitive performance by 15%.",
    icon: "🎵",
  },
  {
    fact: "Interesting: People who keep a gratitude journal sleep better and feel happier.",
    icon: "📝",
  },
  {
    fact: "Fun fact: Smiling, even when forced, can trick your brain into feeling happier.",
    icon: "😊",
  },
  {
    fact: "Science says: Spending 20 minutes in natural sunlight boosts vitamin D and mood.",
    icon: "🌞",
  },
  {
    fact: "Did you know? Chewing gum can improve memory and attention for short tasks.",
    icon: "🍬",
  },
  {
    fact: "Fun fact: Drinking green tea can increase brain alertness and calmness simultaneously.",
    icon: "🍵",
  },
  {
    fact: "Interesting: People who declutter their workspace are more productive and focused.",
    icon: "🧹",
  },
  {
    fact: "Science says: Laughing reduces stress hormones and strengthens your immune system.",
    icon: "😂",
  },
  {
    fact: "Did you know? Keeping plants in your workspace can reduce fatigue and improve air quality.",
    icon: "🌱",
  }
]

export default function FunFactsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % funFacts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % funFacts.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + funFacts.length) % funFacts.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Fun Facts & Insights</h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 min-h-32 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-4">{funFacts[current].icon}</div>
                <p className="text-lg md:text-xl text-gray-700 font-medium">{funFacts[current].fact}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg transition-shadow"
            aria-label="Previous fact"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg transition-shadow"
            aria-label="Next fact"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {funFacts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setAutoPlay(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-purple-600 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to fact ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
