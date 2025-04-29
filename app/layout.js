import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Imkt",
  description: "Imkt te ofrece una amplia gama de servicios para tu empresa.",
  icons: {
    icon: "/logo_svg.svg", // Usa aquí un PNG si quieres usar el logo.svg convertido
  },
  openGraph: {
    title: "Imkt",
    description: "Imkt te ofrece una amplia gama de servicios para tu empresa.",
    type: "website",
    images: [
      {
        url: "/logo_svg.png", // Este debe ser tu logo convertido a PNG y con buen tamaño (ej. 1200x630)
        width: 800,
        height: 600,
        alt: "Imkt Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imkt",
    description: "Imkt te ofrece una amplia gama de servicios para tu empresa.",
    images: ["/logo_svg.png", "/logo_svg.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true" data-lt-installed="true">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
