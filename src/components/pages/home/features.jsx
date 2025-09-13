import { Bot, ChartNoAxesColumn, Globe, Lock, Plug } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

export function Features() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Everything you need in one platform
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            ECOD combines powerful AI chatbots with comprehensive WhatsApp
            management tools to transform your customer communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-slate-200 dark:border-slate-700 hover:border-blue-500/30 dark:hover:border-blue-400/30"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                {feature.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features data
const features = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Automate customer support & sales with intelligent chat agents.",
    details:
      "Our AI understands context, learns from interactions, and provides human-like responses 24/7.",
  },
  {
    icon: IoLogoWhatsapp,
    title: "WhatsApp CMS",
    description: "Manage content & conversations across WhatsApp seamlessly.",
    details:
      "Schedule broadcasts, create quick replies, and manage multiple numbers from one dashboard.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Analytics",
    description:
      "Track engagement & optimize performance with real-time insights.",
    details:
      "Measure response times, conversation quality, and customer satisfaction with detailed reports.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect with your favorite tools and services.",
    details:
      "Seamless integration with CRM systems, helpdesk software, and marketing automation platforms.",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Reach customers in their preferred language.",
    details:
      "Support for 20+ languages with accurate translation and culturally appropriate responses.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Enterprise-grade security for your data.",
    details:
      "End-to-end encryption, GDPR compliance, and regular security audits to keep your data safe.",
  },
];
