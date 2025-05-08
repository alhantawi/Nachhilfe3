"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logoN.png"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center -my-8 ${className}`}>
      <div className="relative w-[200px] h-[150px]">
        <Image
          src={logo}
          alt="Nachhilfe Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
