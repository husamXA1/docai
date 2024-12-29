import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "DocAI",
  description: "A platform to improve healthcare literacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
