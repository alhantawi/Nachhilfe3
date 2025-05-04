"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check, Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure we only render this on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: "en" | "ar" | "de") => {
    setLanguage(lang);
    setIsOpen(false);

    // To handle RTL for Arabic language
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
      document.documentElement.classList.add("font-arabic");
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = lang;
      document.documentElement.classList.remove("font-arabic");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-opacity-20 bg-white hover:bg-opacity-30 transition-all text-black border border-white/10 cursor-pointer hover:bg-yellow-100"
        aria-label="Switch language"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">
          {language === "en" ? "English" : language === "ar" ? "العربية" : "Deutsch"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl py-2 min-w-[120px] border border-gray-100 z-50">
          <button
            onClick={() => selectLanguage("en")}
            className="w-full px-4 py-2 flex justify-between items-center text-left hover:bg-yellow-100 transition-colors cursor-pointer"
          >
            <span>English</span>
            {language === "en" && <Check size={16} className="text-primary" />}
          </button>
          <button
            onClick={() => selectLanguage("de")}
            className="w-full px-4 py-2 flex justify-between items-center text-left hover:bg-yellow-100 transition-colors cursor-pointer"
          >
            <span>Deutsch</span>
            {language === "de" && <Check size={16} className="text-primary" />}
          </button>
          <button
            onClick={() => selectLanguage("ar")}
            className="w-full px-4 py-2 flex justify-between items-center text-left hover:bg-yellow-100 transition-colors cursor-pointer"
          >
            <span>العربية</span>
            {language === "ar" && <Check size={16} className="text-primary" />}
          </button>
        </div>
      )}
    </div>
  );
}
