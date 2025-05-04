"use client";

import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center">
        <span className="text-2xl font-bold text-white">
          <span className="text-accent">N</span>achhilfe
          <span className="text-accent">L</span>ight💡
        </span>
      </div>
    </Link>
  );
}
