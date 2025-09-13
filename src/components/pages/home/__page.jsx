"use client";

import { HeroSection } from "./hero";
import { Features } from "./features";
import { Work } from "./work";
import WhyChooseUs from "./why-choose";
import TopAIAgentFeatures from "./top-agents";
import AutomateOrganization from "./automate-org";
import { UseCases } from "./use-case";
import { Blog } from "./blog";
import { CTA } from "./cta";
import { Faq } from "./faq";
import { About } from "./about";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <Work />

      {/* Why customer choose us */}
      <WhyChooseUs />

      {/* ECODrIx top AI Agent features */}
      <TopAIAgentFeatures />

      {/* Automate your organization */}
      <AutomateOrganization />

      {/* Use cases (industries) */}
      <UseCases />

      {/* Blog Preview */}
      <Blog />

      {/* CTA Section */}
      <CTA />

      {/* FAQ Section */}
      <Faq />

      {/* About Preview */}
      <About />
    </>
  );
}
