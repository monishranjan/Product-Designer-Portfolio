import Footer from "@/components/Footer";
import "./globals.css";
import FloatingMenu from "@/components/FloatingMenu"

export const metadata = {
  title: "Monish Ranjan - Product Designer",
  description: "A simple and minimalist product design/ui-ux designer/developer portfolio website.",
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-black font-generalsans">
        {children}
        <FloatingMenu />
        <Footer />
      </body>
    </html>
  )
}