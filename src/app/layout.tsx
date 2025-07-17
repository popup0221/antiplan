import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { HeaderProvider } from "@/components/layout/contexts/HeaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antiplan",
  description: "Whisky recommendation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <HeaderProvider>
          <div className="font-sans min-h-screen min-w-screen">
            <Header />
            <main className="p-4 w-full h-full">
              {children}
            </main>
          </div>
        </HeaderProvider>
      </body>
    </html>
  );
}
