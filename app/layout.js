import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next + MongoDB + Hélio Sal",
  description: "Generated by Hélio Sal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto">
          <Navbar />
          <div className="mt-8">
            {children}
          </div>
          
        </div>
        
      </body>
    </html>
  );
}
