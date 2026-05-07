import { Logo } from "./Logo";
import { Download } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="https://www.getarculus.com/" className="text-foreground hover:opacity-80 transition-smooth">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#features" className="hover:text-primary transition-smooth">Features</a>
          <a href="#how" className="hover:text-primary transition-smooth">How it Works</a>
          <a href="#security" className="hover:text-primary transition-smooth">Security</a>
          <a href="#download" className="hover:text-primary transition-smooth">Download</a>
          <a href="https://support.arculus.co" className="hover:text-primary transition-smooth">Support</a>
        </nav>
        <a href="#download" className="btn-primary text-sm">
          <Download size={16} /> Download
        </a>
      </div>
    </header>
  );
}
