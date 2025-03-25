import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingSrceen from "@/components/loading screen";

export const metadata = {
  title: "Axxess Corporate",
  description: `Consultancy company with four senior 
level Consultants, covering all areas of service provision`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />  
        <RootLayoutClient>{children}</RootLayoutClient>
        <Footer />     
        {/* <LoadingSrceen />  */}
      </body>
    </html>
  );
}
