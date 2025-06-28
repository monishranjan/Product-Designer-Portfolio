"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { label } from "framer-motion/client"

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Projects", href: "/projects" },
    ]

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 right-4 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity:0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 text-3xl font-semibold"
                    >
                        {links.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="hover:underline"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}