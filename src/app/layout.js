import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/handleContent";
import MainLayout from "@/components/layout/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ECODrIx SaaS Platform – AI Chatbots & WhatsApp CMS",
  description:
    "All-in-one SaaS platform to manage AI chatbots, WhatsApp CMS, and automation tools. Connect, engage, and grow your business effortlessly.",
  keywords: [
    "SaaS platform",
    "AI chatbot",
    "WhatsApp CMS",
    "automation tools",
    "business growth",
    "marketing automation",
    "customer engagement",
  ],
  authors: [{ name: "ECODrIx" }],
  openGraph: {
    title: "ECODrIx SaaS – AI Chatbots & WhatsApp CMS",
    description:
      "Automate customer engagement with AI chatbots and manage content with WhatsApp CMS in one powerful SaaS platform.",
    url: "https://ecodrix.com",
    siteName: "ECODrIx SaaS",
    images: [
      {
        url: "https://ecodrix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ECODrIx SaaS Landing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECODrIx SaaS – AI Chatbots & WhatsApp CMS",
    description:
      "AI-powered SaaS platform to streamline chatbots, WhatsApp CMS, and automation for businesses.",
    images: ["https://ecodrix.com/og-image.png"],
    creator: "@your_twitter",
  },
  metadataBase: new URL("https://ecodrix.com"),
  alternates: {
    canonical: "https://ecodrix.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <script src="https://server.fillout.com/embed/v1/" async />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalProvider>
          <MainLayout>{children}</MainLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
