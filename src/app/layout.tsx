import type { Metadata } from "next";
import StyledComponentsRegistry from "@/app/lib/registry";
import Script from "next/script";
import { montserrat } from "@/app/genericComponents/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Join HackUPC team",
  description: "Hackers@UPC organizers recruiting page",
  authors: { name: "Hackers@UPC", url: "https://hackersatupc.org/" },
  keywords: [
    "Hackathon, Hacker, Student, University, Collage, Programming, Technology, UPC, Barcelona, Spain",
  ],
  twitter: {
    site: "@hackersUPC",
    card: "summary_large_image",
    creator: "@hackersUPC",
    title: "Join Hackers@UPC team",
    description:
      "Be part of Hackers@UPC organizer team, we organize the biggest student hackathon in Europe",
    images: {
      url: "https://recruiting.hackupc.com/ogimage.png",
      secureUrl: "https://recruiting.hackupc.com/ogimage.png",
      alt: "HackUPC 2024 | May 3-5 | Student hackathon in Barcelona",
    },
  },
  openGraph: {
    title: "Join HackUPC team",
    type: "website",
    siteName: "recruiting HackersUPC",
    locale: "en_GB",
    description: "Be part of Hackers@UPC organizer team",
    url: "https://recruiting.hackupc.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={montserrat.className}>{children}</body>
      </StyledComponentsRegistry>
      <Script async src="https://easter-egg.hackupc.com/index.js"></Script>
    </html>
  );
}
