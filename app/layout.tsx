import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infinite Realms — Daily Multiverse Challenge",
  description: "Seven questions. One multiverse. Where will your knowledge take you?",
  icons: { icon: [{ url: "https://www.toymania.com/newspics/0113_dcc_gl.jpg", type: "image/jpeg" }], apple: [{ url: "https://www.toymania.com/newspics/0113_dcc_gl.jpg" }] },
  openGraph: { title: "Infinite Realms", description: "A daily superhero multiverse dive.", images: ["https://www.toymania.com/newspics/0113_dcc_gl.jpg"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
