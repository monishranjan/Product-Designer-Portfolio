"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegCircleDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="w-full p-4 md:p-10">
      <div className="w-full border border-gray-400 rounded-xl p-4 md:p-6">
        <div className="w-full flex flex-col-reverse md:flex-row gap-6 h-full">
          {/* Left (text) */}
          <div className="w-full md:w-3/5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full border border-gray-400 p-4 rounded-xl text-left"
            >
              <h1 className="text-4xl md:text-6xl font-semibold">Hey! I&#39;m Monish</h1>
              <div className="h-[1px] bg-black my-6"></div>
              <h2 className="text-2xl md:text-5xl font-light text-gray-500">I Design the Future!</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full border border-gray-400 p-4 rounded-xl"
            >
              <p className="text-lg text-left">
                I&#39;m a passionate and dedicated Digital & Product Designer with a love for turning ideas into impactful designs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full border border-gray-400 p-3 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <h3 className="text-lg flex items-center gap-3">
                <FaRegCircleDot className="text-green-500" />
                Available for Work
              </h3>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
                <Link href="/contact" className="text-lg border border-gray-400 py-2 px-6 md:px-8 rounded-lg hover:bg-primary hover:text-background transition w-full md:w-auto">
                  Let&apos;s Connect
                </Link>
                <a
                  href="/cvs/monish_ranjan_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg bg-primary text-background py-2 px-6 md:px-8 rounded-lg w-full md:w-auto inline-block text-center"
                >
                  Resume/CV
                </a>

              </div>
            </motion.div>
          </div>

          {/* Right (red block) */}
          <div className="w-full md:w-2/5 border border-gray-400 rounded-xl bg-red-400 p-4 md:h-auto min-h-[200px] md:flex-1"></div>
        </div>
      </div>
    </section>
  );
}