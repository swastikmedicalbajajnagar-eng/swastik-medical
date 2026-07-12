"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <h1 className="text-2xl font-bold text-green-600">
          Swastik Medical
        </h1>

        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Upload Rx</Link>
          <Link href="/">Contact</Link>
        </nav>

        <a
          href="tel:9860800296"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}