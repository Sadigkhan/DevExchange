import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "DevExchange",
  description:
    "Təcrübəli proqramçıların və yeni başlayanların bir araya gəldiyi, suallarınızı verə və cavabları paylaşa biləcəyiniz bir platforma! Proqramlaşdırma suallarınıza cavab tapın, biliyi paylaşın və dünya üzrə inkişaf etdiricilər ilə əməkdaşlıq edin. Web inkişafı, mobil tətbiq inkişafı, alqoritmlər, verilənlər strukturları və daha çox mövzularda dərinləşin. Həmçinin, bu platforma, proqramlaşdırma biliklərinizi inkişaf etdirmək və problemləri sürətli həll etmək üçün ideal yerdir.",
    icons:{
      icon:"./imagessite-logo.svg",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
