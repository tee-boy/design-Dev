import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // choose what you need
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Jerry Portfolio",
  description: "Jeremiah's Portfolio Website",
  icons: {
    icon: "/portfoliologo.png", 
    apple: "/portfoliologo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}