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
  metadataBase: new URL("https://moosaraheel.com"),

  title: {
    default: "Moosa Raheel | Full Stack Developer",
    template: "%s | Moosa Raheel",
  },

  description:
    "Moosa Raheel is a full stack developer and educator specializing in Next.js, MongoDB, and AI. Explore projects, blogs, and research work.",

  keywords: [
    "Moosa Raheel",
    "Full Stack Developer",
    "Next.js Developer",
    "MongoDB",
    "AI Developer",
    "Pakistan Developer",
  ],

  authors: [{ name: "Moosa Raheel" }],

  creator: "Moosa Raheel",

  openGraph: {
    title: "Moosa Raheel | Developer Portfolio",
    description: "Explore projects, blogs, and AI work by Moosa Raheel.",
    url: "https://moosaraheel.com",
    siteName: "Moosa Raheel",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Moosa Raheel Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Moosa Raheel",
    description: "Full Stack Developer & AI Enthusiast",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <Script strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Moosa Raheel",
            url: "https://moosaraheel.com",
            sameAs: [
              "https://www.instagram.com/moosa_thefinest",
              "https://www.linkedin.com/in/moosa-raheel-703400347/",
            ],
            jobTitle: "Full Stack Developer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressCountry: "Pakistan",
            },
          })}
        </Script>
      </body>
    </html>
  );
}
