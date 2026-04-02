import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ShinyText from "./ShinyText";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
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
    <section className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* Video background */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.7 }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />

        {/* Top info row */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <FadeUp delay={0.1}>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-sm">
                We deliver transformative programs that empower emerging product
                designers with cutting-edge expertise and vision to thrive globally.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="lg:text-right lg:ml-auto">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xs lg:max-w-sm">
                8000+ Talented Designers Launched !
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
          {/* Seats label */}
          <FadeUp delay={0.3} className="mb-5 sm:mb-7">
            <p className="text-white/80 text-xs sm:text-sm uppercase tracking-tight text-center">
              Seats for Next Program Opening Soon
            </p>
          </FadeUp>

          {/* Heading */}
          <div className="text-center">
            <FadeUp delay={0.4}>
              <h1
                className="block text-white font-medium tracking-tighter"
                style={{ fontSize: "clamp(3rem, 10vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.04em" }}
              >
                Become
              </h1>
            </FadeUp>
            <FadeUp delay={0.5}>
              <ShinyText
                text="Product Leader."
                baseColor="#64CEFB"
                shineColor="#ffffff"
                speed={3}
                spread={100}
                className="font-medium tracking-tighter"
                style={{ fontSize: "clamp(3rem, 10vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.04em" }}
              />
            </FadeUp>
          </div>

          {/* CTA */}
          <FadeUp delay={0.65} className="mt-10 sm:mt-14">
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white text-sm font-medium rounded-full px-6 md:px-8 py-3 md:py-4 transition-colors duration-300 border border-neutral-700 hover:border-neutral-600"
            >
              Apply for Next Enrollment
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </FadeUp>
        </div>

        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}
