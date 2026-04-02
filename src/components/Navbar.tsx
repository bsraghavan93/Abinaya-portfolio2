import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Instructors", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            {/* Circular logo mark */}
            <div className="relative w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">
              DesignPro
            </span>
          </a>

          {/* ── Desktop Nav pill ── */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 border border-neutral-700 rounded-full px-3 py-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Desktop CTA — "Contact us" with arrow ── */}
          <div className="hidden lg:flex items-center">
            <a
              href="#"
              className="group flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors duration-200 border border-neutral-700 rounded-full px-4 py-2 hover:border-neutral-500"
            >
              Contact us
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* ── Mobile: hamburger ── */}
          <button
            className="lg:hidden text-white/80 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 border border-neutral-700 rounded-2xl overflow-hidden bg-black/60 backdrop-blur-md"
            >
              <div className="flex flex-col p-3 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm px-4 py-2.5 rounded-xl transition-colors duration-200 hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-1 pt-2 border-t border-neutral-700/50">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm px-4 py-2.5 rounded-xl transition-colors duration-200 hover:bg-white/5"
                  >
                    Contact us <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
