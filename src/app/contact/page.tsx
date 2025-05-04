"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Search } from "lucide-react";

// Define application schemas
const mentorFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(6, { message: "Phone number is required" }),
  specialization: z.string().min(2, { message: "Please specify your specialization" }),
  experience: z.string().min(5, { message: "Please provide details about your experience" }),
  motivation: z.string().min(10, { message: "Please describe your motivation" }),
});

const studentFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(6, { message: "Phone number is required" }),
  subject: z.string().min(2, { message: "Please specify what subject you need help with" }),
  level: z.string().min(1, { message: "Please select your education level" }),
  message: z.string().min(10, { message: "Please describe what you're looking for" }),
});

type MentorFormValues = z.infer<typeof mentorFormSchema>;
type StudentFormValues = z.infer<typeof studentFormSchema>;

export default function Contact() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("student");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Forms
  const mentorForm = useForm<MentorFormValues>({
    resolver: zodResolver(mentorFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialization: "",
      experience: "",
      motivation: "",
    },
  });

  const studentForm = useForm<StudentFormValues>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      level: "",
      message: "",
    },
  });

  // Handle submissions
  const onMentorSubmit = async (data: MentorFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Mentor application submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    mentorForm.reset();
  };

  const onStudentSubmit = async (data: StudentFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Student application submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    studentForm.reset();
  };

  // Translations
  const translations = {
    title: "Contact Us",
    subtitle: "Apply as a mentor or request help as a student",
    student: {
      tab: "Apply as Student",
      title: "Need help with your studies?",
      subtitle: "Fill out this form to find a mentor that matches your needs",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email address",
      phone: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      subject: "Subject",
      subjectPlaceholder: "What subject do you need help with?",
      level: "Education Level",
      levelPlaceholder: "Select your education level",
      message: "Your Message",
      messagePlaceholder: "Tell us more about what you're looking for...",
      submit: "Submit Request",
      success: "Your request has been submitted successfully!",
    },
    mentor: {
      tab: "Apply as Mentor",
      title: "Join our team of mentors",
      subtitle: "Share your knowledge and help students achieve their goals",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email address", 
      phone: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      specialization: "Specialization",
      specializationPlaceholder: "What subjects do you teach?",
      experience: "Experience",
      experiencePlaceholder: "Tell us about your teaching experience...",
      motivation: "Motivation",
      motivationPlaceholder: "Why do you want to join NachhilfeLight?",
      submit: "Submit Application",
      success: "Your application has been submitted successfully!",
    },
    levels: {
      elementary: "Elementary School",
      middle: "Middle School",
      high: "High School",
      undergraduate: "Undergraduate",
      graduate: "Graduate",
      other: "Other",
    },
  };

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-36 w-36 bg-accent rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-10 bottom-24 h-24 w-24 bg-accent rounded-full opacity-30" />
      <div className="absolute right-48 top-20 h-16 w-16 border-4 border-accent opacity-50 transform rotate-12" />
      <div className="absolute left-1/4 bottom-10 h-12 w-3 bg-primary opacity-30 transform rotate-45" />
      <div className="absolute right-1/3 top-1/4 h-8 w-8 border-4 border-primary opacity-20 transform -rotate-12 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4 text-primary">{translations.title}</h1>
            <p className="text-lg text-gray-600">{translations.subtitle}</p>
          </div>

          <Tabs 
            defaultValue="student" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-10">
              <TabsTrigger 
                value="student" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all hover:bg-gray-100"
              >
                {translations.student.tab}
              </TabsTrigger>
              <TabsTrigger 
                value="mentor" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all hover:bg-gray-100"
              >
                {translations.mentor.tab}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="student" className="mt-6">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{translations.student.title}</h2>
                  <p className="text-gray-600">{translations.student.subtitle}</p>
                </div>

                <Form {...studentForm}>
                  <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={studentForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.student.name}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.student.namePlaceholder} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={studentForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.student.email}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.student.emailPlaceholder} 
                                type="email"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={studentForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.student.phone}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.student.phonePlaceholder} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={studentForm.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.student.subject}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.student.subjectPlaceholder} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={studentForm.control}
                        name="level"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.student.level}</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="" disabled>Select your level</option>
                                <option value="elementary">{translations.levels.elementary}</option>
                                <option value="middle">{translations.levels.middle}</option>
                                <option value="high">{translations.levels.high}</option>
                                <option value="undergraduate">{translations.levels.undergraduate}</option>
                                <option value="graduate">{translations.levels.graduate}</option>
                                <option value="other">{translations.levels.other}</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={studentForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.student.message}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={translations.student.messagePlaceholder} 
                              rows={5}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-end mt-6">
                      {isSuccess && activeTab === "student" && (
                        <p className="text-green-600 mr-4">{translations.student.success}</p>
                      )}
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-accent hover:bg-accent/90 text-primary font-medium px-8 rounded-full cursor-pointer hover:scale-105 transition-all"
                      >
                        {isSubmitting ? "Submitting..." : translations.student.submit}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </TabsContent>

            <TabsContent value="mentor" className="mt-6">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{translations.mentor.title}</h2>
                  <p className="text-gray-600">{translations.mentor.subtitle}</p>
                </div>

                <Form {...mentorForm}>
                  <form onSubmit={mentorForm.handleSubmit(onMentorSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={mentorForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.mentor.name}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.mentor.namePlaceholder} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={mentorForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.mentor.email}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.mentor.emailPlaceholder} 
                                type="email"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={mentorForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.mentor.phone}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.mentor.phonePlaceholder} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={mentorForm.control}
                        name="specialization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{translations.mentor.specialization}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={translations.mentor.specializationPlaceholder} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={mentorForm.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.mentor.experience}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={translations.mentor.experiencePlaceholder} 
                              rows={4}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={mentorForm.control}
                      name="motivation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{translations.mentor.motivation}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={translations.mentor.motivationPlaceholder} 
                              rows={4}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-end mt-6">
                      {isSuccess && activeTab === "mentor" && (
                        <p className="text-green-600 mr-4">{translations.mentor.success}</p>
                      )}
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-accent hover:bg-accent/90 text-primary font-medium px-8 rounded-full cursor-pointer hover:scale-105 transition-all"
                      >
                        {isSubmitting ? "Submitting..." : translations.mentor.submit}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}   