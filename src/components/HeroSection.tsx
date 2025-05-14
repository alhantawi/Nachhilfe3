"use client";

import Link from "next/link";
import { Search } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-primary py-24">
      {/* Modern geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal gradient flow */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Top-left to bottom-right geometric shapes */}
        <div className="absolute top-[10%] left-[10%] h-40 w-40 border-4 border-accent/30 rounded-lg rotate-45 animate-float" />
        <div className="absolute top-[25%] left-[25%] h-32 w-32 bg-accent/20 rounded-full animate-float delay-300" />
        <div className="absolute top-[40%] left-[40%] h-24 w-24 border-2 border-white/20 rounded-lg rotate-12 animate-float delay-600" />
        <div className="absolute top-[55%] left-[55%] h-32 w-32 border-4 border-accent/30 rounded-lg rotate-45 animate-float delay-200" />
        <div className="absolute top-[70%] left-[70%] h-24 w-24 bg-accent/20 rounded-full animate-float delay-500" />
        <div className="absolute top-[85%] left-[85%] h-16 w-16 border-2 border-white/20 rounded-lg rotate-12 animate-float delay-800" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Diagonal floating dots */}
        <div className="absolute top-[15%] left-[15%] w-3 h-3 bg-accent/40 rounded-full animate-float" />
        <div className="absolute top-[30%] left-[30%] w-2 h-2 bg-accent/30 rounded-full animate-float delay-300" />
        <div className="absolute top-[45%] left-[45%] w-4 h-4 bg-accent/20 rounded-full animate-float delay-600" />
        <div className="absolute top-[60%] left-[60%] w-3 h-3 bg-accent/40 rounded-full animate-float delay-200" />
        <div className="absolute top-[75%] left-[75%] w-2 h-2 bg-accent/30 rounded-full animate-float delay-500" />
        <div className="absolute top-[90%] left-[90%] w-4 h-4 bg-accent/20 rounded-full animate-float delay-800" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`max-w-xl mx-auto lg:mx-0 text-center lg:text-left ${language === "ar" ? "lg:order-2" : ""}`}>
            <div className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm rounded-full mb-5">
              <span className="text-accent text-sm font-medium">NachhilfeLight - {t("nav.courses")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              {t("hero.title")}
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
              {t("hero.subtitle")}
            </p>

            {/* Search Bar */}
            {/* <div className="relative flex w-full max-w-xl mb-8 rounded-full shadow-lg mx-auto lg:mx-0">
              <Input
                type="text"
                placeholder={t("hero.search.placeholder")}
                className="pl-5 pr-12 py-6 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 rounded-full w-full focus:ring-accent/50 focus:border-accent/50"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-primary rounded-full w-10 h-10"
              >
                <Search size={18} />
              </Button>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-accent/80 font-bold hover:bg-accent text-black tracking-wide font-bold px-8 rounded-full cursor-pointer hover:scale-105 transition-all"
                >
                  {t("cta.start")}
                </Button>
              </Link>

              <Link href="mailto:alhantawi@nachhilfelight.de?subject=Anfrage Nachhilfe">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-bold border-white/30 text-black hover:text-white cursor-pointer hover:text-black hover:bg-cyan-200 rounded-full"
                >
                  {t("cta.become")}
                </Button>
              </Link>
            </div>

            <div className="text-white/60 text-sm mt-6">
              <span className="font-medium text-white/80">{t("hero.popular")}</span>
            </div>
          </div>

          <div className={`relative h-full flex justify-center items-center ${language === "ar" ? "lg:order-1" : ""}`}>
            <div className="absolute -z-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-md border border-white/20 shadow-xl transform transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-accent text-primary font-bold px-4 py-2 rounded-lg shadow-lg">
                <span className="animate-pulse text-black">Nachhilfelehrer</span>
              </div>

              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src="/avatar.png"
                  alt="Student with laptop"
                  width={400}
                  height={400}
                  className="rounded-xl mb-4 object-contain w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-medium"> Tutorials</h3>
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">12 Lessons</span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-white/70 text-xs">4.9 (2.5k reviews)</span>
              </div>

              <div className="relative w-full h-2 bg-white/20 rounded-full mb-4">
                <div className="absolute left-0 top-0 h-full w-3/4 bg-accent rounded-full" />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs">2.5 hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs">Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
