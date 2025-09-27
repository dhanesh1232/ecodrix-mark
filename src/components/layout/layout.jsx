"use client";

import { useGlobal } from "@/context/handleContent";
import { FilloutSliderEmbed } from "@fillout/react";
import Header from "./header";
import * as React from "react";
import AITypingBubble from "../loading";
import { WhatsAppCTA } from "./float-cta";
import { BotWidget } from "./bot-agent";

export default function MainLayout({ children }) {
  const { isFilloutOpen, setIsFilloutOpen } = useGlobal();
  const [isMount, setIsMount] = React.useState(false);

  React.useEffect(() => {
    setIsMount(true);
    return () => {
      setIsMount(false);
    };
  }, []);

  if (!isMount) {
    return <AITypingBubble />;
  }

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-900">{children}</main>
      {/* The Fillout Slider Embed */}
      {isFilloutOpen && (
        <FilloutSliderEmbed
          filloutId="wTJQkjosnQus"
          sliderDirection="right"
          inheritParameters
          isOpen={isFilloutOpen}
          onClose={() => setIsFilloutOpen(false)}
        />
      )}
      <WhatsAppCTA />
      <BotWidget />
    </>
  );
}
