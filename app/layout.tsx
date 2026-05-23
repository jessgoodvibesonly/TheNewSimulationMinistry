import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE NEW SIMULATION MINISTRY",
  description:
    "A sacred, modern spiritual community exploring awareness, love, creativity, and conscious living."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
