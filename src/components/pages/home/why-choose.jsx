"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import {
  Bot,
  MessageCircle,
  LayoutDashboard,
  TrendingUp,
  Zap,
  Shield,
  Users,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-300">{`${label}`}</p>
          <p className="font-semibold text-emerald-600 dark:text-emerald-400">
            {`Growth: +${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-700/50 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              Competitive Edge
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Our Platform
            </span>
            ?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms customer
            communication and drives measurable business growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl dark:shadow-slate-900/50 p-4 md:p-8 grid md:grid-cols-2 gap-10 items-center border border-slate-100 dark:border-slate-700/50">
          {/* Features Left */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-2.5 md:p-5 rounded-xl bg-slate-50 dark:bg-slate-700/30 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 group border border-slate-100 dark:border-slate-700/30"
              >
                <div className="flex-shrink-0 p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Right */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 p-3 md:p-6 rounded-xl border border-emerald-100 dark:border-slate-700/50">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Performance Growth
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Average growth metrics from businesses using our platform
              </p>
            </div>

            {isMounted && (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e2e8f0"
                    strokeOpacity={0.3}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <defs>
                    <linearGradient
                      id="growthGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="growth"
                    stroke="url(#growthGradient)"
                    fill="url(#growthGradient)"
                    strokeWidth={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="growth"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{
                      r: 4,
                      fill: "#10b981",
                      strokeWidth: 2,
                      stroke: "#fff",
                    }}
                    activeDot={{
                      r: 6,
                      fill: "#10b981",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}

            <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-slate-700">
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  +350% Average Growth
                </span>{" "}
                reported by businesses using AI-powered automation & WhatsApp
                CMS.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-slate-900/30 border border-slate-100 dark:border-slate-700/30"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <Bot className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    title: "AI Chat Agent",
    desc: "Automates inquiries, sales, and support with human-like conversations that learn and improve over time.",
  },
  {
    icon: (
      <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    ),
    title: "WhatsApp CMS Manager",
    desc: "Publish and manage blogs, products, and updates directly via WhatsApp without needing to login to a dashboard.",
  },
  {
    icon: (
      <LayoutDashboard className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    ),
    title: "Unified Dashboard",
    desc: "Track leads, campaigns, and customer conversations across all channels in one intuitive interface.",
  },
  {
    icon: (
      <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    ),
    title: "Business Growth",
    desc: "Scale faster with automation, detailed analytics, and multi-channel engagement strategies.",
  },
];

const stats = [
  {
    icon: <Zap className="w-6 h-6" />,
    value: "5min",
    label: "Average Setup Time",
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "1K+",
    label: "Active Businesses",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: "20+",
    label: "Languages Supported",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    value: "99.9%",
    label: "Uptime Reliability",
  },
];

const data = [
  { name: "Week 1", growth: 20 },
  { name: "Week 2", growth: 35 },
  { name: "Week 3", growth: 40 },
  { name: "Week 4", growth: 60 },
  { name: "Week 5", growth: 75 },
  { name: "Week 6", growth: 90 },
];
