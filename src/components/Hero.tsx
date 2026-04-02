import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ShinyText from "./ShinyText";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-sans" id="hero">
      {/* Video background */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Nav */}
        <Navbar />

        {/* Centered hero body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">

          {/* Top two-line info — desktop only */}
          <FadeUp delay={0.1} className="hidden lg:flex w-full max-w-6xl justify-between mb-10">
            <p className="text-white/70 text-sm leading-relaxed max-w-xs text-left">
              9+ years orchestrating integration validation, release readiness, and automation strategy across healthcare platforms.
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs text-right">
              UST HealthProof · Lead II Software Tester · ISTQB · PAHM
            </p>
          </FadeUp>

          {/* Eyebrow */}
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-xs sm:text-sm uppercase tracking-widest mb-6">
              Aspiring QA Integration Lead · Healthcare Systems Quality
            </p>
          </FadeUp>

          {/* Main heading */}
          <FadeUp delay={0.35}>
            <h1
              className="text-white font-medium tracking-tighter leading-none"
              style={{ fontSize: "clamp(3.5rem, 14vw, 9rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}
            >
              Abinaya
            </h1>
          </FadeUp>

          <FadeUp delay={0.45}>
            <ShinyText
              text="Rajendran."
              baseColor="#64CEFB"
              shineColor="#ffffff"
              speed={3}
              spread={100}
              className="font-medium tracking-tighter"
              style={{
                fontSize: "clamp(3.5rem, 14vw, 9rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                display: "block",
                marginBottom: "1.5rem",
              }}
            />
          </FadeUp>

          {/* Sub headline */}
          <FadeUp delay={0.55}>
            <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Quality-Driven Test Leadership for Complex Enterprise Systems
            </p>
          </FadeUp>

          {/* CTA Buttons — inline, auto width */}
          <FadeUp delay={0.65}>
            <div className="flex flex-row gap-3 justify-center flex-wrap mb-10">
              <a
                href="#"
                download
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold rounded-full px-7 py-3.5 hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-transparent text-white text-sm font-medium rounded-full px-7 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
              >
                Connect with Me
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </FadeUp>

          {/* Stat chips — single horizontal row */}
          <FadeUp delay={0.8}>
            <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {[
                { num: "9+", label: "Years Exp." },
                { num: "ISTQB", label: "Certified" },
                { num: "PAHM", label: "Healthcare" },
                { num: "Full", label: "SDLC · STLC" },
              ].map((stat, i, arr) => (
                <div key={stat.num} className="flex items-center">
                  <div className="flex flex-col items-center px-4 sm:px-6 py-3">
                    <span className="text-[#64CEFB] font-bold text-base sm:text-lg leading-none">{stat.num}</span>
                    <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wide mt-1 whitespace-nowrap">{stat.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-8 bg-white/10 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

        </div>

        {/* Bottom breathing room */}
        <div className="h-8" />
      </div>
    </section>
  );
}
