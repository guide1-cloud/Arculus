import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Logo className="text-secondary-foreground" />
          <p className="mt-4 text-sm text-secondary-foreground/70 max-w-xs">
            Your Keys. Your Crypto. Best-in-class self-custody powered by the Arculus Key™ Card.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><a href="https://www.getarculus.com/products/arculus-wallet/" className="hover:text-primary-foreground">Arculus Wallet</a></li>
            <li><a href="https://www.getarculus.com/products/arculus-authenticate/" className="hover:text-primary-foreground">Authenticate</a></li>
            <li><a href="#download" className="hover:text-primary-foreground">Desktop App</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><a href="https://support.arculus.co" className="hover:text-primary-foreground">Help Center</a></li>
            <li><a href="https://support.arculus.co/hc/en-us/categories/1500001931301-Security" className="hover:text-primary-foreground">Security Tips</a></li>
            <li><a href="https://www.getarculus.com/about" className="hover:text-primary-foreground">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><a href="https://www.getarculus.com/privacy" className="hover:text-primary-foreground">Privacy</a></li>
            <li><a href="https://www.getarculus.com/terms" className="hover:text-primary-foreground">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-secondary-foreground/60 flex flex-wrap justify-between gap-4">
          <span>© {new Date().getFullYear()} Arculus®. All rights reserved.</span>
          <span>Built by the Arculus Team</span>
        </div>
      </div>
    </footer>
  );
}
