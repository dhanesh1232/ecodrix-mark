"use client";

import { useGlobal } from "@/context/handleContent";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap, Users, Shield } from "lucide-react";

export function CTA() {
  const { setIsFilloutOpen } = useGlobal();
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />

        {/* Animated circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/5 rounded-full animate-pulse delay-1000" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                Limited Time Offer
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">
                Customer Communication
              </span>
              ?
            </h2>

            {/* Description */}
            <p className="max-w-2xl mx-auto mb-10 text-lg text-blue-100 leading-relaxed">
              Join thousands of forward-thinking businesses using ECOD to
              automate conversations, engage customers 24/7, and drive
              measurable growth with AI-powered WhatsApp solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Users className="w-8 h-8 text-green-300" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">1,000+</div>
                  <div className="text-sm text-blue-100">Active Businesses</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <CheckCircle className="w-8 h-8 text-blue-300" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">93%</div>
                  <div className="text-sm text-blue-100">
                    Uptime Reliability
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Shield className="w-8 h-8 text-purple-300" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-blue-100">
                    Support & Security
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => setIsFilloutOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 flex items-center gap-2 group"
              >
                Talk to Sales
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features list */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                "Free 7-day trial",
                "No credit card required",
                "All features included",
                "Setup in 5 minutes",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-blue-100"
                >
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <div className="flex -space-x-2">
                {[
                  { letter: "K", color: "bg-blue-500", name: "Kevin" },
                  { letter: "D", color: "bg-pink-500", name: "Diana" },
                  { letter: "F", color: "bg-orange-500", name: "Frank" },
                  { letter: "P", color: "bg-purple-500", name: "Paula" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full ${user.color} border-2 border-white text-xs font-medium flex items-center justify-center transform hover:scale-110 transition-transform duration-200 cursor-pointer`}
                    title={user.name}
                  >
                    {user.letter}
                  </div>
                ))}
              </div>
              <span className="text-xs text-blue-100">
                Trusted by businesses worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
