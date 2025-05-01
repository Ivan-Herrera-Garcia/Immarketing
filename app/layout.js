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

// const metadata = {
//   title: "Imkt | Servicios para tu empresa",
//   description: "Imkt te ofrece una amplia gama de servicios para tu empresa.",
//   icons: {
//     icon: "/logo_svg.svg", // Usa aquí un PNG si quieres usar el logo.svg convertido
//   },
//   openGraph: {
//     title: "Imkt",
//     description: "Imkt te ofrece una amplia gama de servicios para tu empresa.",
//     type: "website",
//     images: [
//       {
//         url: "/logo_svg.png", // Este debe ser tu logo convertido a PNG y con buen tamaño (ej. 1200x630)
//         width: 800,
//         height: 600,
//         alt: "Imkt Logo",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Imkt",
//     description: "Imkt te ofrece una amplia gama de servicios para tu empresa.",
//     images: ["/logo_svg.png", "/logo_svg.svg"],
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true" data-lt-installed="true">
      <head>
        <title>Imkt | Servicios para tu empresa</title>
        <meta
          name="description"
          content="Imkt te ofrece una amplia gama de servicios para tu empresa."
        />
        <link rel="icon" href="/logo_svg.svg" />
        <link rel="apple-touch-icon" href="https://immarketing.netlify.app/preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="Imkt" />
        <meta
          property="og:description"
          content="Imkt te ofrece una amplia gama de servicios para tu empresa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://immarketing.netlify.app/" />
        <meta property="og:image" content="https://immarketing.netlify.app/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imkt" />
        <meta
          name="twitter:description"
          content="Imkt te ofrece una amplia gama de servicios para tu empresa."
        />
        <meta name="twitter:image" content="https://immarketing.netlify.app/preview.jpg" />
        <meta name="twitter:image:alt" content="Imkt Logo" />
        <meta name="twitter:site" content="@imkt" />
        <meta name="twitter:creator" content="@imkt" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
