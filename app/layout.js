import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingSrceen from "@/components/loading screen";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title:
    "Axxess Corporate Consulting Limited – Governance, Training & Secretarial Services",
  description:
    "Axxess Corporate Consulting Limited offers professional corporate governance training, board effectiveness reviews, and company secretarial services in Zambia.",
  keywords: [
    "Corporate Governance",
    "Board Training Zambia",
    "Company Secretarial Services",
    "Board Evaluations",
    "Corporate Consulting Zambia",
    "ESG Audits",
    "Governance Training",
    "Business Registration Zambia",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Axxess Corporate Consulting Limited",
      url: "https://www.axxesscorporate.com/",
    },
  ],
  creator: "Axxess Corporate Consulting Limited",
  publisher: "Axxess Corporate Consulting Limited",
  openGraph: {
    title: "Axxess Corporate Ltd.",
    description:
      "Corporate governance and board support services for Zambian businesses.",
    url: "https://www.axxesscorporate.com",
    siteName: "Axxess",
    images: [
      {
        url: "/logos/Axxess-Corporate-Consulting-Limited-Logos-4.png",
        width: 1200,
        height: 630,
        alt: "Axxess Corporate Logo",
      },
    ],
    locale: "en_ZM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axxess Corporate Ltd.",
    description:
      "Your trusted partner in governance, secretarial support, and board effectiveness.",
    images: ["/logos/Axxess-Corporate-Consulting-Limited-Logos-4.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-3S6ETKZMJ0" />
      <body className="antialiased">
        <LoadingSrceen />
        <Navbar />
        <RootLayoutClient>{children}</RootLayoutClient>
        <Footer />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Axxess Corporate Consulting Limited",
              url: "https://www.axxesscorporate.com",
              logo: "/logos/Axxess-Corporate-Consulting-Limited-Logos-4.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "H8W4+VQ2, Lusaka",
                addressLocality: "Lusaka",
                addressCountry: "ZM",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+260977788466",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://zm.linkedin.com/company/axxess-corporate-secretaries-limited",
                "https://m.facebook.com/100075765614639",
                "https://balloinnovations.com",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
