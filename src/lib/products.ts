export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  color: string;
  url: string;
  features: string[];
}

export const products: Product[] = [
  {
    slug: "zeha-academy",
    name: "Zeha Academy",
    tagline: "AI Super Platform",
    description: "Next-generation conversational AI platform designed to understand, assist, and evolve with users.",
    longDescription: [
      "Zeha Academy is Turkey's national AI assistant, built to serve users across education, daily life, and professional contexts. Powered by advanced language models, Zeha understands Turkish natively and provides intelligent, context-aware responses.",
      "The platform features a child-safe mode with parental controls, making it suitable for learners of all ages. From homework help to creative writing, Zeha adapts to each user's needs and learning style.",
      "With enterprise-grade security and GDPR compliance, Zeha Academy is trusted by thousands of users for their daily AI interactions.",
    ],
    color: "from-red-500 to-orange-500",
    url: "https://zehaacademy.com",
    features: ["Conversational AI", "Child-Safe Mode", "Parental Controls", "Multi-context Support", "Turkish Native", "GDPR Compliant"],
  },
  {
    slug: "safely",
    name: "Safely",
    tagline: "Safety Infrastructure",
    description: "AI-powered crisis coordination and safety management platform.",
    longDescription: [
      "Safely is an AI-powered safety infrastructure platform designed for institutions, universities, and smart cities. It provides real-time threat detection, crisis coordination, and emergency response management.",
      "The platform uses advanced AI algorithms to analyze patterns, predict potential safety incidents, and coordinate response teams efficiently. From campus security to city-wide emergency management, Safely scales to meet any challenge.",
      "With 24/7 monitoring capabilities and instant alert systems, Safely ensures that communities are protected around the clock.",
    ],
    color: "from-blue-500 to-cyan-500",
    url: "https://safely-global.com",
    features: ["Real-time Monitoring", "Threat Detection", "Crisis Coordination", "Emergency Alerts", "Institutional Dashboard", "24/7 AI Systems"],
  },
  {
    slug: "checkly",
    name: "Checkly",
    tagline: "Social Intelligence Layer",
    description: "Smart social check-in network with AI-powered matching.",
    longDescription: [
      "Checkly is a smart social check-in network that connects people across languages and locations. Using AI-powered matching algorithms, it helps users discover and connect with like-minded individuals in their vicinity.",
      "The platform features intelligent location-based services, real-time check-ins, and community building tools. Whether you're traveling, attending events, or exploring your neighborhood, Checkly enhances your social experience.",
      "With multi-language support and cross-cultural matching, Checkly breaks down barriers and brings people together.",
    ],
    color: "from-green-500 to-emerald-500",
    url: "https://checkly.tech",
    features: ["AI Matching", "Location-based", "Multi-language", "Real-time Check-ins", "Community Building", "Cross-cultural"],
  },
  {
    slug: "lingochat",
    name: "LingoChat",
    tagline: "AI Language Learning",
    description: "Conversational AI language learning platform.",
    longDescription: [
      "LingoChat revolutionizes language learning through conversational AI. Instead of traditional flashcards and grammar drills, users practice with AI tutors in real-time conversations that adapt to their proficiency level.",
      "Supporting 30+ languages, LingoChat provides personalized learning paths, pronunciation feedback, and cultural context. The AI tutor remembers your progress and adjusts difficulty dynamically.",
      "Whether you're a beginner or advanced learner, LingoChat makes language learning natural, engaging, and effective.",
    ],
    color: "from-yellow-500 to-amber-500",
    url: "https://lingo-chat.com",
    features: ["30+ Languages", "AI Tutors", "Adaptive Learning", "Pronunciation Feedback", "Progress Tracking", "Cultural Context"],
  },
  {
    slug: "content-queen",
    name: "Content Queen",
    tagline: "AI Content Management",
    description: "Intelligent content creation and management platform.",
    longDescription: [
      "Content Queen is an AI-powered content creation and management platform that streamlines the entire content workflow. From ideation to publication, it automates repetitive tasks while maintaining creative quality.",
      "The platform features AI-assisted writing, smart scheduling, multi-platform publishing, and performance analytics. Content teams can produce more content in less time without sacrificing quality.",
      "With built-in SEO optimization and audience insights, Content Queen helps businesses maximize their content ROI.",
    ],
    color: "from-pink-500 to-rose-500",
    url: "https://contentqueen.com.tr",
    features: ["AI Writing Assistant", "Smart Scheduling", "Multi-platform", "SEO Optimization", "Analytics Dashboard", "Team Collaboration"],
  },
  {
    slug: "scoorpe",
    name: "Scoorpe",
    tagline: "Smart Analytics",
    description: "AI-driven analytics and scoring platform.",
    longDescription: [
      "Scoorpe transforms raw data into actionable insights using advanced AI analytics. The platform provides intelligent scoring, trend analysis, and predictive modeling for businesses and organizations.",
      "With customizable dashboards and automated reporting, Scoorpe makes data-driven decision making accessible to teams of all sizes. No data science expertise required.",
      "From customer behavior analysis to market trend prediction, Scoorpe empowers businesses to stay ahead of the competition.",
    ],
    color: "from-purple-500 to-violet-500",
    url: "https://scoorpe.com",
    features: ["AI Analytics", "Predictive Modeling", "Custom Dashboards", "Automated Reports", "Trend Analysis", "Data Visualization"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
