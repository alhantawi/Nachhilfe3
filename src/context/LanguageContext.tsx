"use client";

import { createContext, useState, useContext, type ReactNode } from "react";

type Language = "en" | "ar" | "de";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Common
    "site.name": "NachhilfeLight",
    "nav.home": "Home",
    "nav.courses": "Courses",
    "nav.mentors": "Mentors",
    "nav.contact": "Contact",
    "nav.login": "Log in",
    "nav.signup": "Sign up",
    "cta": "Get Started",

    // Hero Section
    "hero.title": "🎓  Nachhilfe, die wirklich hilft – individuell, verständlich.“",
    "hero.subtitle": "Unlock your potential, gain valuable knowledge, and grow your business with our wide range of courses.",
    "hero.search.placeholder": "What do you want to learn today?",
    "hero.search.button": "Search",
    "hero.popular": "Popular: Math, Science & Painting, Marketing, Animation, Social Media",

    // Categories Section
    "categories.title": "Discover Your Passion, Build Your Skills",
    "categories.subtitle": "At NachhilfeLight Courses, we help you explore a variety of subjects and develop your skills in different areas. All courses are designed to help you achieve your goals.",

    // Courses Section
    "courses.title": "Explore Diverse Learning Paths at NachhilfeLight",
    "courses.subtitle": "Whether you're a beginner or looking to advance your skills, our courses meet you where you are. Browse through these popular courses to find what appeals to you.",

    // Stats Section
    "stats.title": "Your Path to Professional Growth Starts Here!",
    "stats.subtitle": "Explore our curated selection of courses created to enhance your capabilities and accelerate your career. With NachhilfeLight, you gain relevant expertise, develop in-demand skills, gain industry recognition, or build an online business.",
    "stats.students": "Active Students",
    "stats.tutors": "Expert Tutors",
    "stats.topics": "Course Topics",
    "stats.learnmore": "Learn More",

    // Features Section
    "features.title": "Unlock Your Potential as a Creator with NachhilfeLight",
    "features.subtitle": "Experience the combination of cohesive courses that are elevating patterns of success. Explore new skills and connect with a community of creators like yourself.",
    "features.create.title": "Create & Manage Courses Easily.",
    "features.create.subtitle": "NachhilfeLight makes it efficient for instructors to create, distribute, and manage interactive content. Launch your first course today!",
    "features.join": "Join as Creator",

    // Testimonials Section
    "testimonials.title": "Discover What Our Community is Saying",
    "testimonials.subtitle": "At NachhilfeLight, our vibrant community of learners and creators is our most valued asset. Hear what they have to say about their experience with our platform.",

    // CTA Section
    "cta.title": "Unlock Your Potential as a Creator with NachhilfeLight",
    "cta.subtitle": "Experience the collaboration of cohesive creators that are elevating patterns of success. Register now to join our platform and start your learning journey today.",
    "cta.start": "Start Learning Today",
    "cta.become": "Become an Instructor",

    // Footer
    "footer.about": "NachhilfeLight is the leading platform for online education, offering hundreds of courses in various subjects to help you grow professionally and personally.",
    "footer.quicklinks": "Quick Links",
    "footer.categories": "Categories",
    "footer.resources": "Resources",
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",
  },
  ar: {
    // Common
    "site.name": "ناخهيلفه لايت",
    "nav.home": "الرئيسية",
    "nav.courses": "الدورات",
    "nav.mentors": "المرشدون",
    "nav.contact": "اتصل بنا",
    "nav.login": "تسجيل الدخول",
    "nav.signup": "التسجيل",
    "cta": "ابدأ التعلم",

    // Hero Section
    "hero.title": "احصل على مئات الدورات المتاحة",
    "hero.subtitle": "أطلق العنان لإمكاناتك، واكتسب معرفة قيمة، ونمِّ عملك من خلال مجموعة واسعة من الدورات.",
    "hero.search.placeholder": "ماذا تريد أن تتعلم اليوم؟",
    "hero.search.button": "بحث",
    "hero.popular": "الأكثر شعبية: الرياضيات، العلوم والرسم، التسويق، الرسوم المتحركة، وسائل التواصل الاجتماعي",

    // Categories Section
    "categories.title": "اكتشف شغفك، وابنِ مهاراتك",
    "categories.subtitle": "في ناخهيلفه لايت، نساعدك على استكشاف مجموعة متنوعة من المواضيع وتطوير مهاراتك في مجالات مختلفة. تم تصميم جميع الدورات لمساعدتك على تحقيق أهدافك.",

    // Courses Section
    "courses.title": "استكشف مسارات التعلم المتنوعة في ناخهيلفه لايت",
    "courses.subtitle": "سواء كنت مبتدئًا أو تتطلع إلى تطوير مهاراتك، دوراتنا تلبي احتياجاتك. تصفح هذه الدورات الشائعة للعثور على ما يناسبك.",

    // Stats Section
    "stats.title": "مسارك إلى النمو المهني يبدأ هنا!",
    "stats.subtitle": "استكشف مجموعتنا المنتقاة من الدورات المصممة لتعزيز قدراتك وتسريع مسيرتك المهنية. مع ناخهيلفه لايت، تكتسب خبرة ذات صلة، وتطور مهارات مطلوبة، وتكتسب اعترافًا في الصناعة، أو تبني عملك عبر الإنترنت.",
    "stats.students": "الطلاب النشطون",
    "stats.tutors": "المدربون المتخصصون",
    "stats.topics": "مواضيع الدورات",
    "stats.learnmore": "تعلم المزيد",

    // Features Section
    "features.title": "أطلق العنان لإمكاناتك كمنشئ محتوى مع ناخهيلفه لايت",
    "features.subtitle": "اختبر مزيج الدورات المتماسكة التي ترفع أنماط النجاح. استكشف مهارات جديدة وتواصل مع مجتمع من المبدعين مثلك.",
    "features.create.title": "إنشاء وإدارة الدورات بسهولة.",
    "features.create.subtitle": "تجعل ناخهيلفه لايت من السهل على المدربين إنشاء وتوزيع وإدارة المحتوى التفاعلي. أطلق دورتك الأولى اليوم!",
    "features.join": "انضم كمنشئ",

    // Testimonials Section
    "testimonials.title": "اكتشف ما يقوله مجتمعنا",
    "testimonials.subtitle": "في ناخهيلفه لايت، مجتمعنا النابض بالحياة من المتعلمين والمبدعين هو أهم أصولنا. اسمع ما يقولونه عن تجربتهم مع منصتنا.",

    // CTA Section
    "cta.title": "أطلق العنان لإمكاناتك كمنشئ محتوى مع ناخهيلفه لايت",
    "cta.subtitle": "اختبر تعاون المبدعين المتماسكين الذين يرفعون أنماط النجاح. سجل الآن للانضمام إلى منصتنا وبدء رحلة التعلم الخاصة بك اليوم.",
    "cta.start": "ابدأ التعلم اليوم",
    "cta.become": "كن مدربًا",

    // Footer
    "footer.about": "ناخهيلفه لايت هي المنصة الرائدة للتعليم عبر الإنترنت، وتقدم مئات الدورات في مواضيع متنوعة لمساعدتك على النمو مهنيًا وشخصيًا.",
    "footer.quicklinks": "روابط سريعة",
    "footer.categories": "الفئات",
    "footer.resources": "الموارد",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.terms": "شروط الخدمة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.cookies": "سياسة ملفات تعريف الارتباط",
  },
  de: {
    // Common
    "site.name": "NachhilfeLight",
    "nav.home": "Startseite",
    "nav.courses": "Kurse",
    "nav.mentors": "Mentoren",
    "nav.contact": "Kontakt",
    "nav.login": "Anmelden",
    "nav.signup": "Registrieren",
    "cta": "Loslegen",

    // Hero Section
    "hero.subtitle": " Individuelle Lernförderung in Mathe, Deutsch, Englisch & mehr – mehrsprachig, zuverlässig, 100 % kostenlos mit Förderung. ",
    "hero.title": "👋NachhilfeLight – Kostenlose Nachhilfe für Schüler*innen.",
    "hero.search.placeholder": "Was möchtest du heute lernen?",
    "hero.search.button": "Suchen",
    "hero.popular": "Beliebt: Mathematik, Wissenschaft & Malerei, Marketing, Animation, Soziale Medien",

    // Categories Section
    "categories.title": "Entdecke deine Leidenschaft, entwickle deine Fähigkeiten",
    "categories.subtitle": "Bei NachhilfeLight helfen wir dir, verschiedene Themen zu erkunden und deine Fähigkeiten in unterschiedlichen Bereichen zu entwickeln. Alle Kurse sind darauf ausgerichtet, dir beim Erreichen deiner Ziele zu helfen.",

    // Courses Section
    "courses.title": "Entdecke vielfältige Lernwege bei NachhilfeLight",
    "courses.subtitle": "Ob Anfänger oder auf der Suche nach Fortschritten - unsere Kurse passen sich deinem Niveau an. Durchstöbere diese beliebten Kurse, um zu finden, was dich anspricht.",

    // Stats Section
    "stats.title": "Dein Weg zur beruflichen Entwicklung beginnt hier!",
    "stats.subtitle": "Entdecke unsere sorgfältig ausgewählten Kurse, die entwickelt wurden, um deine Fähigkeiten zu verbessern und deine Karriere zu beschleunigen. Mit NachhilfeLight gewinnst du relevante Expertise, entwickelst gefragte Fähigkeiten, erhältst Branchenanerkennung oder baust ein Online-Geschäft auf.",
    "stats.students": "Aktive Studenten",
    "stats.tutors": "Experten-Tutoren",
    "stats.topics": "Kursthemen",
    "stats.learnmore": "Mehr erfahren",

    // Features Section
    "features.title": "Entfalte dein Potenzial als Ersteller mit NachhilfeLight",
    "features.subtitle": "Erlebe die Kombination aus zusammenhängenden Kursen, die Erfolgsmuster fördern. Erkunde neue Fähigkeiten und verbinde dich mit einer Gemeinschaft von Erstellern wie dir.",
    "features.create.title": "Kurse einfach erstellen & verwalten.",
    "features.create.subtitle": "NachhilfeLight macht es Dozenten leicht, interaktive Inhalte zu erstellen, zu verteilen und zu verwalten. Starte noch heute deinen ersten Kurs!",
    "features.join": "Als Ersteller beitreten",

    // Testimonials Section
    "testimonials.title": "Entdecke, was unsere Community sagt",
    "testimonials.subtitle": "Bei NachhilfeLight ist unsere lebendige Gemeinschaft von Lernenden und Erstellern unser wertvollstes Gut. Höre, was sie über ihre Erfahrungen mit unserer Plattform zu sagen haben.",

    // CTA Section
    "cta.title": "Entfalte dein Potenzial als Ersteller mit NachhilfeLight",
    "cta.subtitle": "Erlebe die Zusammenarbeit von zusammenhängenden Erstellern, die Erfolgsmuster fördern. Registriere dich jetzt, um unserer Plattform beizutreten und heute deine Lernreise zu beginnen.",
    "cta.start": "Beginne heute zu lernen",
    "cta.become": "Werde Dozent",

    // Footer
    "footer.about": "NachhilfeLight ist die führende Plattform für Online-Bildung und bietet Hunderte von Kursen in verschiedenen Fächern an, um dir bei deiner beruflichen und persönlichen Entwicklung zu helfen.",
    "footer.quicklinks": "Schnelllinks",
    "footer.categories": "Kategorien",
    "footer.resources": "Ressourcen",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.cookies": "Cookie-Richtlinie",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
