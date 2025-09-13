"use client";

import {
  ShoppingCart,
  PhoneCall,
  Megaphone,
  GraduationCap,
  Building2,
  Globe,
  Bot,
  Database,
  ArrowRight,
  Sparkles,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function UseCases() {
  const useCases = [
    {
      id: 1,
      title: "E-commerce & Retail",
      description:
        "Automate customer support, recover abandoned carts, provide instant order updates, and drive sales through personalized WhatsApp conversations. Increase conversion rates by 40% with AI-powered shopping assistants.",
      icon: <ShoppingCart className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Cart Recovery",
        "Order Updates",
        "24/7 Support",
        "Personalized Recommendations",
      ],
      stats: "40% increase in conversion rates",
      color: "blue",
    },
    {
      id: 2,
      title: "Sales Teams & CRM",
      description:
        "Engage leads instantly, qualify prospects with AI chat, schedule appointments automatically, and close deals faster with personalized follow-ups. Reduce response time from hours to seconds.",
      icon: <PhoneCall className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Lead Qualification",
        "Instant Engagement",
        "Appointment Scheduling",
        "CRM Integration",
      ],
      stats: "60% faster lead response time",
      color: "green",
    },
    {
      id: 3,
      title: "Marketing Agencies",
      description:
        "Run personalized WhatsApp campaigns at scale, track engagement in real-time, segment audiences dynamically, and boost ROI with AI-driven insights and automated A/B testing.",
      icon: <Megaphone className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Campaign Automation",
        "ROI Tracking",
        "Audience Segmentation",
        "A/B Testing",
      ],
      stats: "3x higher engagement rates",
      color: "purple",
    },
    {
      id: 4,
      title: "Education & Training",
      description:
        "Simplify student inquiries, send automated course updates, handle enrollments 24/7, provide learning support, and collect feedback through conversational AI and WhatsApp automation.",
      icon: <GraduationCap className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Student Support",
        "Course Updates",
        "Automated Enrollment",
        "Feedback Collection",
      ],
      stats: "80% reduction in administrative tasks",
      color: "orange",
    },
    {
      id: 5,
      title: "Real Estate & Property",
      description:
        "Capture property leads instantly, schedule viewings automatically, provide virtual tours, answer common questions 24/7, and nurture leads through the entire sales funnel.",
      icon: <Building2 className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Lead Capture",
        "Viewing Scheduling",
        "Virtual Tours",
        "24/7 Q&A",
      ],
      stats: "50% more qualified leads",
      color: "red",
    },
    {
      id: 6,
      title: "Global Enterprises",
      description:
        "Scale customer engagement worldwide with multilingual AI support, unified WhatsApp management across regions, compliance automation, and centralized analytics for global operations.",
      icon: <Globe className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Multilingual Support",
        "Global Scaling",
        "Compliance Automation",
        "Centralized Analytics",
      ],
      stats: "Support for 20+ languages",
      color: "indigo",
    },
    {
      id: 7,
      title: "AI Chat Agents",
      description:
        "Deploy intelligent AI-powered chat agents that handle inquiries, provide support, drive sales, and sync conversations across multiple platforms including website, WhatsApp, and social media.",
      icon: <Bot className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Conversation Handling",
        "Multi-Platform Sync",
        "Sales Automation",
        "Knowledge Base Integration",
      ],
      stats: "90% of queries resolved automatically",
      color: "teal",
    },
    {
      id: 8,
      title: "WhatsApp CMS Manager",
      description:
        "Manage your entire content ecosystem directly via WhatsApp - publish blogs, update products, manage inventory, and push notifications without ever logging into a traditional dashboard.",
      icon: <Database className="w-8 h-8" />,
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Content Publishing",
        "Product Management",
        "Inventory Updates",
        "Push Notifications",
      ],
      stats: "No login required for updates",
      color: "amber",
    },
  ];

  const getColorClasses = (color) => {
    const classes = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-700/50",
        button:
          "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-700/50",
        button:
          "text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-700/50",
        button:
          "text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300",
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-700/50",
        button:
          "text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300",
      },
      red: {
        bg: "bg-red-100 dark:bg-red-900/30",
        text: "text-red-600 dark:text-red-400",
        border: "border-red-200 dark:border-red-700/50",
        button:
          "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300",
      },
      indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900/30",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-700/50",
        button:
          "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300",
      },
      teal: {
        bg: "bg-teal-100 dark:bg-teal-900/30",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-200 dark:border-teal-700/50",
        button:
          "text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300",
      },
      amber: {
        bg: "bg-amber-100 dark:bg-amber-900/30",
        text: "text-amber-600 dark:text-amber-400",
        border: "border-amber-200 dark:border-amber-700/50",
        button:
          "text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300",
      },
    };
    return classes[color] || classes.blue;
  };

  const categories = [
    { id: "all", label: "All Industries" },
    { id: "commerce", label: "Commerce" },
    { id: "services", label: "Services" },
    { id: "education", label: "Education" },
    { id: "enterprise", label: "Enterprise" },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700/50 mb-6 hover:scale-105 transition-transform cursor-pointer">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Industry Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
            Transform Your Industry with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
              ECOD
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-12">
            From small businesses to global enterprises, ECOD helps teams
            automate conversations, improve engagement, and scale faster across
            industries with AI-powered WhatsApp solutions.
          </p>
        </motion.div>

        {/* Enhanced Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const colorClasses = getColorClasses(useCase.color);
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200 dark:border-slate-700 flex flex-col h-full transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 p-3 rounded-xl backdrop-blur-sm ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {useCase.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm flex-1">
                    {useCase.description}
                  </p>

                  {/* Enhanced Stats Badge */}
                  <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700/50 px-3 py-1.5 rounded-full mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <Zap className="w-4 h-4 text-amber-500 animate-pulse" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {useCase.stats}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {useCase.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 group/feature"
                      >
                        <ChevronRight
                          className={`w-4 h-4 ${colorClasses.text} group-hover/feature:translate-x-1 transition-transform`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced Button */}
                  <button
                    className={`inline-flex rounded-full py-2.5 px-5 items-center gap-2 text-sm font-medium ${colorClasses.bg} ${colorClasses.text} transition-all duration-300 hover:shadow-lg hover:shadow-${useCase.color}-600/20 group/btn w-full justify-center`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
