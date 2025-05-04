"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
  { id: "all", name: "All" },
  { id: "design", name: "Design" },
  { id: "drawing", name: "Drawing & Painting" },
  { id: "marketing", name: "Marketing" },
  { id: "animation", name: "Animation" },
  { id: "social", name: "Social Media" },
  { id: "digital", name: "Digital Design" },
  { id: "photo", name: "Photography" },
];

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
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-pill ${activeCategory === category.id ? "active" : ""}`}
            >
              {category.name}
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
