import type { Metadata } from "next";
import "./globals.css";

import { Manrope } from "next/font/google";
import AppProvider from "@/components/provider/AppProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-manrope", // Custom CSS variable
});

export const metadata: Metadata = {
  title: "have lock photo",
  description: "have lock photo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
