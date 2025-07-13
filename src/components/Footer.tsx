"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("monishranjan9@gmail.com").then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    } else {
      console.warn("Clipboard API not available");
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full border-t border-gray-400 py-10 px-6 md:px-12 bg-background text-text mt-24"
    >
      <div className="flex flex-col md:flex-row gap-10 justify-between items-start w-full">
        {/* Left Section */}
        <div className="w-full md:w-3/5 flex flex-col justify-between items-center md:items-start md:min-h-[250px]">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold">Monish</h1>
            <h2 className="font-normal text-lg text-gray-600">Product Designer</h2>
          </div>

          {/* Desktop only copyright */}
          <div className="mt-auto hidden md:block">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Monish Ranjan. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 space-y-6 border border-gray-400 p-4 rounded-xl">
          {/* Pages */}
          <div>
            <h1 className="mb-2">Pages:</h1>
            <div className="flex flex-wrap justify-between gap-4 border border-gray-400 p-4 rounded-lg">
              <Link href="/" className="text-base hover:underline hover:font-medium">Home</Link>
              <Link href="/projects" className="text-base hover:underline hover:font-medium">Projects</Link>
              <Link href="/work" className="text-base hover:underline hover:font-medium">Experience</Link>
              <Link href="/about" className="text-base hover:underline hover:font-medium">About</Link>
              <Link href="/contact" className="text-base hover:underline hover:font-medium">Contact</Link>
            </div>
          </div>

          {/* Socials & Email */}
          <div>
            <h1 className="mb-2">Socials:</h1>
            <div className="flex flex-wrap justify-between gap-4 border border-gray-400 p-4 rounded-lg bg-primary text-background">
              <Link href="https://www.behance.net/monishranjan" target="_blank" className="text-base hover:underline">Behance</Link>
              <Link href="https://dribbble.com/monishranjan" target="_blank" className="text-base hover:underline">Dribbble</Link>
              <Link href="https://www.linkedin.com/in/monishranjan" target="_blank" className="text-base hover:underline">LinkedIn</Link>

              {/* Copyable Email */}
              <button
                onClick={handleCopyEmail}
                className="relative text-base hover:underline focus:outline-none"
              >
                monishranjan9@gmail.com
                {copied && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded-md">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only copyright */}
      <div className="mt-6 text-center md:hidden">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Monish Ranjan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
