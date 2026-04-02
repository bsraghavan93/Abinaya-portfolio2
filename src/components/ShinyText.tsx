import { type CSSProperties, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface ShinyTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  speed?: number;
  baseColor?: string;
  shineColor?: string;
  spread?: number;
}

export default function ShinyText({
  text,
  className = "",
  style,
  speed = 3,
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  spread = 100,
}: ShinyTextProps) {
  const controls = useAnimation();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const animate = async () => {
      while (isMounted.current) {
        await controls.start({
          backgroundPosition: ["-200% center", "200% center"],
          transition: { duration: speed, ease: "linear" as const },
        });
      }
    };
    animate();
    return () => { isMounted.current = false; };
  }, [controls, speed]);

  const gradient = `linear-gradient(${spread}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`;

  return (
    <motion.span
      className={className}
      animate={controls}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        display: "inline-block",
        ...style,
      }}
    >
      {text}
    </motion.span>
  );
}
