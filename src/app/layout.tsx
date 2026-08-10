import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: {
    default: "ContentFlowAI - Smart AI Content Generation & Workflow",
    template: "%s | ContentFlowAI",
  },
  description: "Automate your content creation pipeline with ContentFlowAI. Generate high-quality blogs, social media posts, and marketing copy seamlessly using advanced AI.",
  keywords: [
    "AI content generator",
    "content creation workflow",
    "automated copywriting",
    "AI blogging tool",
    "ContentFlowAI",
  ],
  authors: [{ name: "ContentFlowAI Team" }],
  openGraph: {
    title: "ContentFlowAI - Smart AI Content Generation & Workflow",
    description: "Streamline your content workflow with AI. Generate, edit, and publish high-quality content effortlessly.",
    url: "https://yourdomain.com", // Apnar domain link boshaben
    siteName: "ContentFlowAI",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // OG Image link
        width: 1200,
        height: 630,
        alt: "ContentFlowAI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContentFlowAI - Smart AI Content Generation & Workflow",
    description: "Automate your content creation pipeline with ContentFlowAI.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
