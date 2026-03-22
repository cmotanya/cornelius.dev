import { Code2, Fingerprint, Network } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-outline-variant bg-surface-high w-full space-y-2 border-t py-3 backdrop-blur-md">
      <div className="flex items-center justify-around font-mono text-base">
        <div className="text-muted flex items-center gap-2">
          <Code2 size={18} className="" />
          <span>Web</span>
        </div>

        <div className="text-muted flex items-center gap-2">
          <Network size={16} className="" />
          <span>Network</span>
        </div>

        <div className="text-muted flex items-center gap-2">
          <Fingerprint size={16} className="" />
          <span>Security</span>
        </div>
      </div>

      <div className="text-muted flex items-center justify-center gap-2 font-serif text-xs">
        <span>© {year} Cornelius</span>
      </div>
    </footer>
  );
}
