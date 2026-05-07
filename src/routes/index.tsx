import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Download, Shield, Cpu, Repeat, Wallet, KeyRound, Lock,
  MonitorSmartphone, Zap, CheckCircle2, ArrowRight, Apple, AppWindow
} from "lucide-react";
import heroImg from "@/assets/arculus/card-flip-1.png";
import appImg from "@/assets/arculus/login-cover.jpg";
import cardImg from "@/assets/arculus/card-black.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Download Arculus Self-Custody Desktop App | Secure Crypto Cold Storage" },
      { name: "description", content: "Arculus Self-Custody Desktop App brings cold storage to your desktop. Companion or standalone, secure import/export, .NET 10 powered. Download for Windows & Mac." },
      { property: "og:title", content: "Download Arculus Self-Custody Desktop App" },
      { property: "og:description", content: "Cold storage, now on your desktop. Your Keys. Your Crypto." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Repeat, title: "Companion or Standalone", desc: "Pair with your Arculus Key™ Card or run fully standalone — your choice, your control." },
  { icon: KeyRound, title: "Secure Import / Export", desc: "Import and export key phrases or encrypted JSON wallets with end-to-end protection." },
  { icon: MonitorSmartphone, title: "Desktop Power", desc: "No NFC required. Full keyboard, mouse, and large-screen workflows for power users." },
  { icon: Cpu, title: ".NET 10 Performance", desc: "Built on the latest .NET 10 framework for blazing-fast, native performance and security." },
  { icon: Wallet, title: "WalletConnect & DeFi", desc: "Connect to thousands of dApps and DeFi protocols with one secure click." },
  { icon: Shield, title: "Full Self-Custody", desc: "Your keys never leave your device. Bank-grade encryption protects every transaction." },
  { icon: Lock, title: "Zero Cloud Storage", desc: "Everything stays local. No accounts, no servers, no compromises." },
  { icon: Zap, title: "Lightning Workflows", desc: "Sign multiple transactions, batch transfers, and manage portfolios in seconds." },
];

const steps = [
  { num: "01", title: "Download & Install", desc: "Get the desktop app for Windows or macOS — verified and signed." },
  { num: "02", title: "Pair or Import", desc: "Tap your Arculus Card to pair, or securely import your existing wallet." },
  { num: "03", title: "Manage Securely", desc: "Send, receive, swap and connect to dApps — all from your desktop." },
];

const testimonials = [
  { quote: "Finally — managing my cold storage without fighting NFC on my phone. The desktop app is butter-smooth.", name: "Marcus R.", role: "Long-term holder" },
  { quote: "Importing my JSON wallet was painless. It feels exactly like the main Arculus experience, but supercharged.", name: "Priya S.", role: "DeFi power user" },
  { quote: "The fact that my keys never leave the machine — and I can verify the build — is exactly what self-custody should be.", name: "Daniel K.", role: "Security engineer" },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-xs font-semibold">
              <Zap size={14} /> NEW · Desktop App v1.0
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Cold Storage,{" "}
              <span className="gradient-text">Now on Your Desktop</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              The Arculus Self-Custody Desktop App brings the security of the Arculus Key™ Card
              to Windows and macOS. Companion or standalone. Powered by .NET 10.
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight">Your Keys. Your Crypto.</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#download" className="btn-primary">
                <Download size={18} /> Download for Windows
              </a>
              <a href="#download" className="btn-outline">
                <Apple size={18} /> Download for Mac
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary" /> Free</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary" /> Open verification</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary" /> .NET 10</span>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <span>Mobile users:</span>
              <a href="#" className="underline hover:text-primary">App Store</a>
              <a href="#" className="underline hover:text-primary">Google Play</a>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-3xl" />
            <img
              src={heroImg}
              alt="Arculus Key Card with desktop crypto wallet application"
              className="relative rounded-3xl shadow-card w-full"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-surface/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Shield size={16} className="text-primary" /> Bank-grade EAL6+ secure element</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-primary" /> Keys never leave your device</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Audited & signed builds</span>
          <span className="flex items-center gap-2"><Cpu size={16} className="text-primary" /> Powered by .NET 10</span>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built for serious self-custody</h2>
          <p className="mt-4 text-muted-foreground">Every tool you need to manage digital assets — securely, from your desktop.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="icon-badge"><f.icon size={22} /></div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Why desktop</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Tired of NFC issues and mobile-only limits?</h2>
            <p className="mt-5 text-secondary-foreground/70 text-lg">
              Phones drop signals. Small screens make mistakes easy. The Arculus Desktop App
              gives you the speed of a native interface with the same uncompromising security
              the Arculus Card is known for.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "No more failed NFC taps in the middle of a transaction",
                "Read every address character on a real screen",
                "Manage multiple wallets and chains at once",
                "Sign and verify offline when you need to",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-glow mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/20 rounded-3xl blur-3xl" />
            <img src={appImg} alt="Arculus desktop wallet dashboard" loading="lazy" width={1280} height={800}
                 className="relative rounded-2xl shadow-card border border-white/10" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How it works</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Up and running in minutes</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="feature-card relative">
              <span className="text-5xl font-bold gradient-text">{s.num}</span>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-surface shadow-card border border-border overflow-hidden grid md:grid-cols-2">
          <div className="p-10 md:p-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Security & Trust</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Security you can verify</h2>
            <p className="mt-4 text-muted-foreground">
              Every release is code-signed and published with SHA-256 checksums. Your private
              keys are stored in the Arculus secure element or encrypted locally — never on a
              cloud server.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["EAL6+ Secure Element","Open Verification","Zero-Knowledge","Local Encryption"].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm font-medium">
                  <Shield size={16} className="text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent to-background p-10 md:p-14 flex items-center justify-center">
            <img src={cardImg} alt="Arculus metal key card" loading="lazy" width={1024} height={1024}
                 className="max-w-sm w-full drop-shadow-2xl rotate-[-8deg] hover:rotate-0 transition-smooth" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">Loved by self-custody pros</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="feature-card">
              <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-secondary to-[oklch(0.2_0.05_280)] text-secondary-foreground p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold">Download the Arculus Desktop App</h2>
            <p className="mt-4 text-secondary-foreground/70 max-w-xl mx-auto">
              Free. Self-custodial. Works with or without the Arculus Card. Requires .NET 10 runtime (bundled in installer).
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-primary">
                <AppWindow size={18} /> Windows (.exe)
                <ArrowRight size={16} />
              </a>
              <a href="#" className="btn-primary" style={{ background: "linear-gradient(135deg, oklch(0.3 0.02 260), oklch(0.5 0.02 260))" }}>
                <Apple size={18} /> macOS (.dmg)
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-xs">
                <div className="font-mono text-secondary-foreground/60">SHA-256 (Win)</div>
                <div className="font-mono mt-1 break-all">a3f9…7c21d8e0b4</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-xs">
                <div className="font-mono text-secondary-foreground/60">SHA-256 (Mac)</div>
                <div className="font-mono mt-1 break-all">b71e…0f49a26c11</div>
              </div>
            </div>
            <p className="mt-6 text-xs text-secondary-foreground/60">
              Always verify checksums before installing. See <a href="https://support.arculus.co" className="underline">support.arculus.co</a> for verification guide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
