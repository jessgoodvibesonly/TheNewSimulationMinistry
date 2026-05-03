import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASPIREai | Human-led AI for modern companies",
  description:
    "ASPIREai helps people and technology work together to build better businesses with clarity, support, and confidence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
