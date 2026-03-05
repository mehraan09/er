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
    title: "Ertiba Akash",
    url: "https://ertiba.vercel.app",
    images: [{ url: "/img5.jpg", width: 600, height: 600, alt: "Er" }],
    locale: "en_US",
    type: "website",
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
