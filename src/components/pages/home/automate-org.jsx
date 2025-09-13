"use client";

import {
  Megaphone,
  Users,
  Headphones,
  FileText,
  ShoppingCart,
  BarChart,
  Layers,
  Zap,
} from "lucide-react";

export default function AutomateOrganization() {
  const areas = [
    {
      icon: <Megaphone className="w-9 h-9 text-emerald-600" />,
      title: "Sales & Marketing",
      desc: "Automate lead follow-ups, drip campaigns, and WhatsApp broadcasts while syncing CRM data for faster conversions.",
    },
    {
      icon: <Users className="w-9 h-9 text-emerald-600" />,
      title: "Customer Engagement",
      desc: "Deliver instant, AI-powered support and personalized interactions across WhatsApp, web chat, and social channels.",
    },
    {
      icon: <Headphones className="w-9 h-9 text-emerald-600" />,
      title: "Service & Support",
      desc: "AI agents handle FAQs, ticket assignment, and feedback collection 24/7 to reduce support costs and response times.",
    },
    {
      icon: <FileText className="w-9 h-9 text-blue-600" />,
      title: "Content Management",
      desc: "Publish blogs, update pages, and upload media directly via WhatsApp with AI-driven CMS automation.",
    },
    {
      icon: <ShoppingCart className="w-9 h-9 text-blue-600" />,
      title: "E-Commerce",
      desc: "Manage product catalogs, pricing, and inventory with WhatsApp commands that sync instantly with your website.",
    },
    {
      icon: <BarChart className="w-9 h-9 text-emerald-600" />,
      title: "Analytics & Insights",
      desc: "Track growth, engagement, and performance metrics with AI-powered reporting dashboards in real-time.",
    },
    {
      icon: <Layers className="w-9 h-9 text-emerald-600" />,
      title: "Operations",
      desc: "Unify tasks, automate workflows, and streamline multi-channel management into one intelligent system.",
    },
    {
      icon: <Zap className="w-9 h-9 text-emerald-600" />,
      title: "Scalable Automation",
      desc: "From small teams to enterprises, scale processes effortlessly with AI-driven workflows and integrations.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Automate Your Entire Organization{" "}
          <span className="text-emerald-600">Effortlessly</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          From conversations to content — our AI Chat Agent and WhatsApp CMS
          Manager automate every critical part of your business so you can focus
          on growth, not tasks.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {areas.map((a, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-4 bg-gray-100 dark:bg-slate-700 rounded-full">
                {a.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {a.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
