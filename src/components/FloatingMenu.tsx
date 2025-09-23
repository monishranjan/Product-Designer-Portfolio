"use client";

import Link from "next/link";
import { Home, Folder, Briefcase, Mail, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function FloatingMenu() {
  const [hideMenu, setHideMenu] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideMenu(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const links = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: Folder },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "Contact", href: "/contact", icon: Mail },
    { label: "Resume", href: "/cvs/monish_ranjan_cv.pdf", icon: FileText },
  ];

  if (hideMenu) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-md border border-white/20 shadow-lg px-4 py-3 md:px-6 md:py-4 rounded-2xl max-w-fit w-auto">
      <div className="flex items-center gap-6 md:gap-8 relative">
        {links.map(({ href, label, icon: Icon }) => {
          // ✅ Handle nested routes for active state
          const isActive =
            href !== "/cvs/monish_ranjan_cv.pdf" && // never highlight Resume
            (href === "/"
              ? pathname === "/"
              : pathname.startsWith(href));

          return (
            <div key={href} className="relative group">
              <Link
                href={href}
                target={href.endsWith(".pdf") ? "_blank" : "_self"} // open Resume in new tab
                className={`flex flex-col items-center text-xs md:text-sm font-medium p-2 md:p-3 rounded-xl transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-primary/60 hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon size={20} className="md:size-6" strokeWidth={1.5} />
              </Link>

              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
