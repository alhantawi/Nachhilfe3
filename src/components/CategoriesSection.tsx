"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/LanguageContext";



const skills = [
  { id: "digital-business", name: "Digital Business" },
  { id: "film-video", name: "Film & Video" },
  { id: "game-dev", name: "Game" },
  { id: "commerce", name: "Commerce & Entrepreneurship" },
  { id: "graphic-design", name: "Graphic Design" },
  { id: "photography", name: "Photography" },
  { id: "productivity", name: "Productivity" },
  { id: "web-dev", name: "Web Development" },
  { id: "data-science", name: "Data Science" },
  { id: "ui-ux", name: "UI/UX" }
];

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className={`text-center mb-12 ${language === "ar" ? "rtl" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("categories.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("categories.subtitle")}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${language === "ar" ? "flex-row-reverse" : ""}`}>
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setActiveCategory(skill.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === skill.id 
                  ? "bg-primary text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } ${language === "ar" ? "flex-row-reverse" : ""}`}
            >
              {skill.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow border border-gray-100 hover:scale-105 transform duration-300"
            >
              <Badge variant="secondary" className="mb-1">{skill.id}</Badge>
              <p className="font-medium text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
