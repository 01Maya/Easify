"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Productivity", href: "/productivity" },
    { label: "Business", href: "/business" },
    { label: "Health", href: "/health" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Work", href: "/work" },
    { label: "Japanese Tricks", href: "/japanese" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                Easify
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-6 lg:gap-8">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl text-purple-600 z-10 relative"
              aria-label="Toggle menu"
            >
              <motion.div animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
                {mobileMenuOpen ? "✕" : "☰"}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg md:hidden z-40"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-medium text-gray-700 hover:text-purple-600 transition-colors py-2 px-4 rounded-lg hover:bg-purple-50 cursor-pointer"
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
