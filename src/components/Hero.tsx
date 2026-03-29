import { Button } from "#/components/ui/button";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { glitchEffect } from "#/lib/animations/glitch";
import { textReveal } from "#/lib/animations/textReveal";
import { gsap } from "gsap";

// Assuming you have these font classes available in your Tailwind config.
// If not, you can use `font-mono` for both to keep it simple Brutalist.
const FONT_RAW_SERIF = "font-serif"; // Using existing font-serif for "let me take you"
const FONT_RAW_DISPLAY = "font-extrabold tracking-tighter uppercase"; // Replaces font-display for "ZERO" and "hero"
const FONT_MONO = "font-mono"; // For subtext and badges

function Hero() {
  const container = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const heroElement = useRef<HTMLSpanElement>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // Keep existing GSAP animations
      if (titleRef.current && subTextRef.current) {
        textReveal({
          titleEl: titleRef.current,
          subTextEl: subTextRef.current,
        });
      }

      if (heroElement.current) {
        glitchEffect(heroElement.current);
      }
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="/"
      className="bg-background text-foreground flex min-h-screen flex-col space-y-12 overflow-hidden px-6 pt-12"
    >
      {/* 1. Status Badge - Brutalized */}
      <div className="border-foreground bg-secondary/10 mx-auto flex items-center justify-center gap-2 rounded-none border-2 px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider">
        <span className="bg-error size-3 border border-foreground" />
        Open For Contract Work
      </div>

      {/* 2. Main Title Section */}
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div ref={titleRef}>
          <p className={`${FONT_MONO} text-base`}>
            // Hi, I&apos;m <span className="font-bold underline">Cornelius</span>
          </p>
          
          {/* Main H1 - Heavy, raw, uppercase */}
          <h1 className={`leading-none ${FONT_RAW_SERIF} uppercase`}>
            <span className="block text-4xl md:text-5xl">let me take you</span>
            
            <span className="block mt-2">
              <span className="text-muted text-6xl md:text-7xl font-light">from </span>
              {/* ACCENT COLOR: High contrast, thick border */}
              <span className={`${FONT_RAW_DISPLAY} text-error bg-error/10 border-2 border-foreground px-4 py-1 text-8xl md:text-9xl`}>
                Zero
              </span>
            </span>
            
            <span className="block mt-4 text-6xl md:text-7xl">
              to{" "}
              <span
                ref={heroElement}
                className={`${FONT_RAW_DISPLAY} text-foreground bg-foreground/5 border-2 border-foreground px-4 py-1 text-8xl md:text-9xl`}
              >
                hero
              </span>
            </span>
          </h1>
        </div>

        {/* 3. Subtext - Monospace and Raw */}
        <p ref={subTextRef} className={`${FONT_MONO} max-w-2xl text-center text-lg leading-relaxed`}>
          [ I handle everything from setup to security. ] <br /> 
          Every step from{" "}
          <strong className="bg-foreground text-background px-1">web apps</strong> to{" "}
          <strong className="bg-foreground text-background px-1">security</strong> and{" "}
          <strong className="bg-foreground text-background px-1">network infrastructure</strong>, we have a raw solution
          for you.{" "}
        </p>
      </div>

      {/* 4. Action Buttons - Stark, Rectangular, Heavy Borders */}
      <div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
        {/* Button 1: Dark (Stark Primary) */}
        <Button
          variant="outline"
          className="border-foreground bg-foreground hover:bg-muted group h-auto w-full rounded-none border-4 px-8 py-4 text-xl sm:w-auto"
        >
          <a
            href="#contact"
            className="text-background group-hover:text-foreground flex items-center justify-center gap-3 font-bold uppercase tracking-tighter"
          >
            Start From Zero <ArrowBigRight className="size-6 transition-transform group-hover:translate-x-2" />
          </a>
        </Button>
        
        {/* Button 2: Light (Stark Secondary) */}
        <Button
          variant="outline"
          className="border-foreground bg-background hover:bg-muted group h-auto w-full rounded-none border-4 px-8 py-4 text-xl sm:w-auto"
        >
          <a
            href="#contact"
            className="text-foreground flex items-center justify-center gap-3 font-bold uppercase tracking-tighter"
          >
            View My Projects <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>

      {/* 5. Scroll Indicator - Stark and Functional */}
      <a
        href="#about"
        className={`${FONT_MONO} text-foreground/70 flex flex-col items-center justify-center gap-3 text-sm font-bold uppercase mt-auto pb-8`}
      >
        <span>[ Scroll ]</span>
        <div className="border-foreground flex h-14 w-8 items-start justify-center rounded-none border-4 p-1">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1, // Faster, sharper animation
              repeat: Infinity,
              ease: easeInOut, // Keeping existing, but could switch to "linear" or "anticipate"
            }}
            className="bg-foreground size-4 rounded-none border-2 border-background"
          />
        </div>
      </a>
    </section>
  );
}

export default Hero;