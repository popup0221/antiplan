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
    <html lang="kr">
      <body className={`${geistSans.variable} ${geistMono.variable} h-[100dvh] w-screen antialiased bg-black text-white`}>
        <HeaderProvider>
          <div className="font-sans w-full h-full">
            <Header />
            <main className="p-4 pt-12 w-full h-full">
              {children}
            </main>
          </div>
        </HeaderProvider>
      </body>
    </html>
  );
}