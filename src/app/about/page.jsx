"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="h-full bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Your trusted partner in innovative SaaS solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Who We Are</h2>
            <p className="text-gray-300">
              At Ecodrix, we specialize in developing cutting-edge SaaS
              solutions that empower businesses to thrive in the digital age.
              Our commitment to innovation and excellence drives us to create
              products that make a real difference.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-lg">contact@ecodrix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-lg">+91 8143963821</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-300">
                Pushing boundaries with cutting-edge solutions
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-300">Trusted by businesses worldwide</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-300">
                Enterprise-grade protection for your data
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-300">24/7 dedicated customer service</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
