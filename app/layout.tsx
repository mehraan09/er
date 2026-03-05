import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "A Special Surprise For You 💕",
  description: "A romantic birthday surprise made with love",

  openGraph: {
    title: "Ertiba & Akash",
    description: "A romantic birthday surprise made with love 💕",
    url: "https://ertibakash.vercel.app",
    siteName: "Birthday Surprise",
    images: [
      {
        url: "/img5.jpg",   // should be 1200x630
        width: 1200,
        height: 630,
        alt: "Ertiba & Akash",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "A Special Surprise For You 💕",
    description: "A romantic birthday surprise made with love",
    images: ["/img5.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#fdf8f2", overflowX: "hidden" }} className={`${cormorant.variable} font-romantic`}>
        {children}
      </body>
    </html>
  );
}
