import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Primary Metadata
  title: {
    default: "Greens Tours & Travels | Premium Cab Booking in Tamil Nadu",
    template: "%s | Greens Tours & Travels",
  },
  description:
    "Book premium cabs, SUVs, Tempo Travellers & buses for one-way & round-trip travel in Tamil Nadu. Sedan ₹15/km, Innova ₹20/km, Tempo ₹25/km. 24/7 WhatsApp booking +91 9342991455. Instant confirmation.",
  keywords: [
    "tours and travels Tamil Nadu",
    "cab booking Tamil Nadu",
    "Tempo Traveller rental",
    "Innova cab rental",
    "Sedan cab booking",
    "bus rental Tamil Nadu",
    "Urbania 16 seater",
    "one way cab booking",
    "round trip cab service",
    "wedding cab service Tamil Nadu",
    "corporate travel Tamil Nadu",
    "airport transfer Tamil Nadu",
    "intercity cab booking",
    "cheap cab rental Tamil Nadu",
    "luxury cab service Tamil Nadu",
  ],
  authors: [{ name: "Greens Tours & Travels" }],
  creator: "Greens Tours & Travels",
  publisher: "Greens Tours & Travels",
  
  // Language & Region
  language: "en-IN",
  locale: "en_IN",
  alternates: {
    canonical: "https://www.greentoursandtravels.in/",
  },
  
  // URL & Site
  metadataBase: new URL("https://www.greentoursandtravels.in"),
  website: {
    name: "Greens Tours & Travels",
    url: "https://www.greentoursandtravels.in",
  },
  
  // Organization
  organization: {
    name: "Greens Tours & Travels",
    url: "https://www.greentoursandtravels.in",
    logo: "https://www.greentoursandtravels.in/logo.png",
  },
  
  // Contact Information
  contact: {
    email: "greentoursandtravels.in@gmail.com",
    telephone: "+919342991455",
  },
  
  // Address
  address: {
    formatted: "Periyamudhaliyar Chavad, Periyamudaliyar Chavadi, Tamil Nadu 605104, India",
    organization: "Greens Tours & Travels",
    street: "Periyamudhaliyar Chavad, Periyamudaliyar Chavadi",
    city: "Periyamudaliyar Chavadi",
    region: "Tamil Nadu",
    countryCode: "IN",
    postalCode: "605104",
  },
  
  // Country
  country: "India",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": -1,
      "max-snippet": -1,
    },
  },
  
  // Verification
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Add from Google Search Console
  },
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.greentoursandtravels.in/",
    title: "Greens Tours & Travels | Premium Cab Booking in Tamil Nadu",
    description:
      "Book premium cabs, SUVs, Tempo Travellers & buses for one-way & round-trip travel in Tamil Nadu. 24/7 WhatsApp booking +91 9342991455.",
    siteName: "Greens Tours & Travels",
    images: [
      {
        url: "https://www.greentoursandtravels.in/travel-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Greens Tours & Travels - Premium Cab Booking",
      },
      {
        url: "https://www.greentoursandtravels.in/cars/sedan.webp",
        width: 800,
        height: 600,
        alt: "Sedan Cab - ₹15/km",
      },
      {
        url: "https://www.greentoursandtravels.in/cars/innova.webp",
        width: 800,
        height: 600,
        alt: "Innova Cab - ₹20/km",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Greens Tours & Travels | Premium Cab Booking",
    description:
      "Book premium cabs, SUVs, Tempo Travellers & buses. 24/7 WhatsApp +91 9342991455. Instant confirmation.",
    images: ["https://www.greentoursandtravels.in/travel-hero.jpg"],
    creator: "@greentoursin", // Add your Twitter handle
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/logo.png", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Theme Color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07040A" },
  ],
  
  // Category
  category: "travel",
};

// Additional SEO tags for better ranking
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#16a34a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://www.greentoursandtravels.in" />
        
        {/* Structured Data for Better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Greens Tours & Travels",
              description:
                "Premium cab booking service in Tamil Nadu offering Sedan, Innova, Tempo Traveller, Urbania & buses for one-way and round-trip travel.",
              url: "https://www.greentoursandtravels.in",
              telephone: "+919342991455",
              email: "greentoursandtravels.in@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Periyamudhaliyar Chavad, Periyamudaliyar Chavadi",
                addressLocality: "Periyamudaliyar Chavadi",
                addressRegion: "Tamil Nadu",
                postalCode: "605104",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "12.1234", // Add actual latitude
                longitude: "78.5678", // Add actual longitude
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              priceRange: "₹12-₹40/km",
              serviceArea: "Tamil Nadu, India",
              services: [
                "One Way Cab Booking",
                "Round Trip Cab Service",
                "Tempo Traveller Rental",
                "Innova Cab Rental",
                "Sedan Cab Booking",
                "Bus Rental Service",
                "Corporate Travel",
                "Wedding Cab Service",
                "Airport Transfer",
                "Intercity Cab Booking",
              ],
              offers: [
                {
                  "@type": "Offer",
                  name: "Sedan Cab",
                  price: "15",
                  priceCurrency: "INR",
                  unitText: "per km",
                },
                {
                  "@type": "Offer",
                  name: "Innova Cab",
                  price: "20",
                  priceCurrency: "INR",
                  unitText: "per km",
                },
                {
                  "@type": "Offer",
                  name: "Tempo Traveller",
                  price: "25",
                  priceCurrency: "INR",
                  unitText: "per km",
                },
                {
                  "@type": "Offer",
                  name: "Urbania 16 Seater",
                  price: "38",
                  priceCurrency: "INR",
                  unitText: "per km",
                },
              ],
            }),
          }}
        />
        
        {/* Facebook Page Meta */}
        <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
        
        {/* Additional SEO Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Greens Tours" />
        <meta name="application-name" content="Greens Tours & Travels" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Social Media Profiles */}
        <link rel="me" href="https://instagram.com/greentoursin" />
        <link rel="me" href="https://facebook.com/greentoursin" />
        <link rel="me" href="https://twitter.com/greentoursin" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ContactButton/>
        <Footer />
      </body>
    </html>
  );
}