"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-primary min-h-[85vh] flex items-center py-24">
      {/* Modern geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Softened gradient blobs */}
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] bg-accent/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />

        {/* Floating geometric shapes */}
        <div className="absolute top-[10%] left-[10%] h-40 w-40 border-4 border-accent/30 rounded-lg rotate-45 animate-float" />
        <div className="absolute top-[25%] left-[25%] h-32 w-32 bg-accent/20 rounded-full animate-float delay-300" />
        <div className="absolute top-[40%] left-[40%] h-24 w-24 border-2 border-white/20 rounded-lg rotate-12 animate-float delay-600" />
        <div className="absolute top-[55%] left-[55%] h-32 w-32 border-4 border-accent/30 rounded-lg rotate-45 animate-float delay-200" />
        <div className="absolute top-[70%] left-[70%] h-24 w-24 bg-accent/20 rounded-full animate-float delay-500" />
        <div className="absolute top-[85%] left-[85%] h-16 w-16 border-2 border-white/20 rounded-lg rotate-12 animate-float delay-800" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

        {/* Diagonal floating dots */}
        <div className="absolute top-[15%] left-[15%] w-3 h-3 bg-accent/40 rounded-full animate-float" />
        <div className="absolute top-[30%] left-[30%] w-2 h-2 bg-accent/30 rounded-full animate-float delay-300" />
        <div className="absolute top-[45%] left-[45%] w-4 h-4 bg-accent/20 rounded-full animate-float delay-600" />
        <div className="absolute top-[60%] left-[60%] w-3 h-3 bg-accent/40 rounded-full animate-float delay-200" />
        <div className="absolute top-[75%] left-[75%] w-2 h-2 bg-accent/30 rounded-full animate-float delay-500" />
        <div className="absolute top-[90%] left-[90%] w-4 h-4 bg-accent/20 rounded-full animate-float delay-800" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`max-w-xl mx-auto lg:mx-0 text-center lg:text-left ${language === "ar" ? "lg:order-2" : ""}`}>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm mb-6 transition-transform hover:scale-105 cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse" />
              {t("hero.badge")}
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              {t("hero.title")}
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-accent font-bold hover:bg-accent/90 text-black tracking-wide px-8 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,235,0,0.4)] hover:shadow-[0_0_35px_rgba(255,235,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {t("cta.start")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="mailto:alhantawi@nachhilfelight.de?subject=Anfrage Nachhilfe" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full font-bold border-white/30 text-black hover:text-white cursor-pointer hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
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
            <div className="absolute -z-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-md border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-4 -right-4 bg-accent text-primary font-bold px-4 py-2 rounded-lg shadow-lg">
                <span className="animate-pulse text-black">55% OFF</span>
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

              {/* Floating trust badges */}
              <div className="absolute bottom-6 -left-5 z-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">A+</div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{t("hero.trust.grades")}</p>
                    <p className="text-xs text-gray-500">{t("hero.trust.grades.sub")}</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 -right-5 z-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-float delay-300">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-sm">5★</div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{t("hero.trust.rating")}</p>
                    <p className="text-xs text-gray-500">{t("hero.trust.rating.sub")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
