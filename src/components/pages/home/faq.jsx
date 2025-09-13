"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MessageCircle,
  Clock,
  Zap,
  Users,
  Globe,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const message = encodeURIComponent(
  "Hi, I'm interested in your premium digital services. Please share more details about your exclusive offerings."
);
export function Faq() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqCategories = {
    general: {
      title: "General",
      icon: <MessageCircle className="w-5 h-5" />,
      questions: [
        {
          id: 1,
          question: "How quickly can I set up my AI chatbot?",
          answer:
            "Most customers have their first chatbot live within 30 minutes. Our intuitive interface and pre-built templates make setup quick and easy, even if you have no technical experience. We provide step-by-step guidance and 24/7 onboarding support.",
        },
        {
          id: 2,
          question: "Do I need WhatsApp Business API to use ECOD?",
          answer:
            "Yes, you'll need an approved WhatsApp Business API account. We guide you through the entire application process and handle all the technical integration on our end. Our team assists with documentation and ensures a smooth setup process.",
        },
        {
          id: 3,
          question: "What makes ECOD different from other chatbot platforms?",
          answer:
            "ECOD combines AI chatbots with WhatsApp CMS management in one platform. Unlike others, we allow content publishing directly via WhatsApp, offer multi-language support out of the box, and provide enterprise-grade security with 99.9% uptime guarantee.",
        },
      ],
    },
    pricing: {
      title: "Pricing & Plans",
      icon: <Zap className="w-5 h-5" />,
      questions: [
        {
          id: 4,
          question: "What's included in the free trial?",
          answer:
            "Our 14-day free trial includes access to all features: unlimited AI chatbots, WhatsApp CMS manager, basic analytics, and up to 500 conversations. No credit card required to get started.",
        },
        {
          id: 5,
          question: "Can I change my plan later?",
          answer:
            "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we prorate the charges so you only pay for what you use.",
        },
        {
          id: 6,
          question: "Are there any hidden fees?",
          answer:
            "No hidden fees. Our pricing is transparent with all costs included. The only additional cost would be WhatsApp Business API fees, which are billed directly by Meta based on conversation volumes.",
        },
      ],
    },
    technical: {
      title: "Technical",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          id: 7,
          question: "Can I integrate ECOD with my existing tools?",
          answer:
            "Absolutely! ECOD integrates with popular CRM systems (Salesforce, HubSpot), helpdesk software (Zendesk, Freshdesk), and marketing platforms. We also offer a comprehensive REST API for custom integrations and webhook support for real-time data sync.",
        },
        {
          id: 8,
          question: "How do you handle data security and privacy?",
          answer:
            "We take security seriously. All data is encrypted in transit and at rest, we're GDPR compliant, undergo regular security audits, and offer SOC 2 certification. Your customer data never leaves your preferred region with our multi-region deployment options.",
        },
        {
          id: 9,
          question: "What languages does your AI support?",
          answer:
            "Our AI supports 20+ languages including English, Spanish, French, German, Portuguese, Arabic, Hindi, and more. The system automatically detects language and responds appropriately, with continuous learning for dialect variations.",
        },
      ],
    },
    support: {
      title: "Support",
      icon: <Clock className="w-5 h-5" />,
      questions: [
        {
          id: 10,
          question: "What kind of support do you offer?",
          answer:
            "All plans include email support during business hours with 24-hour response time. Professional and Enterprise plans include priority support with 4-hour response times, phone support, and dedicated Slack channels. Enterprise customers get a dedicated account manager and 24/7 emergency support.",
        },
        {
          id: 11,
          question: "Do you provide training and documentation?",
          answer:
            "Yes! We provide comprehensive documentation, video tutorials, weekly webinars, and personalized training sessions. Our knowledge base includes best practices, use cases, and technical guides to help you succeed.",
        },
        {
          id: 12,
          question: "How often do you update the platform?",
          answer:
            "We release new features and improvements weekly. Major updates are rolled out monthly with detailed release notes. All customers receive automatic updates with no downtime required.",
        },
      ],
    },
  };

  return (
    <>
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-full border border-blue-200 dark:border-blue-700/50 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 dark:text-white">
              Everything You Need to Know
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto">
              Find answers to common questions about ECOD platform, features,
              pricing, and implementation. Can't find what you're looking for?
              Contact our team.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(faqCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex text-sm items-center gap-2 px-6 py-1.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-2">
            {faqCategories[activeCategory].questions.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="text-base md:text-lg  font-semibold dark:text-white flex-1">
                    {item.question}
                  </h3>
                  {openItems[item.id] ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openItems[item.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mt-16 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="w-full mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <Mail className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Still have questions?
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our support team is here to help you get the most out of ECOD.
                Get in touch with us and we'll respond within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`https://wa.me/918790063821?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on WhatsApp"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Our Team
                </Link>

                <Link
                  href="mailto:support@ecodrix.com"
                  className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300"
                >
                  Email Support
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>24h average response time</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Users className="w-4 h-4" />
                  <span>98% customer satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Globe className="w-4 h-4" />
                  <span>Global support team</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
