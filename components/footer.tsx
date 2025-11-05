"use client"

import Link from "next/link";
import { motion } from "framer-motion"


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xxl md:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Easify
            </h3>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base hover:text-purple-400 transition-colors">Ease in. Level up. Live better.</h4>
            <p className="text-gray-400 text-sm md:text-base">
              Discover insights that matter. Transform your life through intentional daily practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/productivity" className="hover:text-purple-400 transition-colors">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-blue-400 transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/health" className="hover:text-green-400 transition-colors">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/lifestyle" className="hover:text-orange-400 transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-purple-600 transition-colors">
                  Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for the latest insights and exclusive content.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-shadow">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center text-xs md:text-sm">
            © 2025 Maya's Journal — All rights reserved. Built with ❤️ using Next.js
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
