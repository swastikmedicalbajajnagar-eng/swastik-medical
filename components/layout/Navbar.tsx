import Link from "next/link";
import { Pill } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Pill className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Swastik Medical
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
