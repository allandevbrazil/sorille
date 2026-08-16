import { WHATSAPP_URL } from "../data/content";

export function WhatsAppButton({
  label,
  className = "",
  variant = "solid",
}: {
  label: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-display font-semibold tracking-wide transition-all duration-200 ease-out active:scale-95 motion-reduce:transition-none";
  const styles =
    variant === "solid"
      ? "bg-accent-gold text-primary hover:bg-accent-gold-deep hover:shadow-lg"
      : "border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </a>
  );
}
