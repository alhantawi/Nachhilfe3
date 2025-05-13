"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary py-2 shadow-lg">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-black hover:text-accent transition-colors hover:scale-105">
              {t("nav.home")}
            </Link>
            {/* <Link href="/courses" className="text-sm font-medium text-white hover:text-accent transition-colors hover:scale-105">
              {t("nav.courses")}
            </Link>
            <Link href="/mentors" className="text-sm font-medium text-white hover:text-accent transition-colors hover:scale-105">
              {t("nav.mentors")}
            </Link> */}
            <Link href="mailto:alhantawi@nachhilfelight.de?subject=Anfrage Nachhilfe" className="text-sm font-medium text-black hover:text-accent transition-colors hover:scale-105">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-accent hover:bg-primary/20 hover:scale-105 transition-all cursor-pointer">
                {t("nav.login")}
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-accent text-primary hover:bg-accent/90 hover:scale-105 transition-all shadow-md hover:shadow-lg px-6 py-2 font-medium rounded-full cursor-pointer">
                {t("nav.signup")}
              </Button>
            </Link>
          </div> */}

          <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent text-black hover:bg-accent/90 hover:scale-105 transition-all shadow-md hover:shadow-lg px-6 py-2 font-medium rounded-full cursor-pointer">
              {t("cta")}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center p-2 rounded-full bg-primary/20 text-white hover:bg-primary/30"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary/20 py-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white hover:text-accent py-2 px-4 rounded-lg hover:bg-primary/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/courses"
              className="text-white hover:text-accent py-2 px-4 rounded-lg hover:bg-primary/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.courses")}
            </Link>
            <Link
              href="/mentors"
              className="text-white hover:text-accent py-2 px-4 rounded-lg hover:bg-primary/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.mentors")}
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent py-2 px-4 rounded-lg hover:bg-primary/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            <div className="flex items-center justify-between mt-2 pt-4 border-t border-primary/20">
              <LanguageSwitcher />
              <div className="flex items-center gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="text-white hover:text-accent hover:bg-primary/20">
                    {t("nav.login")}
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-accent text-primary hover:bg-accent/90 shadow-md px-4 py-1 rounded-full">
                    {t("nav.signup")}
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
