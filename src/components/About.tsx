import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { skills_group } from "data/skills";
import { cn } from "#/lib/utils";
import { Plus } from "lucide-react";

export default function AboutSection() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (category: string): void => {
    setOpen((prev) => (prev === category ? null : category));
  };

  return (
    <section
      id="about"
      className="border-surface-high relative space-y-8 border-t px-6 pt-15 pb-24"
    >
      <div className="relative flex flex-col">
        <h1 className="text-primary z-10 w-fit pr-5 font-mono tracking-widest uppercase">
          system_profile
        </h1>
        <span className="from-primary to-surface absolute top-1/2 ml-38 h-px w-40 -translate-y-1/2 bg-linear-to-r" />
        <span className="text-primary absolute top-1/2 right-0 -translate-y-1/2 rounded-sm p-px text-xs font-semibold">
          [01]
        </span>
      </div>

      <p className="max-w-6xl text-3xl leading-none font-bold tracking-tighter text-balance">
        My experience in tech and projects I have worked on, is prove of my{" "}
        <span className="text-muted">skills</span>.
      </p>

      <div className="space-y-5">
        <p className="">
          I'm Cornelius, a focused individual who takes pride in building
          systems that are <strong>resilient</strong> and{" "}
          <strong>centric</strong> on user experience.
        </p>

        <p>
          Whether I am taking on project about <strong>web development</strong>,{" "}
          <strong>network installation</strong> or{" "}
          <strong>security setup</strong> , I always deliver products that
          actually work.
        </p>
      </div>

      <div className="border-outline-variant/50 flex flex-col rounded-xl border">
        {skills_group.map((skill, i) => {
          const isOpen = open === skill.category;

          return (
            <div
              key={skill.category}
              className={cn(
                "border-b-outline-variant/50 border-b px-3 py-5 transition-all duration-150 ease-in last-of-type:border-b-0",
                visible ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                onClick={() => toggle(skill.category)}
                className="flex w-full transition-all duration-150 ease-in hover:scale-100 active:scale-100"
              >
                <div className="font-mono text-lg">
                  <span>{skill.category}</span>
                </div>
                <span className="ml-auto">
                  <Plus
                    size={16}
                    className={cn(
                      "transition-all duration-150 ease-in",
                      isOpen ? "rotate-45" : "rotate-0",
                    )}
                  />
                </span>
              </div>

              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-150 ease-in",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="flex flex-wrap gap-2 overflow-hidden">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-outline-variant text-muted rounded-md border px-1 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="border-tertiary/50 bg-tertiary-container/10 flex flex-col items-center gap-2 rounded-xl border-2 p-4 hover:translate-y-1">
          <p className="text-tertiary/70 text-5xl font-bold">05+</p>
          <p className="text-tertiary text-center text-xs font-semibold">
            Years of Technical Experience 🕒
          </p>
        </div>

        <div className="border-secondary/30 bg-surface-bright flex flex-col items-center gap-2 rounded-xl border-2 p-4">
          <p className="text-muted text-5xl font-bold">100+</p>
          <p className="text-secondary font- text-center text-xs font-semibold">
            Happy Clients Served 👌
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="">Available for new projects!</p>
        <Button
          variant="outline"
          size="lg"
          className="hover:bg-surface-bright border-outline-variant bg-surface-bright border"
        >
          <a
            href="#contact"
            className="text-primary font-semibold hover:underline"
          >
            Get In Touch 👉{" "}
          </a>
        </Button>
      </div>
    </section>
  );
}
