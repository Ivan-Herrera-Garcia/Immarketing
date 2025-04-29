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

const metadata = {
  title: "Imkt | Servicios para tu empresa",
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
      <head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_svg.png" />
        <link rel="apple-touch-icon" href="/logo_svg.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta property="twitter:description" content={metadata.twitter.description} />
        <meta property="twitter:image" content={metadata.twitter.images[0]} />
        <meta property="twitter:image:alt" content="Imkt Logo" />
        <meta property="twitter:image:width" content="800" />
        <meta property="twitter:image:height" content="600" />
        <meta property="twitter:site" content="@imkt" />
        <meta property="twitter:creator" content="@imkt" />
        <meta property="og:site_name" content="Imkt" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:url" content="https://imkt.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Imkt Logo" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:secure_url" content="https://imkt.com/logo_svg.png" />
        <meta property="og:image:secure_url" content="https://imkt.com/logo_svg.svg" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
