import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "dark" | "light";
}

export default function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs font-medium py-3 px-1 overflow-x-auto whitespace-nowrap"
    >
      <Link
        href="/"
        className={`inline-flex items-center gap-1.5 transition-colors ${
          isDark
            ? "text-white/60 hover:text-white"
            : "text-[#16143E]/60 hover:text-[#4E0DBA]"
        }`}
      >
        <Home size={13} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="inline-flex items-center gap-1.5">
            <ChevronRight
              size={12}
              className={isDark ? "text-white/30" : "text-[#16143E]/30"}
            />
            {isLast || !item.href ? (
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-[#16143E]"
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors ${
                  isDark
                    ? "text-white/60 hover:text-white"
                    : "text-[#16143E]/60 hover:text-[#4E0DBA]"
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
