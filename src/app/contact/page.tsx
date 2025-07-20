"use client";

import { motion } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null); // ✅ Typed for form methods
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("monishranjan9@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => { // ✅ Typed event
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setStatus("✅ Message sent successfully!");
      formRef.current?.reset(); // ✅ No TS error
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 md:px-20 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-semibold border border-gray-400 rounded-xl p-6 pt-40 mb-10"
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 flex flex-col gap-6 border border-gray-400 p-6 rounded-xl"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 bg-transparent outline-none focus:border-primary"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 bg-transparent outline-none focus:border-primary"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 rounded-lg border border-gray-300 bg-transparent outline-none focus:border-primary"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="p-3 h-full rounded-lg border border-gray-300 bg-transparent outline-none focus:border-primary resize-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-background px-6 py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p
              className={`text-sm text-center mt-2 ${
                status.includes("successfully") ? "text-green-600" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Bio & Socials */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg p-6 border border-gray-400 rounded-xl h-full"
          >
            <p>
              I&apos;m Monish Ranjan, a passionate UI/UX and product designer focused on building intuitive digital experiences. I specialize in crafting modern interfaces that blend function with visual clarity. Currently open to freelance or full-time opportunities. Let&apos;s collaborate and bring your vision to life. Feel free to reach out via the form or connect on social platforms!
            </p>
          </motion.div>

          {/* Email & Copy */}
          <div className="border border-gray-400 rounded-xl p-6">
            <h1 className="text-xl mb-3">Email</h1>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex justify-center gap-4 items-center border border-gray-400 p-3 rounded-xl"
            >
              <p className="text-xl font-medium text-center">monishranjan9@gmail.com</p>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="bg-gray-200 py-2 px-4 rounded-lg text-sm text-gray-400 hover:bg-primary hover:text-background transition"
              >
                {copied ? "Copied" : "Copy Email"}
              </button>
            </motion.div>

            {/* Socials */}
            <div className="mt-8">
              <h1 className="text-xl mb-4">Socials</h1>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex gap-4"
              >
                <a
                  href="https://www.behance.net/monish9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg border border-gray-400 py-2 px-6 w-full text-center rounded-lg hover:bg-[#1769ff] hover:text-white transition"
                >
                  Behance
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg border border-gray-400 py-2 px-6 w-full text-center rounded-lg hover:bg-[#ea4c89] hover:text-white transition"
                >
                  Dribbble
                </a>
                <a
                  href="https://www.linkedin.com/in/monishranjan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg border border-gray-400 py-2 px-6 w-full text-center rounded-lg hover:bg-[#0077b5] hover:text-white transition"
                >
                  LinkedIn
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
