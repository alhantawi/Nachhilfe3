"use client";

import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export function CTASection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-40 w-40 bg-accent rounded-full opacity-20 -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-accent rounded-full opacity-10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 right-1/4 h-16 w-16 border-4 border-accent opacity-20 transform rotate-45" />
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === "ar" ? "flex-row-reverse" : ""}`}>
            <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer">
              <Button
                variant="modern"
                size="xl"
                className="transform transition-all duration-300 text-black hover:-translate-y-1 active:translate-y-[1px] cursor-pointer shadow-[0_0_20px_rgba(255,235,0,0.35)] hover:shadow-[0_0_35px_rgba(255,235,0,0.55)] hover:scale-105"
              >
                {t("cta.start")}
              </Button>
            </Link>

            <Link href="mailto:alhantawi@nachhilfelight.de?subject=Anfrage Nachhilfe">
              <Button
                variant="outline"
                size="xl"
                className="text-black border-white hover:bg-white/10 cursor-pointer transform transition-all duration-300 hover:-translate-y-1 active:translate-y-[1px] backdrop-blur-sm hover:scale-105"
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
