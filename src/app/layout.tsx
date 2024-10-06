import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wahidyan Kresna Fridayoka | Software Engineer",
  description:
    "Portfolio and CV of Wahidyan Kresna Fridayoka, a seasoned Software Engineer specializing in Frontend Engineering and Engineering Management.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" },
  ],
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "Engineering Manager",
    "React",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Wahidyan Kresna Fridayoka" }],
  creator: "Wahidyan Kresna Fridayoka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wahidyankf.com",
    siteName: "Wahidyan Kresna Fridayoka",
    title: "Wahidyan Kresna Fridayoka | Software Engineer",
    description:
      "Portfolio and CV of Wahidyan Kresna Fridayoka, a seasoned Software Engineer specializing in Frontend Engineering and Engineering Management.",
    images: [
      {
        url: "https://wahidyankf.com/og-image.jpg", // You'll need to create and host this image
        width: 1200,
        height: 630,
        alt: "Wahidyan Kresna Fridayoka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahidyan Kresna Fridayoka | Software Engineer",
    description:
      "Portfolio and CV of Wahidyan Kresna Fridayoka, a seasoned Software Engineer specializing in Frontend Engineering and Engineering Management.",
    images: ["https://wahidyankf.com/og-image.jpg"], // Same as OpenGraph image
    creator: "@wahidyankf", // Replace with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="root-layout">
        <div className="body-content">
          {children}
          <ScrollToTop />
        </div>
      </body>
      <GoogleAnalytics gaId="G-0F62KPYGM3" />
      <GoogleTagManager gtmId="GTM-0F62KPYGM3" />
    </html>
  );
}
