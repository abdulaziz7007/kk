import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meni kechir…",
  description: "Yurakdan yozilgan samimiy maktub.",
  applicationName: "Meni kechir Osiyo",
  openGraph: {
    title: "Meni kechir…",
    description: "Senga aytmoqchi bo‘lganlarim bor.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3e9d6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&family=Inter:wght@500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
