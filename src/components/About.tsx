import { useState } from "react";
import { Button } from "./ui/button";
import { skills_group } from "data/skills";
import { cn } from "#/lib/utils";
import { CalendarClock, Plus, SmilePlus } from "lucide-react";

export default function AboutSection() {
  const [visible] = useState(true);
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

      <div className="space-y-3">
        <p className="text-muted font-medium">Here are my core skills:</p>
        {skills_group.map((skill, i) => {
          const isOpen = open === skill.category;

          return (
            <div
              key={skill.category}
              className={cn(
                "relative mb-2 pl-3 transition-all duration-150 ease-in last-of-type:border-b-0",
                visible ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="bg-muted/10 absolute top-0 left-0 h-full w-0.5 overflow-hidden rounded-full">
                <span
                  className={cn(
                    "bg-muted absolute inset-0 origin-top transition-all duration-500 ease-in-out",
                    isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
                  )}
                />
              </div>

              <div
                onClick={() => toggle(skill.category)}
                className="group w-full leading-none transition-all duration-150 ease-in hover:scale-100 active:scale-100"
              >
                <span className="text-muted text-xs font-medium">
                  Category {skill.index}
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    {skill.category}
                  </span>
                  <span className="border-muted/50 group-hover:border-muted ml-auto flex size-7 items-center justify-center rounded-full border transition-all duration-150 ease-in group-hover:border-2">
                    <Plus
                      strokeWidth={3}
                      size={16}
                      className={cn(
                        "text-muted transition-all duration-150 ease-in",
                        isOpen ? "rotate-45" : "rotate-0",
                      )}
                    />
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "grid overflow-hidden pt-1 transition-all duration-150 ease-in",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="flex flex-wrap gap-2 overflow-hidden">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-outline-variant text-muted hover:bg-outline-variant/20 rounded-md border px-1 py-0.5 text-xs font-medium transition-all duration-150 ease-in-out hover:scale-105"
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

      <div className="space-y-4">
        <p>
          Through the years of experience and effort placed, shows my commitment
          to <strong>quality</strong> and <strong>excellence</strong> in my work.
        </p>
        <div className="border-outline-variant space-y-4 rounded-xl border p-4 backdrop-blur-sm">
          <div className="border-outline-variant/40 flex items-center justify-between border-b pb-3">
            <div className="flex flex-col items-center gap-1">
              <p className="text-muted flex items-center gap-1 text-xs font-medium tracking-wide">
                Years Of Experience{" "}
                <CalendarClock size={16} strokeWidth={2.5} />
              </p>
              <p className="text-tertiary text-5xl font-bold">05+</p>
            </div>

            <span className="bg-tertiary-container/30 border-tertiary text-tertiary rounded-full border px-2 py-1 text-xs font-semibold">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-1">
              <p className="text-muted flex items-center gap-1 text-xs font-medium tracking-wide">
                Happy Clients Served <SmilePlus size={16} strokeWidth={2.5} />
              </p>
              <p className="text-primary text-5xl font-bold">100+</p>
            </div>

            <span className="bg-primary-container/30 text-primary border-primary rounded-full border px-2 py-1 text-xs font-semibold">
              Trusted
            </span>
          </div>
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
