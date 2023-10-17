import Footer from "@/components/Footer";
import "./globals.css";
// children is page.jsx

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}

        {/* Footer */}

        <Footer />
      </body>
    </html>
  );
}
