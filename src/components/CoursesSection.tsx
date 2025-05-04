"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const courses = [
  {
    id: 1,
    title: "Learn Digital Asset Building",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Digital Design",
    rating: 4.8,
    students: 1234,
    price: "$49.99",
    instructorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    instructorName: "Sarah M."
  },
  {
    id: 2,
    title: "The Power of Big Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Data Science",
    rating: 4.6,
    students: 853,
    price: "$59.99",
    instructorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    instructorName: "James L."
  },
  {
    id: 3,
    title: "Balancing Productivity and Wellbeing",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Productivity",
    rating: 4.9,
    students: 2159,
    price: "$39.99",
    instructorImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    instructorName: "Emily K."
  },
  {
    id: 4,
    title: "Maximizing Micro Strategies",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Business",
    rating: 4.7,
    students: 1450,
    price: "$49.99",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    instructorName: "Mark T."
  },
  {
    id: 5,
    title: "From Idea to Startup Success",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Entrepreneurship",
    rating: 4.8,
    students: 3254,
    price: "$59.99",
    instructorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    instructorName: "Alex B."
  },
  {
    id: 6,
    title: "Digital Marketing Essentials",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    rating: 4.5,
    students: 2134,
    price: "$44.99",
    instructorImage: "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    instructorName: "Jessica H."
  }
];

export function CoursesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Diverse Learning Paths at NachhilfeLight
        </h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Whether you're a beginner or looking to advance your skills, our courses meet you where you are. Browse through these popular courses to find what appeals to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="feature-card">
              <div className="relative aspect-video">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
                <Badge className="absolute top-3 left-3 bg-white/90 text-primary hover:bg-white">
                  {course.category}
                </Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

                <div className="flex items-center mt-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={course.instructorImage} alt={course.instructorName} />
                      <AvatarFallback>{course.instructorName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{course.instructorName}</span>
                  </div>

                  <div className="flex items-center ml-auto space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students})</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-5 py-3 border-t flex justify-between items-center">
                <span className="font-bold text-primary">{course.price}</span>
                <span className="text-xs text-gray-500">{course.students} students</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
