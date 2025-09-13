"use client";

import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Customer Support in 2024",
      excerpt:
        "Discover how AI-powered conversations are transforming customer service with personalized, 24/7 support that reduces costs and increases satisfaction.",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "AI Technology",
      readTime: "6 min read",
      author: "Sarah Chen",
      date: "March 15, 2024",
      url: "/blog/how-ai-is-changing-customer-support",
    },
    {
      id: 2,
      title: "Scaling Your Business with Smart Automation Strategies",
      excerpt:
        "Learn practical tips to grow faster with less effort by implementing intelligent automation that handles repetitive tasks and frees up your team.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Business Growth",
      readTime: "8 min read",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      url: "/blog/scaling-your-business-with-automation",
    },
    {
      id: 3,
      title: "WhatsApp CMS: Best Practices for Maximum Engagement",
      excerpt:
        "Maximize engagement on the world's biggest messaging app with these proven strategies for content management and customer communication.",
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "WhatsApp Marketing",
      readTime: "5 min read",
      author: "Emily Watson",
      date: "March 8, 2024",
      url: "/blog/whatsapp-cms-best-practices",
    },
    {
      id: 4,
      title: "The Future of Conversational Commerce: AI + WhatsApp",
      excerpt:
        "Explore how the combination of AI chatbots and WhatsApp is creating new opportunities for sales and customer engagement in the conversational commerce era.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "E-commerce",
      readTime: "7 min read",
      author: "David Kim",
      date: "March 5, 2024",
      url: "/blog/future-conversational-commerce",
    },
    {
      id: 5,
      title: "Building Customer Loyalty Through Personalized Messaging",
      excerpt:
        "Learn how personalized WhatsApp messages can increase customer retention and build brand loyalty in an increasingly competitive market.",
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Customer Engagement",
      readTime: "5 min read",
      author: "Jessica Taylor",
      date: "March 2, 2024",
      url: "/blog/building-customer-loyalty",
    },
    {
      id: 6,
      title: "Multilingual Chatbots: Breaking Language Barriers in Support",
      excerpt:
        "Discover how AI-powered multilingual chatbots are helping businesses provide support in multiple languages without hiring additional staff.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Global Business",
      readTime: "9 min read",
      author: "Alexandre Dubois",
      date: "February 28, 2024",
      url: "/blog/multilingual-chatbots",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700/50 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Latest Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
            Latest from our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Blog
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
            Stay updated with the latest trends in AI, customer engagement,
            WhatsApp marketing, and business automation strategies from industry
            experts.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200 dark:border-slate-700"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
