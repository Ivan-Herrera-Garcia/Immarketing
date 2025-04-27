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
  description: "Empresa 100% Mexicana líder en su ramo.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/logo_svg.svg", // Mejor si usas un .ico o un .png pequeño aquí
  },
  openGraph: {
    title: "Imkt",
    description: "Empresa 100% Mexicana líder en su ramo.",
    type: "website",
    images: [
      {
        url: "/logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "Imkt Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imkt",
    description: "Empresa 100% Mexicana líder en su ramo.",
    images: ["/logo_svg.svg"],
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
