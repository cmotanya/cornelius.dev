import { Button } from "#/components/ui/button";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import { easeInOut, motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="/"
      className="flex min-h-screen flex-col space-y-6 overflow-hidden px-4 pt-8"
    >
      <div className="text-tertiary border-tertiary/50 shadow-tertiary/20 mx-auto flex items-center justify-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold tracking-[0.15em] uppercase shadow-md">
        <span className="bg-tertiary size-2 rounded-full" />
        Open For Contract Work
      </div>

      <div className="space-y-5">
        <p className="text-sm">
          Hi, I&apos;m <span className="font-bold">Cornelius👋</span>
        </p>
        <h1 className="flex flex-col items-center justify-center font-serif uppercase">
          let me take you
          <span className="text-muted block text-5xl">
            from{" "}
            <span className="font-display text-error text-6xl font-extrabold tracking-wide">
              Zero
            </span>{" "}
          </span>
          <span className="block text-5xl">
            to{" "}
            <span className="font-display text-tertiary text-7xl font-extrabold tracking-wide">
              hero
            </span>
          </span>
        </h1>
        <p className="text-center leading-relaxed">
          I handle everything from setup to security. <br /> Every step from{" "}
          <strong>web apps</strong> to <strong>security</strong> and{" "}
          <strong>network infrastructure</strong>, we have a perfect solution
          for you.{" "}
        </p>
      </div>
      <div className="mx-5 flex flex-col gap-3">
        <Button
          variant="outline"
          className="hover:bg-primary/80 border-outline-variant bg-primary border"
        >
          <a
            href="#contact"
            className="text-surface flex items-center justify-center gap-2 text-base uppercase hover:underline"
          >
            Start From Zero <ArrowBigRight />
          </a>
        </Button>
        <Button
          variant="outline"
          className="hover:bg-surface-bright border-outline-variant bg-surface border"
        >
          <a
            href="#contact"
            className="text-primary flex items-center justify-center gap-2 text-base uppercase hover:underline"
          >
            View My Projects <ArrowUpRight />
          </a>
        </Button>
      </div>
      <a
        href="#about"
        className="text-muted flex flex-col items-center justify-center gap-2 text-sm font-semibold"
      >
        <span>Scroll Down</span>

        <div className="border-primary/30 flex h-10 w-6 items-start justify-center rounded-full border p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: easeInOut,
            }}
            className="scroll-dot bg-primary size-2 rounded-full"
          />
        </div>
      </a>
    </section>
  );
}

export default Hero;
