import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingSrceen from "@/components/loading screen";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Axxess Corporate",
  description: `Consultancy company with four senior 
level Consultants, covering all areas of service provision`,
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
      </body>
    </html>
  );
}
