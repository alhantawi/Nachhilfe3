"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

const features = [
  {
    icon: "🎓",
    title: "Grow Your Expertise",
    description: "Access expert-led courses with practical and theoretical knowledge across various fields."
  },
  {
    icon: "💼",
    title: "Build a Community",
    description: "Connect with like-minded learners, share insights, and grow your professional network."
  },
  {
    icon: "🚀",
    title: "Create Your Courses",
    description: "Share your knowledge and earn by creating and selling your own courses."
  },
  {
    icon: "📊",
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed analytics and achievement badges."
  },
  {
    icon: "🌟",
    title: "Certification",
    description: "Earn industry-recognized certificates to showcase your new skills."
  },
  {
    icon: "💻",
    title: "Anytime, Anywhere",
    description: "Learn at your own pace with courses accessible on any device, anytime."
  }
];

export default function FeaturesSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className={`text-center mb-10 ${language === "ar" ? "rtl" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow hover:scale-105 transform duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl overflow-hidden">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${language === "ar" ? "lg:flex lg:flex-row-reverse" : ""}`}>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t("features.create.title")}
              </h2>
              <p className="text-white/80 mb-8">
                {t("features.create.subtitle")}
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="text-accent font-semibold mr-3">✓</div>
                  <div className="text-white">Grow Your Expertise</div>
                </div>
                <div className="flex items-start">
                  <div className="text-accent font-semibold mr-3">✓</div>
                  <div className="text-white">Build a Community</div>
                </div>
                <div className="flex items-start">
                  <div className="text-accent font-semibold mr-3">✓</div>
                  <div className="text-white">Analytics and Advanced Tools</div>
                </div>
              </div>
              <Link href="https://wa.me/+4917684711406" target="_blank" rel="noopener noreferrer">
                <Button
                  className="mt-8 bg-accent text-black hover:bg-accent/90 self-start btn-modern"
                  variant="accent"
                >
                  {t("features.join")}
                </Button>
              </Link>
            </div>

            <div className="relative lg:h-auto flex items-center">
              <Image
                src="/people2.avif"
                alt="Course creators collaborating"
                width={600}
                height={400}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
