import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infinite Realms — Daily Multiverse Challenge",
  description: "Seven questions. One multiverse. Where will your knowledge take you?",
  icons: { icon: [{ url: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_lantern.svg", type: "image/jpeg" }], apple: [{ url: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_lantern.svg" }] },
  openGraph: { title: "Infinite Realms", description: "A daily superhero multiverse dive.", images: ["https://commons.wikimedia.org/wiki/Special:FilePath/Green_lantern.svg"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
