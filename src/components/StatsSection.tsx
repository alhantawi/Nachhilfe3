"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import hannover from "../public/hannover1.jpg"
import { useLanguage } from "@/context/LanguageContext";


export function StatsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 h-20 w-20 bg-accent rounded-full opacity-30 -translate-x-1/2" />
      <div className="absolute right-10 bottom-10 h-16 w-16 border-4 border-accent opacity-30 transform rotate-12" />
      <div className="absolute left-1/3 bottom-1/4 h-8 w-2 bg-white opacity-20 transform rotate-45" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("stats.title")}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {t("stats.subtitle")}
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">12+</div>
                <div className="text-white/70 text-sm">{t("stats.students")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                <div className="text-white/70 text-sm">{t("stats.tutors")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">4+</div>
                <div className="text-white/70 text-sm">{t("stats.topics")}</div>
              </div>
            </div>

            <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8 py-6">
              {t("stats.learnmore")}
            </Button>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-xs rounded-xl p-6 mt-8">
              <div className="absolute -top-5 -right-5 bg-accent text-primary font-bold px-4 py-2 rounded-lg">
                ❤️
              </div>
              <Image
                src={hannover}
                alt="Student learning"
                width={700}
                height={350}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
