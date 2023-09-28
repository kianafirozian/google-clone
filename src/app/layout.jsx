import Footer from "@/components/Footer";
import "./globals.css";
// children is page.jsx

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Footer */}

        <Footer />
      </body>
    </html>
  );
}
