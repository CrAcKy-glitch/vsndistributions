import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VSN Group - Premium Electronics & Appliances Distributor",
  description:
    "Trusted electronics and home appliances distributor across Middle East, Africa, and CIS regions.",
  keywords: "electronics distributor, home appliances, VSN Group, Dubai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
