import Link from "next/link";
import { Pill } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Pill className="size-4" aria-hidden="true" />
            </span>
            <span className="text-base font-semibold text-foreground">
              Swastik Medical
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-border pt-6 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Swastik Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
