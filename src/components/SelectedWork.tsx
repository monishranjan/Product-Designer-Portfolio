"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function SelectedWork() {
    return (
        <section className="w-full">
            <div className="border-b border-gray-500">
                <h1 className="text-3xl md:text-5xl font-medium text-left pb-2 pl-10">
                    Selected Work
                </h1>
            </div>

            <div className="w-full mt-10 pl-10">
                {/* Project 1 */}
                <motion.div
                    initial={{ opacity: 1, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full mb-10"
                >
                    <div className="flex flex-col md:flex-row gap-6 border-l border-t border-b border-gray-400 rounded-l-xl overflow-hidden">
                        <div className="projectImage bg-gray-200 md:w-3/5 w-full rounded-l-xl min-h-[300px]" />

                        <div className="md:w-2/5 w-full projectDetail border border-gray-400 mt-6 mb-6 md:mr-4 p-4 rounded-xl">
                            <div className="projectName">
                                <h1 className="mb-2">Project</h1>
                                <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                                    <h1 className="text-right">Project Name</h1>
                                </div>
                            </div>

                            <div className="projectTimePeriod">
                                <h1 className="mb-2 mt-4">Time Period</h1>
                                <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                                    <h1 className="text-right">Jan 2023 - Present</h1>
                                </div>
                            </div>

                            <div className="projectDomain">
                                <h1 className="mb-2 mt-4">Domain</h1>
                                <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                                    <h1 className="text-right">Web Design</h1>
                                </div>
                            </div>

                            <div className="projectDescription">
                                <h1 className="mb-2 mt-4">Description</h1>
                                <div className="w-full h-72 border border-gray-400 py-2 px-4 rounded-xl overflow-y-auto">
                                    <h1 className="text-right">This project is about...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                    initial={{ opacity: 1, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full mb-10"
                >
                    <div className="flex flex-col md:flex-row gap-6 border-l border-t border-b border-gray-400 rounded-l-xl overflow-hidden">
                        <div className="projectImage bg-gray-200 md:w-3/5 w-full rounded-l-xl min-h-[300px]" />

                        <div className="md:w-2/5 w-full projectDetail border border-gray-400 mt-6 mb-6 md:mr-4 p-4 rounded-xl">
                            <div className="projectName">
                                <h1 className="mb-2">Project</h1>
                                <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                                    <h1 className="text-right">Project Name</h1>
                                </div>
                            </div>

                            <div className="projectTimePeriod">
                                <h1 className="mb-2 mt-4">Time Period</h1>
                                <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                                    <h1 className="text-right">Jan 2023 - Present</h1>
                                </div>
                            </div>

                            <div className="projectDomain">
                                <h1 className="mb-2 mt-4">Domain</h1>
                                <div className="w-full border border-gray-400 py-2 px-4 rounded-xl">
                                    <h1 className="text-right">Web Design</h1>
                                </div>
                            </div>

                            <div className="projectDescription">
                                <h1 className="mb-2 mt-4">Description</h1>
                                <div className="w-full h-72 border border-gray-400 py-2 px-4 rounded-xl overflow-y-auto">
                                    <h1 className="text-right">This project is about...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="my-10 border-t border-gray-500">
                <div className="text-xl flex justify-end items-center gap-20 mt-10">
                    {/* <div className="border-y border-r rounded-r-xl border-gray-500 py-6 pr-12 w-full text-right">View More Projects</div> */}
                    <Link
                        href="/work"
                        className="group relative inline-flex items-center justify-between gap-3 rounded-l-xl border border-white/10 bg-[#121212] px-6 py-3 text-white transition hover:bg-[#1a1a1a]"
                    >
                        <span className="text-lg font-medium">View More</span>
                        <span className="flex items-center justify-center rounded-full border border-white/10 bg-[#121212] p-2 transition group-hover:translate-x-1">
                            <FiArrowRight className="text-white text-xl" />
                        </span>
                    </Link>
                    {/* <div className="border-y border-l rounded-l-xl border-gray-500 py-6 pl-12 w-full text-left">View More Projects</div> */}
                </div>
            </div>
        </section>
    );
}