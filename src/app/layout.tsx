import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ // Define the Inter font
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Musix",
  description: "New Music app",
  icons:{
    icon:[
      {
        url:'M.png',
        
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
      <body
        className={inter.className}>
          <div className="relative w-full flex items-center justify-center">

        <Navbar />
          </div>
        {children}
      </body>
    </html>
  );
}
