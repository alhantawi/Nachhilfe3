"use client";

import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export function CTASection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-40 w-40 bg-accent rounded-full opacity-20 -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-accent rounded-full opacity-10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 right-1/4 h-16 w-16 border-4 border-accent opacity-20 transform rotate-45" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === "ar" ? "flex-row-reverse" : ""}`}>
            <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer">
              <Button
                variant="modern"
                size="xl"
                className="transform transition-all text-black hover:translate-y-[-2px] active:translate-y-[1px] cursor-pointer"
              >
                {t("cta.start")}
              </Button>
            </Link>

            <Link href="mailto:alhantawi@nachhilfelight.de?subject=Anfrage Nachhilfe">
              <Button
                variant="outline"
                size="xl"
                className="text-black border-white hover:bg-white/10 cursor-pointer transform transition-all hover:translate-y-[-2px] active:translate-y-[1px]"
              >
                {t("cta.become")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
