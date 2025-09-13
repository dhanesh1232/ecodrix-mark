"use client";

import {
  Bot,
  Brain,
  Workflow,
  MessageSquare,
  Gauge,
  Layers,
  Zap,
  TrendingUp,
  FileText,
  Upload,
  Share2,
  Database,
  BarChart2,
  Settings,
} from "lucide-react";

export default function UnifiedAIFeatures() {
  const features = [
    {
      icon: <Bot className="w-7 h-7 text-emerald-600" />,
      title: "AI Chat Agent",
      desc: "Engage prospects 24/7 with intelligent, human-like conversations that drive inquiries, leads, and conversions automatically.",
    },
    {
      icon: <Brain className="w-7 h-7 text-emerald-600" />,
      title: "Contextual Understanding",
      desc: "Understands customer intent and context to deliver personalized and accurate responses across every interaction.",
    },
    {
      icon: <Workflow className="w-7 h-7 text-emerald-600" />,
      title: "Automated Workflows",
      desc: "Qualify leads, schedule meetings, answer FAQs, and follow up — all powered by AI-driven automation.",
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-blue-600" />,
      title: "WhatsApp CMS Manager",
      desc: "Manage blogs, product catalogs, and site content directly via WhatsApp — no login or dashboard required.",
    },
    {
      icon: <FileText className="w-7 h-7 text-blue-600" />,
      title: "Direct Publishing",
      desc: "Publish website content instantly from WhatsApp messages, making updates effortless and fast.",
    },
    {
      icon: <Upload className="w-7 h-7 text-blue-600" />,
      title: "Media Uploads",
      desc: "Upload images, videos, and files directly to your site via WhatsApp, simplifying content management.",
    },
    {
      icon: <Share2 className="w-7 h-7 text-blue-600" />,
      title: "Multi-Channel Sync",
      desc: "Automatically sync blogs, products, and updates across your website, WhatsApp, and social channels.",
    },
    {
      icon: <Database className="w-7 h-7 text-blue-600" />,
      title: "Product Catalog Management",
      desc: "Update product listings, descriptions, and pricing instantly through WhatsApp with real-time site sync.",
    },
    {
      icon: <Gauge className="w-7 h-7 text-emerald-600" />,
      title: "Real-Time Insights",
      desc: "Monitor conversations, customer satisfaction, and conversion performance with detailed analytics.",
    },
    {
      icon: <Layers className="w-7 h-7 text-emerald-600" />,
      title: "Unified Inbox",
      desc: "Centralize all conversations from WhatsApp, web chat, and social channels into one smart inbox.",
    },
    {
      icon: <BarChart2 className="w-7 h-7 text-blue-600" />,
      title: "Content Analytics",
      desc: "Track engagement and performance of published blogs, product updates, and campaigns directly inside the CMS.",
    },
    {
      icon: <Zap className="w-7 h-7 text-emerald-600" />,
      title: "Instant Setup",
      desc: "Get started in minutes — connect your WhatsApp and website without technical complexity.",
    },
    {
      icon: <Settings className="w-7 h-7 text-blue-600" />,
      title: "Automation Ready",
      desc: "Automate recurring updates, newsletters, and promotions straight from WhatsApp.",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-emerald-600" />,
      title: "Growth-Driven AI",
      desc: "Scale faster with automation, lead nurturing, and customer engagement powered by AI intelligence.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Our Top <span className="text-emerald-600">AI Features</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          A unified suite of AI-powered tools designed to handle everything from
          conversations to content management. Our AI Chat Agent and WhatsApp
          CMS Manager work together to automate, engage, and grow your business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 text-left hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full w-fit mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
