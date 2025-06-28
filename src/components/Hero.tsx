"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hey, I’m Monish.
          <br />
          I design & build modern digital products.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          Product & UI/UX Designer focused on building delightful, user-centered experiences for brands and startups.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View Projects
        </button>
      </motion.div>
    </section>
  )
}
