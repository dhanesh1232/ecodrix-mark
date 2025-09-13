"use client";

import { useGlobal } from "@/context/handleContent";
import { FilloutSliderEmbed } from "@fillout/react";
import Header from "./header";

export default function MainLayout({ children }) {
  const { isFilloutOpen, setIsFilloutOpen } = useGlobal();
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
    </>
  );
}
