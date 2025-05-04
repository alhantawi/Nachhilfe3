"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "UX/UI Designer",
    text: "NachhilfeLight transformed my learning experience. The structured courses and expert instructors helped me advance my career in design.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Marketing Specialist",
    text: "The collaborative community at NachhilfeLight made all the difference. I've connected with peers and mentors who've helped shape my professional journey.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Full-Stack Developer",
    text: "As someone who values practical skills, I found NachhilfeLight's courses perfect for immediate application in my daily work. The hands-on approach is incredible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export function TestimonialsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className={`text-center mb-12 ${language === "ar" ? "rtl" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-md border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-xl text-primary">"</div>
                  <p className="text-gray-700 mb-6 grow">{testimonial.text}</p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
