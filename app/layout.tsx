import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The New Simulation Ministry",
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
