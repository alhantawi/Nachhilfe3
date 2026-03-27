"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";


export function StatsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-28 bg-primary overflow-hidden">
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
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              {t("stats.subtitle")}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { value: "12+", label: t("stats.students") },
                { value: "3+", label: t("stats.tutors") },
                { value: "4+", label: t("stats.topics") },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/5 border border-white/10 rounded-xl py-5 px-3 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <div className="text-4xl font-extrabold text-accent mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-6 cursor-pointer hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full">
              {t("stats.learnmore")}
            </Button>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-white/15 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute -top-5 -right-5 bg-accent text-primary font-bold px-4 py-2 rounded-lg shadow-lg">
                ❤️
              </div>
              <Image
                src="/hannover1.jpg"
                alt="Student learning"
                width={700}
                height={350}
                className="rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
