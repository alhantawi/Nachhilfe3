"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center -my-8 ${className}`}>
      <div className="relative w-[200px] h-[150px]">
        <Image
          src="/logo.png"
          alt="Nachhilfe Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
