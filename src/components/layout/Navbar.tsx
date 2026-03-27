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
    <header className="sticky top-0 z-50 w-full bg-primary py-2 shadow-lg transition-all duration-300">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-black hover:text-accent transition-all duration-300 hover:scale-105">
              {t("nav.home")}
            </Link>
            <Link href="/careers" className="text-sm font-medium text-black hover:text-accent transition-all duration-300 hover:scale-105">
              {t("nav.jobs")}
            </Link>
            <Link href="mailto:alhantawi@nachhilfelight.de?subject=Anfrage Nachhilfe" className="text-sm font-medium text-black hover:text-accent transition-all duration-300 hover:scale-105">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent text-black hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-6 py-2 font-medium rounded-full cursor-pointer">
              {t("cta")}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center p-2 rounded-full bg-primary/20 text-white hover:bg-primary/30 transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary/20 py-4 px-4 shadow-inner animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white hover:text-accent py-2 px-4 rounded-lg hover:bg-primary/20 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/careers"
              className="text-white hover:text-accent py-2 px-4 rounded-lg hover:bg-primary/20 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.jobs")}
            </Link>
            <Link
              href="mailto:alhantawi@nachhilfelight.de?subject=Anfrage Nachhilfe"
              className="text-white hover:text-accent py-2 px-4 rounded-lg hover:bg-primary/20 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            <div className="flex items-center justify-between mt-2 pt-4 border-t border-primary/20">
              <LanguageSwitcher />
              <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-accent text-black hover:bg-accent/90 shadow-md px-4 py-1 rounded-full transition-all duration-300 hover:scale-105">
                  {t("cta")}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
