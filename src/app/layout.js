import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moosa Raheel | Developer Portfolio",
  description:
    "Moosa Raheel is a full-stack developer, teacher, and AI enthusiast building modern web and AI applications.",
  keywords: ["Moosa Raheel", "Developer", "Next.js", "AI", "Portfolio"],
  authors: [{ name: "Moosa Raheel" }],
  openGraph: {
    title: "Moosa Raheel",
    description: "Developer, Teacher, AI Enthusiast",
    url: "https://moosaraheel.com",
    siteName: "Moosa Raheel",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black min-h-screen text-white">
          <Navbar />
          {children}
        </div>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CR0RLYGVFX"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CR0RLYGVFX');`}
        </Script>
      </body>
    </html>
  );
}
