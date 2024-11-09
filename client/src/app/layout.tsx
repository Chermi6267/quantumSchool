import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const comfortaa = Comfortaa({
  subsets: ["cyrillic-ext", "cyrillic"],
  weight: "400",
  variable: "--comfortaa_font",
});

export const metadata: Metadata = {
  title: "Quantum School",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={`${comfortaa.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
