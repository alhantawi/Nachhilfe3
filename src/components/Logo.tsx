"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative w-[160px] h-[50px]">
        <Image
          src="/logo-light.png" // <- deinen Dateinamen hier anpassen!
          alt="Nachhilfe Light Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
