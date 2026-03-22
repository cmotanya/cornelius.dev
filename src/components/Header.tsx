import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-surface-high sticky top-0 z-50 border-b px-4 backdrop-blur-lg">
      <nav className="flex flex-wrap items-center justify-between py-3">
        <ThemeToggle />

        <Button size="lg" className="">
          Hire Me
        </Button>
      </nav>
    </header>
  );
}
