"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

interface ExpandableCardProps {
  title: string
  description: string
  tip: string
  color: string
  index: number
}

export default function ExpandableCard({ title, description, tip, color, index }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setIsExpanded(false)
    }

    window.addEventListener("beforeunload", handleRouteChange)
    return () => window.removeEventListener("beforeunload", handleRouteChange)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const colorMap: { [key: string]: string } = {
    "to-purple-600": "purple",
    "to-blue-600": "blue",
    "to-green-600": "green",
    "to-orange-600": "orange",
  }

  const colorClass = colorMap[color] || "purple"

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-4 sm:p-6 rounded-xl bg-white border-2 border-gray-200 text-left transition-all duration-300 hover:shadow-lg hover:border-gray-300 ${
          isExpanded ? `border-${colorClass}-500 shadow-lg` : ""
        }`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 break-words">
              {title}
            </h3>
            <p
              className={`text-xs sm:text-sm md:text-base text-muted-foreground ${isExpanded ? "line-clamp-none" : "line-clamp-2"} break-words`}
            >
              {description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-${colorClass}-400 to-${colorClass}-600`}
          >
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={`p-4 sm:p-6 bg-gradient-to-br from-${colorClass}-50 to-${colorClass}-100 border-l-4 border-${colorClass}-500 rounded-b-xl`}
            >
              <div className="flex gap-2 sm:gap-3">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-xl sm:text-2xl flex-shrink-0"
                >
                  💡
                </motion.span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Pro Tip:</p>
                  <p className="text-xs sm:text-sm md:text-base text-foreground/80 break-words">{tip}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
