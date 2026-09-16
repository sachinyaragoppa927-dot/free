export interface Program {
  slug: string;
  name: string;
  shortDescription: string;
  targetAudience: string;
  duration: string;
  benefits: string[];
  overview: string;
  whoItsFor: string[];
  included: string[];
  process: { step: number; title: string; description: string }[];
}

export const programs: Program[] = [
  {
    slug: "strength-foundation",
    name: "Strength Foundation",
    shortDescription: "Build a solid strength base with progressive overload training designed for beginners and intermediate lifters.",
    targetAudience: "Adults new to structured training or returning after a break",
    duration: "12 weeks",
    benefits: [
      "Personalized progressive programming",
      "Form assessment and correction",
      "Nutrition guidance for muscle building",
      "Weekly check-ins and adjustments",
      "Access to exercise video library",
    ],
    overview: "The Strength Foundation program is designed for adults who want to build real, functional strength through evidence-based training. Whether you're new to the gym or returning after time off, this program meets you where you are and progressively challenges your body to adapt and grow stronger.",
    whoItsFor: [
      "You're new to resistance training and want to start correctly",
      "You've been training inconsistently and want structure",
      "You want to build strength for everyday life",
      "You prefer a coach who prioritizes form over ego",
    ],
    included: [
      "Custom 12-week training program",
      "Bi-weekly video form reviews",
      "Nutrition framework (not a restrictive diet)",
      "Direct messaging access to your coach",
      "Monthly program adjustments",
      "Progress tracking dashboard",
    ],
    process: [
      { step: 1, title: "Assessment", description: "We start with a comprehensive consultation to understand your history, goals, and any limitations." },
      { step: 2, title: "Program Design", description: "Your coach creates a personalized training plan based on your assessment." },
      { step: 3, title: "Execution", description: "You train on your own schedule with ongoing coach support and feedback." },
      { step: 4, title: "Progression", description: "Every 4 weeks, we reassess and adjust your program to keep you progressing." },
    ],
  },
  {
    slug: "performance-accelerator",
    name: "Performance Accelerator",
    shortDescription: "Advanced training for experienced lifters ready to break through plateaus and reach new performance levels.",
    targetAudience: "Intermediate to advanced trainees with consistent training history",
    duration: "16 weeks",
    benefits: [
      "Periodized training blocks",
      "Advanced programming techniques",
      "Competition prep support",
      "Recovery and mobility protocols",
      "Performance testing and benchmarking",
    ],
    overview: "The Performance Accelerator is for experienced trainees who have built a foundation and are ready to push their limits. This program uses advanced periodization, specialized techniques, and data-driven adjustments to help you break through plateaus and achieve performance goals you thought were out of reach.",
    whoItsFor: [
      "You've been training consistently for 2+ years",
      "You've hit a plateau and need new stimulus",
      "You're preparing for a strength competition or event",
      "You want advanced programming beyond generic plans",
    ],
    included: [
      "16-week periodized training program",
      "Weekly program adjustments based on feedback",
      "Advanced recovery protocols",
      "Performance testing every 4 weeks",
      "Competition day strategy (if applicable)",
      "Priority messaging access",
      "Supplementation guidance",
    ],
    process: [
      { step: 1, title: "Deep Assessment", description: "Comprehensive review of training history, current performance data, and specific goals." },
      { step: 2, title: "Periodization Plan", description: "A multi-block program designed with specific phases targeting different adaptations." },
      { step: 3, title: "Intensive Execution", description: "High-accountability training with weekly check-ins and real-time adjustments." },
      { step: 4, title: "Peak & Evaluate", description: "Deload, test performance, and plan your next training phase." },
    ],
  },
  {
    slug: "lean-transformation",
    name: "Lean Transformation",
    shortDescription: "A sustainable approach to fat loss that prioritizes muscle retention, energy, and long-term habit formation.",
    targetAudience: "Adults seeking sustainable body composition changes",
    duration: "16 weeks",
    benefits: [
      "Sustainable nutrition coaching",
      "Training for muscle retention",
      "Habit-based behavior change",
      "Metabolic health focus",
      "Mindset and accountability support",
    ],
    overview: "The Lean Transformation program takes a holistic, sustainable approach to improving body composition. We don't believe in crash diets or excessive cardio. Instead, we focus on building habits you can maintain, preserving muscle through smart training, and creating a caloric approach that works with your life.",
    whoItsFor: [
      "You want to lose fat without losing muscle or energy",
      "You've tried restrictive diets that didn't last",
      "You want to build sustainable healthy habits",
      "You're looking for a coach who focuses on health, not just aesthetics",
    ],
    included: [
      "Custom nutrition plan with flexible framework",
      "Training program optimized for muscle retention",
      "Weekly nutrition coaching calls",
      "Habit tracking and accountability system",
      "Bi-weekly progress photos and measurements",
      "Sleep and stress management guidance",
      "Post-program transition plan",
    ],
    process: [
      { step: 1, title: "Lifestyle Assessment", description: "We evaluate your current habits, schedule, preferences, and history with nutrition." },
      { step: 2, title: "Custom Plan", description: "Your coach designs a nutrition and training plan that fits your actual life." },
      { step: 3, title: "Guided Implementation", description: "Weekly coaching to build habits, troubleshoot challenges, and celebrate wins." },
      { step: 4, title: "Sustainable Transition", description: "We prepare you to maintain results independently with a long-term plan." },
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  program: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marcus T.",
    role: "Software Engineer",
    content: "After years of inconsistent gym visits, NovaFit gave me the structure I needed. Six months in, I'm stronger than I've ever been and actually enjoying training.",
    program: "Strength Foundation",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Marketing Director",
    content: "The coaching approach is refreshingly different. No extreme diets, no punishing workouts—just smart programming and real accountability. The results followed naturally.",
    program: "Lean Transformation",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Small Business Owner",
    content: "I was stuck at the same lifts for over a year. Within the first periodized block, I broke through my plateau. The attention to detail in programming is exceptional.",
    program: "Performance Accelerator",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    role: "Teacher",
    content: "What sets NovaFit apart is the genuine care. My coach noticed when I was struggling with stress and adjusted my training accordingly. That level of attentiveness is rare.",
    program: "Strength Foundation",
    rating: 5,
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "How is online coaching different from training on my own?",
    answer: "Online coaching provides personalized programming based on your specific goals, experience, and limitations. Unlike generic plans, your program adapts to your progress. You also have a coach reviewing your form, adjusting your nutrition, and keeping you accountable—things that are difficult to do alone.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer: "That's exactly who our Strength Foundation program is designed for. We start with an assessment of your current abilities and build from there. Many of our most successful clients started with zero gym experience. Your coach will teach you proper form and progressively challenge you at a pace that's right for you.",
  },
  {
    question: "How often will I communicate with my coach?",
    answer: "Communication frequency depends on your program. All programs include direct messaging access with responses within 24 hours on business days. Most programs include weekly or bi-weekly check-in calls. You're never left wondering if your coach is available.",
  },
  {
    question: "Do I need a gym membership?",
    answer: "Most programs are designed for a commercial gym environment. However, we can accommodate home gym setups with appropriate equipment. During your consultation, we'll discuss your available equipment and adjust programming accordingly.",
  },
  {
    question: "What happens after the program ends?",
    answer: "We believe in preparing you for long-term independence. Every program includes a transition plan. You can also choose to continue with a maintenance coaching package at a reduced rate, or graduate to a more advanced program.",
  },
  {
    question: "Can I switch programs mid-way?",
    answer: "Yes. If your goals change or you feel ready for a different approach, we can transition you to another program. We'll ensure continuity in your training and adjust the timeline accordingly.",
  },
];

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Foundation",
    price: 199,
    period: "month",
    description: "Ideal for beginners who want guided structure and accountability.",
    features: [
      "Custom training program",
      "Monthly program adjustments",
      "Bi-weekly check-in calls",
      "Direct messaging access",
      "Exercise video library",
      "Progress tracking",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Performance",
    price: 349,
    period: "month",
    description: "Our most popular option for serious trainees who want comprehensive coaching.",
    features: [
      "Everything in Foundation",
      "Weekly check-in calls",
      "Nutrition coaching",
      "Video form reviews",
      "Recovery protocols",
      "Priority messaging",
      "Supplement guidance",
      "Quarterly assessments",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Elite",
    price: 549,
    period: "month",
    description: "White-glove coaching for those who want maximum support and results.",
    features: [
      "Everything in Performance",
      "Unlimited messaging",
      "Twice-weekly check-ins",
      "Competition prep support",
      "Custom meal plans",
      "Lifestyle optimization",
      "Direct phone access",
      "Monthly video consultation",
    ],
    highlighted: false,
    cta: "Get Started",
  },
];

export interface SuccessStory {
  name: string;
  age: number;
  program: string;
  duration: string;
  summary: string;
  quote: string;
  highlights: string[];
}

export const successStories: SuccessStory[] = [
  {
    name: "Alex M.",
    age: 34,
    program: "Strength Foundation",
    duration: "6 months",
    summary: "Started with no gym experience. Built a consistent training habit and developed real strength.",
    quote: "I never thought I'd be someone who actually enjoys going to the gym. NovaFit changed my relationship with fitness completely.",
    highlights: ["Consistent 4x/week training", "Increased squat by 60%", "Improved energy levels"],
  },
  {
    name: "Rachel P.",
    age: 41,
    program: "Lean Transformation",
    duration: "4 months",
    summary: "Focused on sustainable fat loss while maintaining strength and energy for her demanding career.",
    quote: "The flexible nutrition approach was a game-changer. I learned to eat well without giving up foods I enjoy.",
    highlights: ["Sustainable habits built", "Improved body composition", "Better relationship with food"],
  },
  {
    name: "Tom H.",
    age: 29,
    program: "Performance Accelerator",
    duration: "5 months",
    summary: "Broke through a year-long plateau and prepared for his first powerlifting meet.",
    quote: "The periodized programming was unlike anything I'd experienced. Every block had a clear purpose and the results spoke for themselves.",
    highlights: ["Broke 3 major plateaus", "Completed first powerlifting meet", "PR'd all three lifts"],
  },
];

export const coachInfo = {
  name: "Coach Nova",
  title: "Founder & Head Coach",
  experience: "10+ years",
  clientsCoached: "500+",
  certifications: [
    "NSCA Certified Strength & Conditioning Specialist (CSCS)",
    "Precision Nutrition Level 1 Certification",
    "Functional Movement Screen (FMS) Certified",
    "USA Weightlifting Sports Performance Coach",
  ],
  philosophy: "I believe fitness should enhance your life, not consume it. My approach combines evidence-based training with practical, sustainable habits. No fads, no extremes—just smart programming and genuine support to help you build strength that lasts.",
  story: "I started coaching after my own journey from a sedentary office worker to competitive strength athlete. That transformation taught me that the right guidance at the right time changes everything. I built NovaFit to provide that guidance to others—programming rooted in science, delivered with the personal attention that makes real results possible.",
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Clients Coached" },
    { value: "98%", label: "Client Retention" },
    { value: "4.9", label: "Average Rating" },
  ],
};
