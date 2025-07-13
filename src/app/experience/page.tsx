"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const experiences = [
  {
    role: "Product Designer",
    company: "Burnr Box",
    description: "Working on various projects, focusing on user experience and interface design.",
    duration: "Jan 2023 - Present",
    tag: "BURNR BOX",
    image: "",
  },
  {
    role: "UX Designer",
    company: "FitNest App",
    description: "Revamped mobile user flows and onboarding experience for a health tech startup.",
    duration: "Aug 2022 - Dec 2022",
    tag: "FITNEST",
    image: "",

  },
  {
    role: "UI/UX Intern",
    company: "TechCore",
    description: "Contributed to redesigning dashboards and admin tools for better clarity and usability.",
    duration: "May 2022 - Jul 2022",
    tag: "TECHCORE",
    image: "",

  },
  {
    role: "Freelance Designer",
    company: "Local Brands",
    description: "Worked with small businesses to create visually engaging landing pages and mobile-first websites.",
    duration: "Feb 2022 - Apr 2022",
    tag: "FREELANCE",
    image: "",

  },
  {
    role: "Graphic Designer",
    company: "Campus Creative",
    description: "Designed posters, social media creatives, and digital banners for university events.",
    duration: "Jun 2021 - Jan 2022",
    tag: "CAMPUS CREATIVE",
    image: "",

  },
];

export default function WorkPage() {
  return (
    <section className="w-full">
      {/* Page Header */}
      <div className="relative overflow-hidden px-20 pt-10 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold border border-gray-400 rounded-xl p-6 pt-40"
        >
          All Experiences
        </motion.h1>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-10 pl-20">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="w-full flex flex-col-reverse md:flex-row gap-6 border-y border-l border-gray-400 rounded-l-xl p-4 md:p-8 bg-background"
          >
            {/* Left: Details */}
            <div className="w-full md:w-2/4 md:py-14">
              <h1 className="text-2xl md:text-3xl font-medium mb-1">{exp.role}</h1>
              <h2 className="text-lg text-gray-600">{exp.company}</h2>
              <p className="text-base mt-4 mb-6">{exp.description}</p>
              <p className="inline-block border border-gray-400 text-sm rounded-lg px-4 py-2 bg-primary text-white">
                {exp.duration}
              </p>
            </div>

            {/* Right: Image or Tag */}
            <div className="w-full md:w-2/4 flex items-center justify-center bg-gray-200 rounded-xl p-6 md:p-10 min-h-[150px]">
              {exp.image ? (
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={200}
                  height={100}
                  className="object-contain max-h-32"
                />
              ) : (
                <h1 className="text-3xl md:text-4xl font-bold text-gray-300 text-center">{exp.tag}</h1>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mb-10 md:my-10 border-t border-gray-500 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl flex justify-end items-center gap-20 mt-10 relative z-10"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 rounded-l-xl border-y border-l border-gray-400 px-6 py-6 hover:pl-8 transition w-3/5"
          >
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-gray-400 bg-background p-2 transition group-hover:bg-text group-hover:text-white group-hover:scale-125">
              <FiArrowLeft className="text-xl" />
            </span>
            <span className="text-lg text-text">Let&apos;s Connect</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
