'use client';

import React from 'react';
import { useState, useEffect } from 'react';


export default function Home() {
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

  return (
    <div className="bg-[#fdf2ed] grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">

    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
          <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
            SE
          </div>
          <span className="text-xl font-bold text-black">Seom</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Pages</a>
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">Blog</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>

        {/* Search + Button */}
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
            </svg>
          </button>
          <button className="relative overflow-hidden border-2 border-black px-6 py-3 rounded-full font-bold group">
            <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
              GET STARTED
            </span>
            <div className="absolute left-0 top-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full z-0"></div>
          </button>
        </div>
      </header>

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
          <div className="rounded-full w-96 h-[500px] relative overflow-hidden">
            <img
              src="/home.png"
              alt="Home"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </main>

      {/* SECTION: Our Services Scrollable Cards */}
      <section className="max-w-7xl mx-auto mt-20 px-4 relative">
        <h2 className="text-4xl font-bold mb-8 text-center text-black">Our Services</h2>
        <div className="w-full overflow-x-auto hide-scrollbar ">
          <div className="flex gap-8 min-w-max py-4">

            {/* Card 0 */}
            <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-xl border border-black min-w-[280px] hover:shadow-lg transition-shadow snap-start">
              <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center">
                {/* Icono */}
              </div>
              <h3 className="text-xl font-bold text-gray-600">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">
                Simplifying digital experiences with clean, functional, and responsive user interface designs.
              </p>
              <a href="#" className="mt-auto font-semibold hover:underline flex items-center gap-1 text-gray-600">
                View Details →
              </a>
            </div>

            {/* Card 1 */}
            <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-xl border border-black min-w-[280px] hover:shadow-lg transition-shadow snap-start">
              <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center">
                {/* Icono */}
              </div>
              <h3 className="text-xl font-bold text-gray-600">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">
                Simplifying digital experiences with clean, functional, and responsive user interface designs.
              </p>
              <a href="#" className="mt-auto font-semibold hover:underline flex items-center gap-1 text-gray-600">
                View Details →
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-xl border border-black min-w-[280px] hover:shadow-lg transition-shadow snap-start">
              <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center">
                {/* Icono */}
              </div>
              <h3 className="text-xl font-bold text-gray-600">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">
                Simplifying digital experiences with clean, functional, and responsive user interface designs.
              </p>
              <a href="#" className="mt-auto font-semibold hover:underline flex items-center gap-1 text-gray-600">
                View Details →
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-xl border border-black min-w-[280px] hover:shadow-lg transition-shadow snap-start">
              <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center">
                {/* Icono */}
              </div>
              <h3 className="text-xl font-bold text-gray-600">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">
                Simplifying digital experiences with clean, functional, and responsive user interface designs.
              </p>
              <a href="#" className="mt-auto font-semibold hover:underline flex items-center gap-1 text-gray-600">
                View Details →
              </a>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-xl border border-black min-w-[280px] hover:shadow-lg transition-shadow snap-start">
              <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center">
                {/* Icono */}
              </div>
              <h3 className="text-xl font-bold text-gray-600">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">
                Simplifying digital experiences with clean, functional, and responsive user interface designs.
              </p>
              <a href="#" className="mt-auto font-semibold hover:underline flex items-center gap-1 text-gray-600">
                View Details →
              </a>
            </div>

          </div>
          {/* Fades */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Complete SEO Solution
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Addressing complicated digital tech challenges with customized solutions to streamline processes and improve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Keyword Optimization Plan</h3>
              <p className="text-gray-600 text-sm">
                Create a keyword strategy to enhance search visibility and improve targeted traffic to your website.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1a2 2 0 012 2v1h3l1 2h2a2 2 0 012 2v3h-2l-1 2h-3v1a2 2 0 01-4 0v-1h-3l-1-2H2V8a2 2 0 012-2h2l1-2h3V3a2 2 0 012-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Individualized SEO Strategy</h3>
              <p className="text-gray-600 text-sm">
                Tailor a personalized SEO strategy to meet your specific business needs and improve search rankings.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.896 1.514 8.298L12 18.896l-7.45 4.604 1.514-8.298L0 9.306l8.332-1.151z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analysis</h3>
              <p className="text-gray-600 text-sm">
                Analyze SEO performance with detailed metrics to continually improve your strategies.
              </p>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v-2H3v2zm4 0h2V7H7v6zm4 0h2V3h-2v10zm4 0h2V5h-2v8zm4 0h2V9h-2v4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Strategy</h3>
              <p className="text-gray-600 text-sm">
                Develop a compelling content plan that supports SEO efforts and drives more organic traffic.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section class=" py-12">
      <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        <div class="flex-1">
          <h4 class="text-sm font-semibold text-gray-700 mb-4">Client Feedback</h4>
          <div class="flex items-center gap-2 mb-6">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" class="w-10 h-10 rounded-full"/>
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Client 2" class="w-10 h-10 rounded-full"/>
            <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Client 3" class="w-10 h-10 rounded-full"/>
            <div class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">0k</div>
          </div>
          <h2 class="text-4xl font-bold leading-tight mb-6 text-black">
            Clients’ Feedback <br/> and Thoughts
          </h2>
          <p class="text-gray-600 mb-8">
            Discover what our clients have to say about their experiences with us
            and learn how our services have positively impacted their businesses.
          </p>
          <button class="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            VIEW DETAILS
          </button>
        </div>

        <div class="flex-1 flex flex-col gap-6">
          <div class="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white">
            <p class="text-lg mb-4 text-black">
              Solicite el diseño de un sitio web y una estrategia de marketing digital
              para su empresa. El equipo de Seom fue muy profesional y cumplió con todas
              nuestras expectativas. ¡Recomiendo encarecidamente sus servicios!
            </p>
            <div class="flex items-center justify-between border-t pt-4">
              <div class="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Olivia Martinez" class="w-8 h-8 rounded-full"/>
                <span class="font-semibold text-gray-800">Olivia Martinez</span>
              </div>
              <div class="flex gap-1 text-orange-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>

          <div class="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white">
            <p class="text-lg mb-4 text-black">
              Una experiencia increíble con Seom. Su equipo de expertos en SEO
              nos ayudó a mejorar nuestro ranking en Google y aumentar el tráfico
              a nuestro sitio web. ¡Definitivamente volveremos a trabajar con ellos!
            </p>
            <div class="flex items-center justify-between border-t pt-4">
              <div class="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Olivia Martinez" class="w-8 h-8 rounded-full"/>
                <span class="font-semibold text-gray-800">Olivia Martinez</span>
              </div>
              <div class="flex gap-1 text-orange-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>

          <div class="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white">
            <p class="text-lg mb-4 text-black">
              Para ser mi primera experiencia con una agencia de marketing digital,
              debo decir que estoy muy satisfecho. El equipo de Seom fue muy
              profesional y cumplió con todas mis expectativas. ¡Recomiendo encarecidamente sus servicios!
            </p>
            <div class="flex items-center justify-between border-t pt-4">
              <div class="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Olivia Martinez" class="w-8 h-8 rounded-full"/>
                <span class="font-semibold text-gray-800">Olivia Martinez</span>
              </div>
              <div class="flex gap-1 text-orange-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>

        

    <footer className="bg-white pt-12 pb-6 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 text-white font-bold rounded-full flex items-center justify-center">
              SE
            </div>
            <h2 className="text-xl font-bold text-black">Seom</h2>
          </div>
          <p className="text-gray-600">
            A reputable SEO agency begins with a analysis comprehensive analysis.
          </p>
        </div>

        {/* Links de navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>seomagency1234@gmail.com</li>
            <li>+123 456 7890</li>
            <li>421 Allen, Mexico 4233</li>
          </ul>
        </div>

        {/* Imagen o video */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581090700227-1c065c66683c" alt="Office" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© POWERED BY SEOM</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
              <i class="fa-brands fa-linkedin text-blue-600 text-4xl"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
              <i className="fab fa-youtube text-red-600 text-4xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
