import type { Metadata } from "next";
import { Arima, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";

const inter = Arima({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Movies Hub - Watch Movies Online for Free",
  description:
    "Discover and watch free movies online. Enjoy a wide selection of movies without any subscription fees. Updated daily with new releases and classic films.",
  keywords:
    "free movies, watch movies online, movies streaming, free online movies, latest movies, classic movies",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "Free Movies Hub - Watch Movies Online for Free",
    description:
      "Discover and watch free movies online. Enjoy a wide selection of movies without any subscription fees. Updated daily with new releases and classic films.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Free Movies Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Free Movies Hub - Watch Movies Online for Free",
    description:
      "Discover and watch free movies online. Enjoy a wide selection of movies without any subscription fees. Updated daily with new releases and classic films.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Free Movies Hub",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
