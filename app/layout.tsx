import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/main/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[REPLICA] Kalyani Content Moderation",
  description: "Task to learn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full md:max-w-64 hidden md:block md:fixed inset-y-0 z-50 ">
          <Sidebar />
        </div>
        <main className="w-full md:w-auto md:ml-64 flex-1">{children}</main>
      </body>
    </html>
  );
}
