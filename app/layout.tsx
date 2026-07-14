import "./globals.css";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Swastik Medical",
  description: "Trusted Pharmacy in Bajajnagar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Navbar />
  {children}
  <Footer />
  <FloatingWhatsApp />
</body>
    </html>
  );
}