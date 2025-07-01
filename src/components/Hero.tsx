"use client"
import { motion } from "framer-motion"
import { FaRegCircleDot } from "react-icons/fa6";


export default function Hero() {
  return (
    <section className="w-full p-10">
      <div className="w-full border border-gray-400 rounded-xl flex items-center justify-center p-6">
        <div className="w-full flex gap-6">
        <div className="RightPart w-full flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full border border-gray-400 p-4 rounded-xl text-left"
          >
            <h1 className="text-4xl md:text-6xl font-semibold">Hey! I&#39;m Monish</h1>
            <div className="h-[1px] bg-black my-6"></div>
            <h1 className="text-2xl md:text-5xl font-light text-gray-500">I Design the Future!</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full border border-gray-400 p-4 rounded-xl"
          >
            <h1 className="text-lg text-left">I&#39;m a passionate amd dedicated Digital & Product Designer with a love for turning ideas into impactful designs.</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full border border-gray-400 p-3 rounded-xl flex justify-between items-center"
          >
            <h1 className="text-lg flex items-center gap-3"><FaRegCircleDot className="text-green-500"/>Available for Work</h1>
            <h1 className="text-lg border border-gray-400 py-2 px-16 rounded-lg">Let&#39;s Connect</h1>
          </motion.div>
        </div>
        <div className="LeftPart w-2/5 border border-gray-400 rounded-xl p-4"></div>
      </div>
      </div>
    </section>
  )
}
