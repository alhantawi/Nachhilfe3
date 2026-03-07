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
    "hero.title": "Free school tutoring – trusted, clear, multilingual.",
    "hero.subtitle": "NachhilfeLight offers government-supported tutoring for students in math, languages, and science – online or in-person.",
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
    "stats.title": "Education opens doors – NachhilfeLight makes it accessible",
    "stats.subtitle": "We provide free tutoring supported by the German government for students who need help in school.",
    "stats.students": "Active Students",
    "stats.tutors": "Expert Tutors",
    "stats.topics": "Course Topics",
    "stats.learnmore": "Learn More",

    // Features Section
    "features.title": "Support your child’s learning with NachhilfeLight",
    "features.subtitle": "We offer free, trusted tutoring for school students – clear, personal and flexible.",
    "features.create.title": " Learning starts with trust – tutoring that fits your child.",
    "features.create.subtitle": "At NachhilfeLight, students get personal academic support – at home, online, or in school. We guide your child step by step – with patience, experience and multilingual support.",
    "features.join": "Get started for free",

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

    // Cookie Banner
    "cookie.banner.title": "We use cookies 🍪",
    "cookie.banner.description": "We use cookies to improve your experience, analyze traffic, and personalize content. You can manage your preferences below.",
    "cookie.banner.acceptAll": "Accept All",
    "cookie.banner.rejectNonEssential": "Reject Non-Essential",
    "cookie.banner.managePreferences": "Manage Preferences",
    "cookie.banner.savePreferences": "Save Preferences",
    "cookie.banner.necessary": "Necessary",
    "cookie.banner.necessary.description": "Required for the website to function properly. Cannot be disabled.",
    "cookie.banner.analytics": "Analytics",
    "cookie.banner.analytics.description": "Help us understand how visitors interact with the website.",
    "cookie.banner.marketing": "Marketing",
    "cookie.banner.marketing.description": "Used to deliver personalized advertisements and track campaigns.",
    "cookie.banner.learnMore": "Learn More",
    "cookie.settings.button": "Cookie Settings",
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
    "hero.title": "هل طفلك بحاجة إلى دعم دراسي و دروس اضافية و خصوصية؟",
    "hero.subtitle": "نحن نقدم Nachhilfe مجانية 100٪ للطلاب المؤهلين من خلال برنامج الدعم الحكومي Bildung und Teilhabe (BuT).",
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
    "stats.title": "نساعد طفلك على بناء ثقته بنفسه وتحقيق النجاح الدراسي",
    "stats.subtitle": "نتميز بوجود مدرسين مهرة وذوي خبرة في التعامل مع مختلف المستويات الدراسية. المقاعد محدودة – سجل الآن قبل أن تمتلئ!",
    "stats.students": "الطلاب النشطون",
    "stats.tutors": "المدربون المتخصصون",
    "stats.topics": "مواضيع الدورات",
    "stats.learnmore": "تعلم المزيد",

    // Features Section
    "features.title": "🎯 هدفنا بسيط ننم قدرات طفلك بخطوات ثابتة ودون شقاء ",
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

    // Cookie Banner
    "cookie.banner.title": "نستخدم ملفات تعريف الارتباط 🍪",
    "cookie.banner.description": "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة المرور وتخصيص المحتوى. يمكنك إدارة تفضيلاتك أدناه.",
    "cookie.banner.acceptAll": "قبول الكل",
    "cookie.banner.rejectNonEssential": "رفض غير الضروري",
    "cookie.banner.managePreferences": "إدارة التفضيلات",
    "cookie.banner.savePreferences": "حفظ التفضيلات",
    "cookie.banner.necessary": "ضروري",
    "cookie.banner.necessary.description": "مطلوب لعمل الموقع بشكل صحيح. لا يمكن تعطيله.",
    "cookie.banner.analytics": "التحليلات",
    "cookie.banner.analytics.description": "يساعدنا على فهم كيفية تفاعل الزوار مع الموقع.",
    "cookie.banner.marketing": "التسويق",
    "cookie.banner.marketing.description": "يُستخدم لتقديم إعلانات مخصصة وتتبع الحملات.",
    "cookie.banner.learnMore": "معرفة المزيد",
    "cookie.settings.button": "إعدادات ملفات تعريف الارتباط",
  },
  de: {
    // Common عدل بعد هذا السطر مشن اللغة الالمانية
    "site.name": "NachhilfeLight",
    "nav.home": "Startseite",
    "nav.courses": "Kurse",
    "nav.mentors": "Mentoren",
    "nav.contact": "Kontakt",
    "nav.login": "Anmelden",
    "nav.signup": "Registrieren",
    "cta": "Loslegen",

    // Hero Section
    "hero.subtitle": "  Individuelle Lernförderung in Mathe, Deutsch, Englisch & mehr – mehrsprachig, zuverlässig, 100 % kostenlos mit Förderung. ",
    "hero.title": "Willkommen bei NachhilfeLight – kostenlose Nachhilfe für Schüler!",
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
    "stats.title": "Mehr Bildung. Mehr Chancen. Mehr Zukunft.",
    "stats.subtitle": "NachhilfeLight bietet kostenlose, staatlich geförderte Nachhilfe für Schüler*innen. Wir helfen bei Mathe, Deutsch, Englisch, Naturwissenschaften und mehr – individuell, geduldig und auf Augenhöhe. 📍 Unterricht online, zu Hause oder in der Schule 🗣️ Betreuung auch auf Arabisch, Türkisch, Russisch, Englisch 💡 Antragshilfe beim Jobcenter inklusive",
    "stats.students": "Aktive Studenten",
    "stats.tutors": "Experten-Tutoren",
    "stats.topics": "Kursthemen",
    "stats.learnmore": "Mehr erfahren",

    // Features Section
    "features.title": "Entfalte das Potenzial deines Kindes mit NachhilfeLight",
    "features.subtitle": "Erlebe gezielte Nachhilfe, die wirkt – kostenlos, verständlich und professionell. So unterstützen wir:",
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
    "cta.become": "Send uns E-Mail ✉️",

    // Footer
    "footer.about": "NachhilfeLight ist die führende Plattform für Online-Bildung und bietet Hunderte von Kursen in verschiedenen Fächern an, um dir bei deiner beruflichen und persönlichen Entwicklung zu helfen.",
    "footer.quicklinks": "Schnelllinks",
    "footer.categories": "Kategorien",
    "footer.resources": "Ressourcen",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.cookies": "Cookie-Richtlinie",

    // Cookie Banner
    "cookie.banner.title": "Wir verwenden Cookies 🍪",
    "cookie.banner.description": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, den Datenverkehr zu analysieren und Inhalte zu personalisieren. Sie können Ihre Einstellungen unten verwalten.",
    "cookie.banner.acceptAll": "Alle akzeptieren",
    "cookie.banner.rejectNonEssential": "Nicht-Notwendige ablehnen",
    "cookie.banner.managePreferences": "Einstellungen verwalten",
    "cookie.banner.savePreferences": "Einstellungen speichern",
    "cookie.banner.necessary": "Notwendig",
    "cookie.banner.necessary.description": "Erforderlich für den ordnungsgemäßen Betrieb der Website. Kann nicht deaktiviert werden.",
    "cookie.banner.analytics": "Analyse",
    "cookie.banner.analytics.description": "Helfen uns zu verstehen, wie Besucher mit der Website interagieren.",
    "cookie.banner.marketing": "Marketing",
    "cookie.banner.marketing.description": "Wird verwendet, um personalisierte Werbung zu schalten und Kampagnen zu verfolgen.",
    "cookie.banner.learnMore": "Mehr erfahren",
    "cookie.settings.button": "Cookie-Einstellungen",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

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
