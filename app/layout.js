import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "SIAR RUN",
  description: "Run anywhere, anytime, and feel the spirit of a limitless community. Let’s move together and cross the finish line with enthusiasm!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0E0E]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
