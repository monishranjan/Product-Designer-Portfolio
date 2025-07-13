"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const projectData = [
  {
    slug: "burnr-box",
    name: "Burnr Box",
    period: "Jan 2023 - Present",
    domain: "Web Design",
    description: "This project is about redesigning the ordering system...",
  },
  {
    slug: "fitnest",
    name: "FitNest App",
    period: "Aug 2022 - Dec 2022",
    domain: "Mobile UI",
    description: "Worked on mobile UX flow for a fitness startup...",
  },
  {
    slug: "techcore",
    name: "TechCore",
    period: "May 2022 - Jul 2022",
    domain: "Dashboard Design",
    description: "Contributed to redesigning dashboards and admin tools...",
  },
  {
    slug: "freelance",
    name: "Freelance Clients",
    period: "Feb 2022 - Apr 2022",
    domain: "Landing Pages",
    description: "Worked with small businesses on mobile-first websites.",
  },
  {
    slug: "campus-creative",
    name: "Campus Creative",
    period: "Jun 2021 - Jan 2022",
    domain: "Graphic Design",
    description: "Posters, digital banners and creatives for events.",
  },
];

export default function ProjectsPage() {
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
          All Projects
        </motion.h1>
      </div>

      {/* Project Cards */}
      <div className="lex flex-col gap-10 pl-20 relative overflow-hidden">
        {projectData.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="w-full mb-10"
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="flex flex-col md:flex-row p-4 md:p-0 gap-6 border-l border-t border-b border-gray-400 rounded-l-xl overflow-hidden">
                {/* Left: Project image placeholder */}
                <div className="projectImage bg-gray-200 md:w-3/5 w-full min-h-[300px]" />

                {/* Right: Project details */}
                <div className="md:w-2/5 w-full projectDetail border border-gray-400 md:my-6 md:mr-4 p-4 rounded-xl">
                  <div className="mb-4">
                    <h1 className="mb-2">Project</h1>
                    <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                      <h1 className="text-right">{project.name}</h1>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h1 className="mb-2">Time Period</h1>
                    <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                      <h1 className="text-right">{project.period}</h1>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h1 className="mb-2">Domain</h1>
                    <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                      <h1 className="text-right">{project.domain}</h1>
                    </div>
                  </div>

                  <div>
                    <h1 className="mb-2">Description</h1>
                    <div className="w-full h-72 border border-gray-400 py-2 px-4 rounded-xl overflow-y-auto">
                      <h1 className="text-right">{project.description}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Let's Connect CTA */}
      <div className="mb-10 md:mb-0 md:my-16 border-t border-gray-500 relative overflow-hidden px-6 md:px-10">
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
