import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "valentine.dev - Coming Soon",
  description:
    "Valentine.dev - A developer's portfolio and showcase. Coming soon with innovative projects and cutting-edge solutions.",
  keywords: ["developer", "portfolio", "web development", "valentine", "coding", "programming"],
  authors: [{ name: "Valentine" }],
  creator: "Valentine",
  publisher: "valentine.dev",
  robots: "index, follow",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valentine.dev",
    title: "valentine.dev - Coming Soon",
    description:
      "Valentine.dev - A developer's portfolio and showcase. Coming soon with innovative projects and cutting-edge solutions.",
    siteName: "valentine.dev",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "valentine.dev logo",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "valentine.dev - Coming Soon",
    description:
      "Valentine.dev - A developer's portfolio and showcase. Coming soon with innovative projects and cutting-edge solutions.",
    images: ["/icon-512.png"],
    creator: "@valentine",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon-512.png",
        color: "#6D5DD3",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Theme
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6D5DD3" },
    { media: "(prefers-color-scheme: dark)", color: "#6D5DD3" },
  ],

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional favicon formats for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/icon-512.png" color="#6D5DD3" />

        {/* Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#6D5DD3" />
        <meta name="msapplication-TileImage" content="/icon-192.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#6D5DD3" />
        <meta name="msapplication-navbutton-color" content="#6D5DD3" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preload critical resources */}
        <link rel="preload" href="/icon-192.png" as="image" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
