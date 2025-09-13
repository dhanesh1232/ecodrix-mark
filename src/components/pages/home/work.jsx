"use client";

import { UserPlus, Bot, FileText, Rocket, BarChart3 } from "lucide-react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { useGlobal } from "@/context/handleContent";

export function Work() {
  const { setIsFilloutOpen } = useGlobal();
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isLarge = useMediaQuery("(max-width:1024px)");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const cardWidth = isLarge ? 320 : 320 + 24;
  const totalCards = isMobile
    ? workData.length + 4
    : isLarge
    ? workData.length + 3
    : workData.length + 2;
  const maxScrollX = (totalCards - 1) * cardWidth - 320;

  // Transform scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${(workData.length + 3) * 100}vh` }}
    >
      <div className="py-12 sticky w-full h-screen top-0 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollContainerRef}
          style={{ x }}
          className="w-auto mx-auto px-4 h-full flex flex-row"
        >
          <div className="w-full md:max-w-lg lg:max-w-xl h-full flex items-center justify-center flex-shrink-0">
            <div className="w-full mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20 mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-xs lg:text-sm font-medium text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                    Our Process
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  How{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                    ECOD
                  </span>{" "}
                  Works
                </h2>

                <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                  Get started in minutes with our AI Agent & WhatsApp CMS
                  platform — designed for businesses of all sizes to transform
                  their customer communication.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 flex items-center z-20">
            <motion.div className="flex space-x-6 min-w-max">
              {workData.map((each, index) => {
                const Icon = each.icon;
                return (
                  <motion.div
                    key={each.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-72 md:w-80 flex-shrink-0 p-5 lg:p-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition duration-300 text-left group"
                  >
                    {/* Icon */}
                    <div className="mr-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">
                      {each.title}
                    </h3>

                    {/* Body */}
                    <p className="text-slate-600 text-sm md:text-base dark:text-slate-400 mb-4">
                      {each.body}
                    </p>

                    {/* Details list */}
                    <ul className="text-xs md:text-sm text-slate-500 dark:text-slate-400 space-y-1">
                      {each.details.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}

              {/* Final CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: workData.length * 0.1 }}
                className="w-72 lg:w-80 flex-shrink-0 p-4 lg:p-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition duration-300 text-center flex flex-col justify-center"
              >
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-600 text-sm md:text-base dark:text-slate-400 mb-6">
                  Join thousands of businesses using ECOD to transform their
                  customer communication.
                </p>
                <button
                  type="button"
                  onClick={() => setIsFilloutOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mx-auto"
                >
                  Contact Sales
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const workData = [
  {
    id: "1",
    title: "Sign Up in Seconds",
    icon: UserPlus,
    body: `Create your ECOD account instantly and link your WhatsApp Business API in just a few clicks. No complex setup, no technical headaches — just a smooth onboarding.`,
    details: [
      "Secure and fast account creation",
      "WhatsApp Business API integration",
      "Step-by-step guided setup",
    ],
  },
  {
    id: "2",
    title: "Customize Your Chatbot",
    icon: Bot,
    body: `Build a chatbot that reflects your brand using our intuitive drag-and-drop editor. Add FAQs, smart replies, and personalized flows effortlessly.`,
    details: [
      "Drag-and-drop conversation editor",
      "Custom branding and personality",
      "Multi-language support",
    ],
  },
  {
    id: "3",
    title: "Manage with WhatsApp CMS",
    icon: FileText,
    body: `Easily publish blogs, update products, or share new announcements directly from WhatsApp — without ever logging into a dashboard.`,
    details: [
      "Content publishing via WhatsApp",
      "Product and blog management",
      "Instant updates without login",
    ],
  },
  {
    id: "4",
    title: "Automate & Run Campaigns",
    icon: Rocket,
    body: `Run drip campaigns, broadcast updates, and set up automated workflows. Keep customers engaged with AI-powered messaging around the clock.`,
    details: [
      "Automated drip campaigns",
      "24/7 customer engagement",
      "Smart AI-powered workflows",
    ],
  },
  {
    id: "5",
    title: "Go Live & Analyze",
    icon: BarChart3,
    body: `Launch your chatbot with confidence and monitor performance through advanced analytics. Measure engagement, conversions, and optimize strategies in real-time.`,
    details: [
      "Real-time analytics dashboard",
      "Engagement and conversion tracking",
      "Optimization recommendations",
    ],
  },
];
