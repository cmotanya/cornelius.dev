import { ArrowUpRight, Code2, Fingerprint, Network, Radar } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Product engineering",
    description:
      "Interfaces and backend flows designed to feel fast, clear, and trustworthy.",
  },
  {
    icon: Network,
    title: "Infrastructure setup",
    description:
      "Networks and connected systems planned for real environments, not just ideal demos.",
  },
  {
    icon: Fingerprint,
    title: "Security integration",
    description:
      "Access control, surveillance, and practical hardening with fewer blind spots.",
  },
];

const principles = [
  "Design for clarity before complexity",
  "Secure the system without hurting usability",
  "Ship with structure that can grow",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[color:color-mix(in_oklab,var(--color-outline-variant)_55%,transparent)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="about-orb pointer-events-none absolute top-8 right-[-5rem] h-56 w-56 rounded-full blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="from-surface via-surface-bright to-primary/8 border-outline-variant/70 rounded-[2rem] border bg-gradient-to-br p-7 shadow-[0_20px_70px_rgba(32,26,25,0.08)] sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.26em] uppercase">
              <Radar className="size-3.5" />
              About me
            </div>
            <span className="text-muted text-xs tracking-[0.22em] uppercase">
              End-to-end delivery
            </span>
          </div>

          <div className="mt-6 max-w-3xl space-y-5">
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
              I build systems that feel refined on the surface and resilient
              underneath.
            </h2>

            <p className="text-secondary text-lg leading-8">
              I am Cornelius, and my work sits at the intersection of product
              design, technical execution, and real-world reliability. I like
              the messy part of projects where ideas still need structure.
            </p>

            <p className="text-muted max-w-2xl text-base leading-8">
              Whether the goal is a polished web experience, a dependable
              network rollout, or a secure installation, I design for the full
              journey so the final system does not just look complete, it
              behaves like it.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="bg-background/75 border-outline-variant/70 rounded-[1.5rem] border p-4 backdrop-blur-sm"
              >
                <p className="text-primary text-xs font-semibold tracking-[0.24em] uppercase">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-6 font-medium">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group from-surface-high/75 to-surface border-outline-variant/70 hover:border-primary/35 rounded-[1.75rem] border bg-gradient-to-br p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(32,26,25,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="bg-primary/10 text-primary rounded-2xl p-3">
                  <Icon className="size-5" />
                </div>

                <ArrowUpRight className="text-muted group-hover:text-primary size-4 transition-colors" />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {title}
              </h3>

              <p className="text-muted mt-3 text-sm leading-7">{description}</p>
            </article>
          ))}

          <div className="from-tertiary-container/55 to-surface border-outline-variant/70 rounded-[1.75rem] border bg-gradient-to-br p-6">
            <p className="text-secondary text-xs tracking-[0.24em] uppercase">
              What matters most
            </p>
            <p className="mt-3 text-xl leading-8 font-semibold tracking-tight">
              Good systems are not only functional. They make people feel
              confident using them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
