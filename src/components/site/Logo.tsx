import logoMark from "@/assets/arculus/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoMark}
        alt="Arculus"
        width={28}
        height={28}
        className="h-7 w-auto"
      />
      <span className="text-xl font-bold tracking-[0.18em]">ARCULUS</span>
    </div>
  );
}
