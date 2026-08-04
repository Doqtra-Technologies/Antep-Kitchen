import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRestoration from "@/components/ScrollRestoration";

export const metadata: Metadata = {
  title: "Where Turkish tradition meets modern dining",
  description: "Authentic flavours, handcrafted dishes and an atmosphere designed to bring people together.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Where Turkish tradition meets modern dining",
    description: "Authentic flavours, handcrafted dishes and an atmosphere designed to bring people together.",
    images: ["/anteplogo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Where Turkish tradition meets modern dining",
    description: "Authentic flavours, handcrafted dishes and an atmosphere designed to bring people together.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ScrollRestoration />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
