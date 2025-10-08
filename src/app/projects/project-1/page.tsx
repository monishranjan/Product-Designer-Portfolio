"use client";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";

// ✅ Import local project images
import ProjectCover from "./project-image/ProjectCover.svg";
import WireframeImg from "./project-image/ProjectCover.png";
import HiFiImg from "./project-image/ProjectCover.png";
import DesignSystemImg from "./project-image/ProjectCover.png";

export default function Project1Page() {
  const sections = [
    {
      title: "Project Title and Role",
      content: (
        <>
          <p>
            <strong>Project:</strong> Mediversal Healthcare App (Mobile & Admin Panel)
          </p>
          <p>
            <strong>Role:</strong> Product Designer
          </p>
          <p>
            Responsible for end-to-end design including research, wireframes, UI design,
            and collaboration with developers.
          </p>
        </>
      ),
      image: ProjectCover, // ✅ now using imported image
    },
    {
      title: "Project Overview",
      content: (
        <p>
          Mediversal Healthcare App is designed to streamline patient management, doctor
          consultations, and internal hospital processes. The product is targeted at
          healthcare providers and patients and is currently in the internal testing phase.
        </p>
      ),
      image: ProjectCover, // or import a separate overview image if you have one
    },
    {
      title: "Problem Statement",
      content: (
        <p>
          Existing healthcare management systems lacked usability, consistency, and
          smooth digital experiences. Challenges included complex appointment scheduling,
          fragmented patient records, and inefficient admin workflows.
        </p>
      ),
    },
    {
      title: "Wireframes and User Flows",
      content: (
        <p>
          Created low-fidelity wireframes and user flows mapping key journeys such as
          booking, patient record updates, and billing. These flows ensured minimal
          steps for core tasks.
        </p>
      ),
      image: WireframeImg,
    },
    {
      title: "High-Fidelity Designs",
      content: (
        <p>
          Designed polished UI screens for appointment booking, patient dashboards, and
          admin management. Each screen focused on clarity, accessibility, and efficiency.
        </p>
      ),
      image: HiFiImg,
    },
    {
      title: "Design System",
      content: (
        <p>
          Built a modular design system including typography, color palettes, spacing,
          and reusable UI components (buttons, forms, cards). Ensures consistency and
          scalability across both app and admin panel.
        </p>
      ),
      image: DesignSystemImg,
    },
    {
      title: "Interactive Prototypes or Demos",
      content: (
        <p>
          Developed clickable Figma prototypes for navigation testing and stakeholder
          reviews. Included animations and micro-interactions to demonstrate realistic flows.
        </p>
      ),
      prototype:
        "https://embed.figma.com/proto/qnUXUVlIGHIEIMnDYCsJeX/Mediversal-Design-File?page-id=0%3A1&node-id=2-1158&p=f&viewport=553%2C67%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A1001&embed-host=share",
    },
    {
      title: "Iteration and Testing",
      content: (
        <p>
          Feedback from internal test rounds highlighted issues in appointment flow and
          onboarding. Refined navigation and simplified form layouts based on input.
        </p>
      ),
    },
    {
      title: "Next Steps",
      content: (
        <p>
          Preparing for final testing and phased rollout. Upcoming milestones include
          integration with hospital ERP systems and release of patient mobile app.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen">
      <div className="relative overflow-hidden px-6 md:px-20 pt-10 pb-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-14 left-6 md:left-24"
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 hover:backdrop-blur-md hover:shadow-md hover:bg-primary hover:text-white transition-colors"
          >
            <FiArrowLeft size={22} />
          </button>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl text-[#0088b1] font-semibold border border-gray-400 rounded-xl p-6 pt-40 mb-12"
        >
          Mediversal Healthcare App
        </motion.h1>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, i) => {
            if (section.title === "Project Overview") {
              const problemStatement = sections.find((s) => s.title === "Problem Statement");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="border border-gray-300 rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                    <div className="text-gray-700 leading-relaxed mb-4">{section.content}</div>
                    {section.image && (
                      <div className="relative w-full h-64 rounded-lg overflow-hidden">
                        <Image src={section.image} alt={section.title} fill className="object-cover" />
                      </div>
                    )}
                  </div>

                  {problemStatement && (
                    <div className="border border-gray-300 rounded-xl p-6 shadow-sm">
                      <h2 className="text-2xl font-semibold mb-4">{problemStatement.title}</h2>
                      <div className="text-gray-700 leading-relaxed">{problemStatement.content}</div>
                    </div>
                  )}
                </motion.div>
              );
            }

            if (section.title === "Problem Statement") return null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="border border-gray-300 rounded-xl p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <div className="text-gray-700 leading-relaxed mb-4">{section.content}</div>

                {section.image && (
                  <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden mb-4">
                    <Image src={section.image} alt={section.title} fill className="object-cover" />
                  </div>
                )}

                {section.prototype && (
                  <div className="w-full h-[500px] mt-4">
                    <iframe
                      src={section.prototype}
                      className="w-full h-full border rounded-xl"
                      allowFullScreen
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
