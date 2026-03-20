import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="px-4 py-12">
      <section className="rounded-2xl p-6 sm:p-8"></section>
    </main>
  );
}
