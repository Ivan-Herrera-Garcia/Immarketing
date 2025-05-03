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

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning="true" data-lt-installed="true">
      <head>
        <title>Immarketing | Marketing, TI, Legal, Finanzas y Diseño</title>
        <meta
          name="description"
          content="Servicios de marketing, TI, legal, finanzas, diseño y audiovisual. En Imkt potenciamos tu empresa con soluciones personalizadas desde Torreón, México."
        />
        <link rel="icon" href="/logo_svg.svg" />
        <link rel="apple-touch-icon" href="https://immarketing.netlify.app/preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="Immarketing | Marketing, TI, Legal, Finanzas y Diseño" />
        <meta
          property="og:description"
          content="Servicios de marketing, TI, legal, finanzas, diseño y audiovisual. En Imkt potenciamos tu empresa con soluciones personalizadas desde Torreón, México."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://immarketing.netlify.app/" />
        <meta property="og:image" content="https://immarketing.netlify.app/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Immarketing | Marketing, TI, Legal, Finanzas y Diseño" />
        <meta
          name="twitter:description"
          content="Servicios de marketing, TI, legal, finanzas, diseño y audiovisual. En Imkt potenciamos tu empresa con soluciones personalizadas desde Torreón, México."
        />
        <meta name="twitter:image" content="https://immarketing.netlify.app/preview.jpg" />
        <meta name="twitter:image:alt" content="Imkt Logo" />
        <meta name="twitter:site" content="@imkt" />
        <meta name="twitter:creator" content="@imkt" />

        <meta name="keywords" content="marketing, diseño, sitios web, 
        legal, finanzas, audiovisual, redes sociales" />

      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
