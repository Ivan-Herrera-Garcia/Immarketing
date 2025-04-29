'use client';

import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Head from 'next/head';

export default function Inicio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  useEffect(() => {
    if (menuOpen) {
      setInterval(() => {
        setMenuOpen(false); // Cerrar el menú después de 5 segundos
      }, 10000); // Cambia el tiempo según tus necesidades
    }
  }), [menuOpen]; // Dependencia para el efecto



  return (
    <div className="bg-[#fdf2ed] grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Button Scroll to Top */}
      <Head>
        <link rel="icon" href="/logo_svg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo_svg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Imkt te ofrece una amplia gama de servicios para tu empresa." />
        <meta property="og:title" content="Imkt" />
        <meta property="og:description" content="Imkt te ofrece una amplia gama de servicios para tu empresa." />
        <meta property="og:image" content="/logo_svg.png" />
        <meta property="og:url" content="https://imkt.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imkt" />
        <meta name="twitter:description" content="Imkt te ofrece una amplia gama de servicios para tu empresa." />
        <meta name="twitter:image" content="/logo_svg.png" />
        <meta name="twitter:site" content="@imkt" />
        <meta name="twitter:creator" content="@imkt" />
        <meta name="theme-color" content="#fdf2ed" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Imkt" />
        <meta name="apple-mobile-web-app-title" content="Imkt" />
        <meta name="msapplication-TileColor" content="#fdf2ed" />
        <meta name="msapplication-TileImage" content="/logo_svg.png" />
      </Head>


      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } bg-[#8B4513] hover:bg-[#5C3317] text-white`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Header */}
      <header className="w-full flex justify-between items-center max-w-7xl mx-auto pt-6 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={"/logo_svg.svg"} alt="Logo" width={100} height={50} />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Inicio</a>
          <a href="#grafico" className="hover:text-black">Diseño</a>
          <a href="#ti" className="hover:text-black">TI</a>
          <a href="#proyectos" className="hover:text-black">Proyectos</a>
          <a href="#legal" className="hover:text-black">Legal</a>
          <a href="#Finanzas" className="hover:text-black">Finanzas</a>
          <a href="#contacto" className="hover:text-black">Contacto</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Icono de menú hamburguesa */}
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)} // Cambiar el estado al abrir/cerrar el menú
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Menú de navegación móvil */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-10 w-1/3 py-4 px-6 space-y-4 bg-orange-200 rounded-b-lg rounded-l-lg shadow-lg z-50">
          <a href="#" className="block text-gray-700 font-medium hover:text-black">Inicio</a>
          <a href="#grafico" className="block text-gray-700 font-medium hover:text-black">Diseño</a>
          <a href="#ti" className="block text-gray-700 font-medium hover:text-black">TI</a>
          <a href="#proyectos" className="block text-gray-700 font-medium hover:text-black">Proyectos</a>
          <a href="#legal" className="block text-gray-700 font-medium hover:text-black">Legal</a>
          <a href="#finanzas" className="block text-gray-700 font-medium hover:text-black">Finanzas</a>
          <a href="#contacto" className="block text-gray-700 font-medium hover:text-black">Contacto</a>
        </div>
      )}


      {/* Main */}
      <main className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto row-start-2">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
            Grow your<br />Brand with SEO<br />
            <span className="bg-black text-white px-2">Solutions</span>
          </h1>
          <p className="text-black text-lg">
            Boost your online presence, and attract the right audience<br />to grow your business successfully.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mt-6">
            <button className="relative overflow-hidden border-2 border-black px-6 py-3 rounded-full font-bold group">
              <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
                GET STARTED
              </span>
              <div className="absolute left-0 top-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full z-0"></div>
            </button>
            <button className="relative overflow-hidden border-2 border-black px-6 py-3 rounded-full font-bold group">
              <span className="flex relative z-10 text-black transition-colors duration-500 group-hover:text-white">
                <span>HOW IT WORKS</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute left-0 top-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full z-0"></div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="rounded-full w-60 h-40 sm:w-72 sm:h-52 md:w-80 md:h-64 lg:w-96 lg:h-72 relative overflow-hidden">
            <img
              src="/home.png"
              alt="Inicio"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </main>

      <section className="py-16" id="grafico">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">Servicios de Diseño Gráfico</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Crea una diferencia con tu marca
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Diferencia tu marca con un diseño único y atractivo que resuene con tu audiencia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-pen-ruler text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creación de Logos</h3>
              <p className="text-gray-600 text-sm">
                Diseña un logotipo único que represente la esencia de tu marca.
              </p>
            </div>


            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-palette text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creación de Marca</h3>
              <p className="text-gray-600 text-sm">
                Desarrolla una identidad de marca sólida y coherente que resuene con tu audiencia y genere confianza.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-ruler-combined text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseño de Landing Page</h3>
              <p className="text-gray-600 text-sm">
                Crea páginas de destino atractivas y optimizadas para la conversión que impulsen el compromiso del usuario.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-rectangle-ad text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseño Publicitario</h3>
              <p className="text-gray-600 text-sm">
                Diseña anuncios atractivos y efectivos que capten la atención de tu audiencia y generen conversiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="finanzas">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">Servicios Financieros</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Asesoría financiera para tu crecimiento
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Toma decisiones informadas y estratégicas sobre tu dinero con nuestra asesoría financiera personalizada.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-book-open text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Educación Financiera</h3>
              <p className="text-gray-600 text-sm">
                Aprende a gestionar tu dinero, entender conceptos clave y mejorar tu salud financiera.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-wallet text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Finanzas Personales</h3>
              <p className="text-gray-600 text-sm">
                Organización de ingresos, gastos, ahorros y deudas para lograr tus metas personales.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-chart-line text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Estrategias de Inversión</h3>
              <p className="text-gray-600 text-sm">
                Identifica oportunidades y aprende a invertir de forma inteligente y segura.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-piggy-bank text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Productos Financieros</h3>
              <p className="text-gray-600 text-sm">
                Conoce y compara productos como créditos, seguros, fondos, y cómo elegir el más conveniente.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-handshake-angle text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Acompañamiento en decisiones</h3>
              <p className="text-gray-600 text-sm">
                Asistencia personalizada para evaluar decisiones financieras clave para tu negocio o vida personal.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16" id="legal">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">Servicios Legales</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Asesoramiento legal para tu negocio
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Protege tu negocio con un asesoramiento legal sólido y profesional. No olvides que la prevención es la mejor defensa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
              <i class="fa-solid fa-scale-balanced text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Registro de Marca</h3>
              <p className="text-gray-600 text-sm">
                Protege tu marca con un registro legal que garantice su exclusividad y derechos de uso.
              </p>
            </div>
            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-file-contract text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultoria de Marketing Juridico</h3>
              <p className="text-gray-600 text-sm">
                Asesoría legal para campañas publicitarias que puedan tener riesgos legales (uso de testimonios, influencers, claims publicitarios).
              </p>
            </div>
            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-gavel text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Defensa frente a infracciones de marca</h3>
              <p className="text-gray-600 text-sm">
                Protección de tu marca frente a infracciones y uso indebido por parte de terceros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="ti">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">Servicios TI</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Soluciones de TI Completas
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Soluciones personalizadas para optimizar procesos y mejorar la eficiencia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Landing Pages</h3>
              <p className="text-gray-600 text-sm">
                Creación de páginas de destino optimizadas para la conversión.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fab fa-shopify text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Commerce</h3>
              <p className="text-gray-600 text-sm">
                Desarrollo de tu comercio electrónico con Shopify para maximizar las ventas en línea.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-blog text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600 text-sm">
                Creación de un blog optimizado para SEO que atraiga tráfico orgánico y genere leads.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-scroll text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Scraping</h3>
              <p className="text-gray-600 text-sm">
                Extracción de datos de sitios web para análisis y toma de decisiones informadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" id="testimonios">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Client Feedback</h4>
            <div className="flex items-center gap-2 mb-6 flex-wrap"> {/* flex-wrap added */}
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" className="w-10 h-10 rounded-full" />
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Client 2" className="w-10 h-10 rounded-full" />
              <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Client 3" className="w-10 h-10 rounded-full" />
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">0k</div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-black"> {/* Reduced text size for smaller screens */}
              Clients’ Feedback <br /> and Thoughts
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8"> {/* Added responsive text size */}
              Discover what our clients have to say about their experiences with us
              and learn how our services have positively impacted their businesses.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              VIEW DETAILS
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white">
              <p className="text-lg mb-4 text-black">
                Solicite el diseño de un sitio web y una estrategia de marketing digital
                para su empresa. El equipo de Seom fue muy profesional y cumplió con todas
                nuestras expectativas. ¡Recomiendo encarecidamente sus servicios!
              </p>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-3">
                  <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Olivia Martinez" className="w-8 h-8 rounded-full" />
                  <span className="font-semibold text-gray-800">Olivia Martinez</span>
                </div>
                <div className="flex gap-1 text-orange-500">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="proyectos">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black"> {/* Adjusted size */}
            Proyectos Exitosos
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-12">
            Estos son algunos de los proyectos que han marcado la diferencia para nuestros clientes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid layout */}
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl text-orange-500 mb-6">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Proyecto RealtyManager</h3>
              <p className="text-gray-600 mb-6">
                Sitio web de gestión inmobiliaria que aumento la eficiencia en la administración de propiedades en un 40%.
              </p>
              <button className="text-orange-500 font-semibold hover:underline" onClick={() => window
                .open("https://dev-mini-crm.netlify.app/", "_blank")}>Ver sitio</button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl text-orange-500 mb-6">
                <i className="fa-solid fa-file-lines"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Web Scraper de Productos Deportivos</h3>
              <p className="text-gray-600 mb-6">
                Herramienta de scraping que permite a un sitio web alimentar su base de datos con productos deportivos de diferentes proveedores.
              </p>
              <button className="text-orange-500 font-semibold hover:underline" onClick={() =>
                Swal.fire({
                  html: `
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">Productos Deportivos</h3>
                <br/>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">Producto</th>
                            <th style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">Precio</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">Bola de fútbol</td>
                            <td style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">$25.99</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">Bola de fútbol oficial para partidos.</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">Raqueta de tenis</td>
                            <td style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">$59.99</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">Raqueta ligera de alta calidad para jugadores profesionales.</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">Camiseta deportiva</td>
                            <td style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">$19.99</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">Camiseta deportiva de material transpirable, ideal para entrenamientos.</td>
                        </tr>
                    </tbody>
                </table>
            `,
                })
              }>Ver más</button>
            </div>

            {/* <!-- Proyecto 3 --> */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl text-orange-500 mb-6">
                <i className="fa-solid fa-shop"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">E-commerce</h3>
              <p className="text-gray-600 mb-6">
                E-commerce diseñado en Shopify diseñado y alimentado con un inventario de productos de diferentes proveedores.
              </p>
              <button className="text-orange-500 font-semibold hover:underline" onClick={() => window
                .open("https://safediconceptstore.com/", "_blank")}>Ver sitio</button>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-16" id="contacto">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Si tienes alguna pregunta o necesitas más información sobre nuestros servicios,
            no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte a alcanzar tus objetivos.
          </p>

          <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre</label>
              <input type="text" id="name" className="text-gray-700 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tu nombre" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
              <input type="email" id="email" className="text-gray-700 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tu correo electrónico" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensaje</label>
              <textarea id="message" rows="4" className="text-gray-700 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Escribe tu mensaje aquí..."></textarea>
            </div>
            <button type="submit" className="bg-[#FC9A37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e88a2e] transition">
              Enviar Mensaje
            </button>

            {/* WhatsApp option */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">¿Prefieres una atención más ágil?</p>
              <a
                href="https://wa.me/5218701440979?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20acerca%20de%20los%20servicios%20que%20ofrecen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                Escríbenos por WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white pt-12 pb-6 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-2">
              <Image src={"/logo_svg.svg"} alt="Logo" width={100} height={50} />
            </div>
            <p className="text-gray-600 mt-2 text-base">
              Somos una agencia de marketing digital dedicada a ayudar a las empresas a crecer y prosperar en el mundo digital.
            </p>
          </div>

          {/* Links de navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Indice</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Inicio</a></li>
              <li><a href="#grafico" className="hover:text-black">Diseño</a></li>
              <li><a href="#ti" className="hover:text-black">TI</a></li>
              <li><a href="#proyectos" className="hover:text-black">Proyectos</a></li>
              <li><a href="#legal" className="hover:text-black">Legal</a></li>
              <li><a href="#finanzas" className="hover:text-black">Finanzas</a></li>
              <li><a href="#contacto" className="hover:text-black">Contacto</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Contacto</h3>
            <ul className="space-y-2 text-gray-600">
              <li>imkt-digital@imkt.com</li>
              <li>+52 871-116-7745</li>
              <li>Oficina Virtual</li>
            </ul>
          </div>

          {/* Imagen o video */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Office</h3>
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581090700227-1c065c66683c" alt="Office" className="w-full h-auto object-cover" />
            </div>
          </div> */}
        </div>

        {/* Línea divisoria */}
        <div className="border-t mt-12 pt-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 flex gap-2 items-center">© IMPULSADOS POR 
              <i class="fa-brands fa-react text-2xl text-blue-400"></i>
              <i class="fa-brands fa-js text-2xl text-amber-300"></i> 
              <i class="fa-brands fa-html5 text-2xl text-red-400"></i>
              <i class="fa-brands fa-css3 text-2xl text-blue-400"></i>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61573553276870" className="w-10 h-10 bg-blue-600 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
                <i className="fa-brands fa-linkedin text-blue-600 text-4xl"></i>
              </a>
              <a href="https://www.instagram.com/im_marketing_oficial" className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
                <i className="fab fa-instagram text-fuchsia-800 text-4xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}
