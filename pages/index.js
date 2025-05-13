'use client';

import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Inicio() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale || 'Es');

  useEffect(() => {
  if (router.locale !== locale) {
    router.push(router.pathname, router.asPath, { locale });
  }
}, [locale, router]);

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

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [servicio, setServicio] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: locale == 'Es' ? 'El nombre debe tener al menos 3 caracteres.' : 'Name must be at least 3 characters long.',
      });
    }

    if (email.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: locale == 'Es' ? 'El email debe tener al menos 3 caracteres.' : 'Email must be at least 3 characters long.',
      });
    }

    if (!email.includes("@")) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: locale == 'Es' ? 'El email debe contener un "@"' : 'Email must contain an "@"',
      });
    }

    if (mensaje.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: locale == 'Es' ? 'El mensaje debe tener al menos 3 caracteres.' : 'Message must be at least 3 characters long.',
      });
    }

    if (formularioEnviado) {
      return;
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "info",
        title: locale == 'Es' ? "Enviando..." : "Sending...",
        text: locale == 'Es' ? "Por favor, espera." : "Please wait.",
      });
    }

    setFormularioEnviado(true);
    const contenido = `Nombre: ${nombre}\nEmail: ${email}\nServicio: ${servicio}\nMensaje: ${mensaje} ${locale == 'Es' ? 'Español' : 'English'}`;

    try {
      try {
        const response = await fetch('/api/crear-tarea', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contenido })
        });
    
        const resultado = await response.json();
        console.log('Tarea creada:', resultado);
        console.log('Response:', response);
  
        if (response.ok) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: locale == 'Es' ? "¡Formulario enviado!" : "Form sent!",
            text: locale == 'Es' ? "Nos pondremos en contacto contigo pronto." : "We will contact you soon.",
          });
          setFormularioEnviado(false);
          setNombre('');
          setEmail('');
          setServicio('');
          setMensaje('');
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "info",
            title: locale == 'Es' ? "¡Formulario enviado!" : "Form sent!",
            text: locale == 'Es' ? "Nos pondremos en contacto contigo pronto." : "We will contact you soon.",
          });
        }
      } catch (error) {
        console.error('Error desde el cliente:', error);
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('Hubo un error al enviar el formulario.');
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: locale == 'Es' ? "Error" : "Error",
        text: locale == 'Es' ? "Hubo un error al enviar el formulario." : "There was an error sending the form.",
      });
    }
  };

  return (
    <div className="bg-[#fdf2ed] grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Button Scroll to Top */}

      <Head>
        <title>{locale == 'Es' ? "Im marketing | Marketing, TI, Legal, Finanzas y Diseño" : "Im marketing | Marketing, IT, Legal, Finance and Design"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />
        <meta
            name="description"
            content={ locale == 'Es' ? "Servicios de marketing, TI, legal, finanzas, diseño y audiovisual. En Imkt potenciamos tu empresa con soluciones personalizadas desde Torreón, México." : "Marketing, IT, legal, finance, design and audiovisual services. At Imkt we enhance your company with personalized solutions from Torreón, Mexico." }
            />
            <link rel="icon" href="/logo_svg.svg" />
            <link rel="apple-touch-icon" href="https://immarketing.netlify.app/preview.jpg" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            <meta property="og:title" content= {
              locale == 'Es' ? "Immarketing | Marketing, TI, Legal, Finanzas y Diseño" 
              : "Immarketing | Marketing, IT, Legal, Finance and Design"
              } />
            <meta
            property="og:description"
            content={
              locale == 'Es' ? "Servicios de marketing, TI, legal, finanzas, diseño y audiovisual. En Imkt potenciamos tu empresa con soluciones personalizadas desde Torreón, México."
              : "Marketing, IT, legal, finance, design and audiovisual services. At Imkt we enhance your company with personalized solutions from Torreón, Mexico."
            }
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://immarketing.netlify.app/" />
            <meta property="og:image" content="https://immarketing.netlify.app/preview.jpg" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={locale == 'Es' ? "Immarketing | Marketing, TI, Legal, Finanzas y Diseño" : "Immarketing | Marketing, IT, Legal, Finance and Design"} />
            <meta
            name="twitter:description"
            content={
              locale == 'Es' ? "Servicios de marketing, TI, legal, finanzas, diseño y audiovisual. En Imkt potenciamos tu empresa con soluciones personalizadas desde Torreón, México."
              : "Marketing, IT, legal, finance, design and audiovisual services. At Imkt we enhance your company with personalized solutions from Torreón, Mexico."
            }
            />
            <meta name="twitter:image" content="https://immarketing.netlify.app/preview.jpg" />
            <meta name="twitter:image:alt" content="Imkt Logo" />
            <meta name="twitter:site" content="@imkt" />
            <meta name="twitter:creator" content="@imkt" />

            <meta name="keywords" content={locale == 'Es' ? "marketing, diseño, sitios web, legal, finanzas, audiovisual, redes sociales" : "marketing, design, websites, legal, finance, audiovisual, social media"} />
      </Head>

      <button aria-labelledby={locale == 'Es' ? 'Ancla a sección de Inicio' : 'Anchor to Home section'} aria-label={locale == 'Es' ? 'Ancla a sección de Inicio' : 'Anchor to Home section'}
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } bg-[#8B4513] hover:bg-[#5C3317] text-white`}
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

      <header className="w-full flex justify-between items-center max-w-7xl mx-auto pt-6 px-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src={"/logo_svg.png"} alt="Logo" width={100} height={50} />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-black">{locale == 'Es' ? 'Inicio' : 'Home'}</a>
        <a href="#marketing" className="hover:text-black">Marketing</a>
        <a href="#audiovisual" className="hover:text-black">Audiovisual</a>
        <a href="#grafico" className="hover:text-black">{locale == 'Es' ? 'Diseño' : 'Design'}</a>
        <a href="#ti" className="hover:text-black">TI</a>
        <a href="#proyectos" className="hover:text-black">{locale == 'Es' ? 'Proyectos' : 'Projects'}</a>
        <a href="#legal" className="hover:text-black">Legal</a>
        <a href="#Finanzas" className="hover:text-black">{locale == 'Es' ? 'Finanzas' : 'Finance'}</a>
        <a href="#contacto" className="hover:text-black">{locale == 'Es' ? 'Contacto' : 'Contact'}</a>
      </nav>

      {/* Language Switcher */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          className="appearance-none border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-150"
          aria-label="Cambiar idioma"
        >
          <option value="Es">Español</option>
          <option value="En">English</option>
        </select>
      </div>


      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

      {/* Menú de navegación móvil */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-10 w-[40%] py-4 px-6 space-y-4 bg-orange-200 rounded-b-lg rounded-l-lg shadow-lg z-50">
          <div className="text-gray-700 font-medium">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              className="appearance-none border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-150"
              aria-label="Cambiar idioma"
            >
              <option value="Es">Español</option>
              <option value="En">English</option>
            </select>
          </div>
          <a aria-labelledby='Ancla a sección de Inicio' aria-label='Ancla a sección de Inicio' href="#" className="block text-gray-700 font-medium hover:text-black">{locale == 'Es' ? 'Inicio' : 'Home'}</a>
          <a aria-labelledby='Ancla a sección de Marketing' aria-label='Ancla a sección de Marketing' href="#marketing" className="block text-gray-700 font-medium hover:text-black">Marketing</a>
          <a aria-labelledby='Ancla a sección de Audiovisual' aria-label='Ancla a sección de Audiovisual' href="#audiovisual" className="block text-gray-700 font-medium hover:text-black">Audiovisual</a>
          <a aria-labelledby='Ancla a sección de Diseño' aria-label='Ancla a sección de Diseño' href="#grafico" className="block text-gray-700 font-medium hover:text-black">{locale == 'Es' ? 'Diseño' : 'Design'}</a>
          <a aria-labelledby='Ancla a sección de TI' aria-label='Ancla a sección de TI' href="#ti" className="block text-gray-700 font-medium hover:text-black">TI</a>
          <a aria-labelledby='Ancla a sección de Proyectos' aria-label='Ancla a sección de Proyectos' href="#proyectos" className="block text-gray-700 font-medium hover:text-black">{locale == 'Es' ? 'Proyectos' : 'Projects'}</a>
          <a aria-labelledby='Ancla a sección de Legal' aria-label='Ancla a sección de Legal' href="#legal" className="block text-gray-700 font-medium hover:text-black">Legal</a>
          <a aria-labelledby='Ancla a sección de Finanzas' aria-label='Ancla a sección de Finanzas' href="#finanzas" className="block text-gray-700 font-medium hover:text-black">{locale == 'Es' ? 'Finanzas' : 'Finance'}</a>
          <a aria-labelledby='Ancla a sección de Contacto' aria-label='Ancla a sección de Contacto' href="#contacto" className="block text-gray-700 font-medium hover:text-black">{locale == 'Es' ? 'Contacto' : 'Contact'}</a>
        </div>
      )}


      {/* Main */}
      <main className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto row-start-2">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 w-full md:w-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
        {locale == 'Es' ? 
        <>
          Agencia de marketing digital <br />
          y soluciones que potencian tu{" "}
            <span className="bg-black text-white px-2">negocio</span>
        </> : 
        <>
          Digital marketing agency <br />
          and solutions that enhance your{" "}
            <span className="bg-black text-white px-2">business</span>
        </>
        }
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-black">
          {
          locale == 'Es' ?
            <>
            Servicios con profesionistas de diversas áreas como: <br />
            Finanzas, legal, TI, diseño gráfico y edición de video. <br />
            Todo acompañado de la mejor estrategia para optimizar tu negocio o empresa a nivel administrativo, comercial o digital.
          </>
          :
          <>
            Services with professionals from various areas such as: <br />
            Finance, legal, IT, graphic design and video editing. <br />
            All accompanied by the best strategy to optimize your business or company at the administrative, commercial or digital level.
          </>
          }

        </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mt-6">
            <button aria-label='Boton ancla a servicios' aria-labelledby='Boton ancla a servicios' className="relative overflow-hidden border-2 border-black px-6 py-3 rounded-full font-bold group">
              <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
                <a href="#marketing" aria-label='Ancla a sección de Contacto'>
                  <span>{locale == 'Es' ? 'Ver servicios' : 'See services'}</span>
                </a>
              </span>
              <div className="absolute left-0 top-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full z-0"></div>
            </button>
            <button  aria-label='Boton ancla a contacto' aria-labelledby='Boton ancla a contacto' className="relative overflow-hidden border-2 border-black px-6 py-3 rounded-full font-bold group">
              <span className="flex relative z-10 text-black transition-colors duration-500 group-hover:text-white">
                <a href="#contacto" aria-label='Ancla a sección de Contacto'>
                  <span>Contáctanos</span>
                </a>
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
          <div className="opacity-60 rounded-3xl w-60 h-40 sm:w-72 sm:h-52 md:w-80 md:h-64 lg:w-96 lg:h-72 relative overflow-hidden">
            <img loading='lazy'
              src="/logo_azul.jpg"
              alt="Inicio"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </main>

      <section className="py-16" id="marketing">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">{locale == 'Es' ? 'Servicios de Marketing' : 'Marketing Services'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {locale == 'Es' ?
            <>
              Potencia tu negocio con estrategias de marketing
            </> :
            <>
              Boost your business with marketing strategies 
            </>
            }
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {locale == 'Es' ? 'Ofrecemos soluciones integrales de marketing para llevar tu negocio al siguiente nivel.' : 'We offer comprehensive marketing solutions to take your business to the next level.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              locale == 'Es' ? 'Estrategia de Marketing Digital' : 'Digital Marketing Strategy',
              locale == 'Es' ? 'Gestión de Redes Sociales' : 'Social Media Management',
              locale == 'Es' ? 'Publicidad en Redes Sociales' : 'Social Media Advertising',
              locale == 'Es' ? 'Creación de Contenido' : 'Content Creation',
              locale == 'Es' ? 'SEO y SEM' : 'SEO and SEM',
              locale == 'Es' ? 'Email Marketing' : 'Email Marketing',
              locale == 'Es' ? 'Análisis de Datos' : 'Data Analysis',
              locale == 'Es' ? 'Consultoría de Marketing' : 'Marketing Consulting',
              locale == 'Es' ? 'Desarrollo de Marca' : 'Brand Development',
              locale == 'Es' ? 'Gestión de Proyectos' : 'Project Management',
              locale == 'Es' ? 'Investigación de Mercado' : 'Market Research',
            ].map((servicio, index) => (
              <div key={index} className="bg-white hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 shadow hover:shadow-xl transition-all">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {servicio}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale == 'Es' ? 'Servicio personalizado según tus necesidades y objetivos de negocio.' : 'Personalized service according to your business needs and objectives.'}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 shadow hover:shadow-xl transition-all">
            <p className="text-md text-gray-700">
              {locale == 'Es' ? '¿Quieres algo diferente?' : 'Do you want something different?'}
              <span className="block mt-2 font-medium text-blue-600">
                {locale == 'Es' ? 'Puedes crear tu propio paquete personalizado o contratar uno de los paquetes predefinidos.' : 'You can create your own custom package or hire one of the predefined packages.'}
              </span>
            </p>
          </div>
        </div>
      </section>


      <section className="py-16" id="grafico">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">{locale == 'Es' ? 'Servicios de Diseño Gráfico' : 'Graphic Design Services'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {locale == 'Es' ? 'Diseño gráfico que impacta' : 'Graphic design that impacts'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {locale == 'Es' ? 'Diferencia tu marca con un diseño único y atractivo que resuene con tu audiencia.' : 'Differentiate your brand with a unique and attractive design that resonates with your audience.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-pen-ruler text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Creación de Logos' : 'Logo Creation'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Diseña un logotipo único que represente la esencia de tu marca.' : 'Design a unique logo that represents the essence of your brand.'}
              </p>
            </div>


            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-palette text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Creación de Marca' : 'Brand Creation'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Desarrolla una identidad de marca sólida y coherente que resuene con tu audiencia y genere confianza.' : 'Develop a strong and consistent brand identity that resonates with your audience and builds trust.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-ruler-combined text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Diseño de Landing Page' : 'Landing Page Design'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Crea páginas de destino atractivas y optimizadas para la conversión que impulsen el compromiso del usuario.' : 'Create attractive and conversion-optimized landing pages that drive user engagement.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-rectangle-ad text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Diseño Publicitario' : 'Advertising Design'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Diseña anuncios atractivos y efectivos que capten la atención de tu audiencia y generen conversiones.' : 'Design attractive and effective ads that capture your audience\'s attention and generate conversions.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16" id="audiovisual">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">{locale == 'Es' ? 'Servicios de Edición de Video' : 'Video Editing Services'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {locale == 'Es' ? 'Creamos tu contenido audiovisual' : 'We create your audiovisual content'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {locale == 'Es' ? 'Mejora la calidad de tu contenido audiovisual con nuestros servicios de edición y producción.' : 'Enhance the quality of your audiovisual content with our editing and production services.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-video text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Edición de Video General' : 'General Video Editing'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Edición de videos para redes sociales, YouTube y otros formatos digitales.' : 'Editing videos for social media, YouTube, and other digital formats.'}
              </p>
            </div>


            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-film text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Postproducción Profesional' : 'Professional Postproduction'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Servicios de postproducción que incluyen corrección de color, efectos visuales y edición de sonido.' : 'Post-production services including color correction, visual effects, and sound editing.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-calendar-days text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Eventos y Proyectos Personales' : 'Events and Personal Projects'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Eres un creador de contenido y necesitas ayuda con la edición de tus videos personales o de eventos.' : 'You are a content creator and need help editing your personal or event videos.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-photo-film text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Videos Corporativos y Educativos' : 'Corporate and Educational Videos'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Producción y edición de videos corporativos, tutoriales y contenido educativo.' : 'Production and editing of corporate videos, tutorials, and educational content.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="finanzas">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">{locale == 'Es' ? 'Servicios Financieros' : 'Financial Services'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {locale == 'Es' ? 'Asesoría financiera para tu crecimiento' : 'Financial advice for your growth'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {locale == 'Es' ? 'Toma decisiones informadas y estratégicas sobre tu dinero con nuestra asesoría financiera personalizada.' : 'Make informed and strategic decisions about your money with our personalized financial advice.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-book-open text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Educación Financiera' : 'Financial Education'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Aprende a gestionar tu dinero, entender conceptos clave y mejorar tu salud financiera.' : 'Learn to manage your money, understand key concepts, and improve your financial health.'}
              </p>
            </div>

            <div className="relative">
                {/* Toggle modal */}
                <input hidden type="checkbox" id="finance-modal" className="peer" />

                {/* Card (clickable area) */}
                <label htmlFor="finance-modal" className="relative cursor-pointer hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">

                  {/* Animated Corner Icon */}
                  <div className="absolute top-2 right-2 text-orange-500 animate-bounce-slow">
                    <i className="fa-solid fa-circle-info text-xl"></i>
                  </div>

                  {/* Main Icon */}
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <i className="fa-solid fa-wallet text-3xl text-black"></i>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {locale == 'Es' ? 'Finanzas Personales' : 'Personal Finance'}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {locale == 'Es'
                      ? 'Organización de ingresos, gastos, ahorros y deudas para lograr tus metas personales.'
                      : 'Organization of income, expenses, savings, and debts to achieve your personal goals.'}
                  </p>

                </label>


                {/* Modal Overlay */}
                <label htmlFor="finance-modal" className="modal-overlay fixed top-0 right-0 bottom-0 left-0 bg-black/70 opacity-0 pointer-events-none transition-opacity duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto flex items-center justify-center">
                  {/* Modal Content */}
                  <div className="modal bg-white rounded-2xl p-0 overflow-hidden transform transition-transform duration-300 -translate-y-10 peer-checked:translate-y-0 max-w-3xl w-full shadow-2xl flex flex-col md:flex-row">
                    
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                      <Image src="/Finanzas.jpg" alt="Asesor Finanzas" layout="fill" objectFit="cover" className="rounded-l-2xl md:rounded-l-2xl" />
                    </div>
                    
                    {/* Right: Info */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                      <div  className='gap-4 flex flex-col'>
                        <h5 className="text-2xl font-bold mb-4">Asesor Financiero</h5>
                        <p className="text-gray-700 mb-4">
                          Yair Montiel es nuestro experto en finanzas personales, especializado en ayudarte a organizar tus ingresos, gastos y ahorros para lograr tus metas.
                        </p>
                          <a
                            href="mailto:asesoria@ymfinanzas.com?subject=Consulta%20de%20servicios&body=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios%20financieros."
                            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
                          >
                            <i className="fa-solid fa-envelope text-xl"></i>
                            asesoria@ymfinanzas.com
                          </a>
                          
                          <a
                          href="https://wa.me/526144057630?text=Hola%2C%20quisiera%20saber%20m%C3%A1s%20de%20tus%20servicios."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
                        >
                          <i className="fa-brands fa-whatsapp text-xl"></i>
                          WhatsApp
                        </a>
                      </div>

                      {/* Close Button */}
                      <label htmlFor="finance-modal" className="self-end mt-4 cursor-pointer text-gray-500 hover:text-black text-xl" aria-label="Close modal">
                        ×
                      </label>
                    </div>

                  </div>
                </label>
              </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-chart-line text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Estrategias de Inversión' : 'Investment Strategies'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Identifica oportunidades y aprende a invertir de forma inteligente y segura.' : 'Identify opportunities and learn to invest intelligently and safely.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-piggy-bank text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Productos Financieros' : 'Financial Products'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Conoce y compara productos como créditos, seguros, fondos, y cómo elegir el más conveniente.' : 'Know and compare products like loans, insurance, funds, and how to choose the most convenient one.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-handshake-angle text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Acompañamiento en decisiones' : 'Support in decisions'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Asistencia personalizada para evaluar decisiones financieras clave para tu negocio o vida personal.' : 'Personalized assistance to evaluate key financial decisions for your business or personal life.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16" id="legal">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">{locale == 'Es' ? 'Servicios Legales' : 'Legal Services'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {locale == 'Es' ? 'Asesoramiento legal para tu negocio' : 'Legal advice for your business'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {locale == 'Es' ? 'Protege tu negocio con un asesoramiento legal sólido y profesional. No olvides que la prevención es la mejor defensa.' : 'Protect your business with solid and professional legal advice. Don\'t forget that prevention is the best defense.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
              <i className="fa-solid fa-scale-balanced text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Registro de Marca' : 'Trademark Registration'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Protege tu marca con un registro legal que garantice su exclusividad y derechos de uso.' : 'Protect your brand with a legal registration that guarantees its exclusivity and usage rights.'}
              </p>
            </div>
            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-file-contract text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Consultoria de Marketing Juridico' : 'Legal Marketing Consulting'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Asesoría legal para campañas publicitarias que puedan tener riesgos legales (uso de testimonios, influencers, claims publicitarios).' :
                'Legal advice for advertising campaigns that may have legal risks (use of testimonials, influencers, advertising claims).'}
              </p>
            </div>
            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-gavel text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{locale == 'Es' ? 'Defensa frente a infracciones de marca' : 'Defense against trademark infringements'}</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Protección de tu marca frente a infracciones y uso indebido por parte de terceros.' : 'Protection of your brand against infringements and misuse by third parties.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="ti">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase mb-3">{locale == 'Es' ? 'Servicios TI' : 'IT Services'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {locale == 'Es' ? 'Soluciones de TI Completas' : 'Complete IT Solutions'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {locale == 'Es' ? 'Soluciones personalizadas para optimizar procesos y mejorar la eficiencia.' : 'Customized solutions to optimize processes and improve efficiency.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Landing Pages</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Creación de páginas de destino optimizadas para la conversión.' : 'Creation of optimized landing pages for conversion.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <i className="fab fa-shopify text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Commerce</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Desarrollo de tu comercio electrónico con Shopify para maximizar las ventas en línea.' : 'Development of your e-commerce with Shopify to maximize online sales.'}
              </p>
            </div>
            

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-blog text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Creación de un blog optimizado para SEO que atraiga tráfico orgánico y genere leads.' : 'Creation of an SEO-optimized blog that attracts organic traffic and generates leads.'}
              </p>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black  rounded-2xl p-6 hover:shadow-2xl transition-all flex flex-col items-center text-center bg-white">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <i className="fa-solid fa-scroll text-3xl text-black"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Scraping</h3>
              <p className="text-gray-600 text-sm">
                {locale == 'Es' ? 'Extracción de datos de sitios web para análisis y toma de decisiones informadas.' : 'Data extraction from websites for analysis and informed decision-making.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="proyectos">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black"> {/* Adjusted size */}
            {locale == 'Es' ? 'Proyectos que marcan la diferencia' : 'Projects that make a difference'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-12">
            {locale == 'Es' ? 'Estos son algunos de nuestros proyectos destacados que reflejan nuestro compromiso con la calidad y la innovación.' : 'These are some of our highlighted projects that reflect our commitment to quality and innovation.'}
            <br />
            {locale == 'Es' ? 'Cada proyecto es una oportunidad para aprender y crecer, y estamos orgullosos de compartir estos logros con ustedes.' : 'Each project is an opportunity to learn and grow, and we are proud to share these achievements with you.'}
            <br />
            <span className="font-semibold text-orange-500">{locale == 'Es' ? '¡Descubre cómo podemos ayudarte a alcanzar tus metas!' : 'Discover how we can help you achieve your goals!'}</span>
            <br />
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid layout */}
            {/* Project 1 */}
            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl text-orange-500 mb-6">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">{locale == 'Es' ? 'Proyecto RealtyManager' : 'Project RealtyManager'}</h3>
              <p className="text-gray-600 mb-6">
                {locale == 'Es' ? 'Sitio web de gestión inmobiliaria, diseñado para facilitar la administración de propiedades y clientes.' : 'Real estate management website, designed to facilitate property and client management.'}
              </p>
              <button className="text-orange-500 font-semibold hover:underline" onClick={() => window
                .open("https://dev-mini-crm.netlify.app/", "_blank")}>{locale == 'Es' ? 'Ver sitio' : 'View site'}</button>
            </div>

            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl text-orange-500 mb-6">
                <i className="fa-solid fa-file-lines"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">{locale == 'Es' ? 'Web Scraper de Productos Deportivos' : 'Sports Products Web Scraper'}</h3>
              <p className="text-gray-600 mb-6">
                {locale == 'Es' ? 'Herramienta de scraping que permite a un sitio web alimentar su base de datos con productos deportivos de diferentes proveedores.' : 'Scraping tool that allows a website to feed its database with sports products from different suppliers.'}
              </p>
              <button className="text-orange-500 font-semibold hover:underline" onClick={() =>
                Swal.fire({
                  html: `
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">Productos Deportivos</h3>
                <br/>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">${locale == 'Es' ? 'Producto' : 'Product'}</th>
                            <th style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">${locale == 'Es' ? 'Precio' : 'Price'}</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">${locale == 'Es' ? 'Descripción' : 'Description'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${locale == 'Es' ? 'Bola de fútbol' : 'Soccer Ball'}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">$25.99</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${locale == 'Es' ? 'Bola de fútbol oficial para partidos.' : 'Official soccer ball for matches.'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${locale == 'Es' ? 'Raqueta de tenis' : 'Tennis Racket'}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">$59.99</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${locale == 'Es' ? 'Raqueta ligera de alta calidad para jugadores profesionales.' : 'Lightweight high-quality racket for professional players.'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${locale == 'Es' ? 'Camiseta deportiva' : 'Sports Shirt'}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; min-width: 100px;">$19.99</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${locale == 'Es' ? 'Camiseta deportiva de material transpirable, ideal para entrenamientos.' : 'Breathable sports shirt, ideal for training.'}</td>
                        </tr>
                    </tbody>
                </table>
            `,
                })
              }>Ver más</button>
            </div>

            {/* <!-- Proyecto 3 --> */}
            <div className="hover:border-b-orange-500 hover:border-orange-500 border border-b-4 border-b-black border-r-4 border-black border-r-black bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl text-orange-500 mb-6">
                <i className="fa-solid fa-shop"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">E-commerce</h3>
              <p className="text-gray-600 mb-6">
                {locale == 'Es' ? 'E-commerce diseñado en Shopify diseñado y alimentado con un inventario de productos de diferentes proveedores.' : 'E-commerce designed in Shopify and fed with an inventory of products from different suppliers.'}
              </p>
              <button className="text-orange-500 font-semibold hover:underline" onClick={() => window
                .open("https://safediconceptstore.com/", "_blank")}>{locale == 'Es' ? 'Ver sitio' : 'View site'}</button>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-16" id="contacto">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {locale == 'Es' ? 'Contáctanos' : 'Contact Us'}
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
           {locale == 'Es' ? ` Déjanos tus datos y un asesor especializado o un experto en el área adecuada 
            se pondrá en contacto contigo para ayudarte a encontrar la solución perfecta para impulsar tu negocio.` :
            `Leave us your details and a specialized advisor or an expert in the right area will contact you to help you find the perfect solution to boost your business.`}
          </p>

          <div className="border border-b-4 border-b-black border-r-4 border-black border-r-black max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="max-w-xl mx-auto">
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">{locale == 'Es' ? 'Nombre' : 'Name'}</label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="text-gray-700 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-gray-700 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="servicio" className="block text-gray-700 font-semibold mb-2">{locale == 'Es' ? 'Servicio a solicitar' : 'Service to request'}</label>
                <select
                  id="servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="text-gray-700 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">{locale == 'Es' ? 'Selecciona un servicio' : 'Select a service'}</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Audiovisual">Audiovisual</option>
                  <option value="Diseño">{locale == 'Es' ? 'Diseño' : 'Design'}</option>
                  <option value="TI">TI</option>
                  <option value="Legal">Legal</option>
                  <option value="Finanzas">{locale == 'Es' ? 'Finanzas' : 'Finance'}</option>
                  <option value="No sé mi servicio">{locale == 'Es' ? 'No sé mi servicio' : 'I don\'t know my service'}</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">{locale == 'Es' ? 'Mensaje' : 'Message'}</label>
                <textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={4}
                  className="text-gray-700 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                />
              </div>
              <button onClick={handleSubmit}  aria-label='Boton enviar formulario' aria-labelledby='Boton enviar formulario' 
                className="bg-[#FC9A37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e88a2e] transition"
              >
                {locale == 'Es' ? 'Enviar Solicitud' : 'Send Request'}
              </button>
            </div>

            {/* WhatsApp option */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">{locale == 'Es' ? 'O contáctanos directamente por WhatsApp:' : 'Or contact us directly via WhatsApp:'}</p>
              <a
                href={locale == 'Es' ? 'https://wa.me/5218711167745?text=Hola,%20me%20interesa%20el%20servicio%20de%20IMKT' : 'https://wa.me/5218711167745?text=Hello,%20I%20am%20interested%20in%20the%20service%20of%20IMKT'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                {locale == 'Es' ? 'Escríbenos por WhatsApp' : 'Write to us on WhatsApp'}
              </a>
            </div>
          </div>
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
              {locale == 'Es' ? 'Somos una agencia de marketing digital dedicada a ayudar a las empresas a crecer y prosperar en el mundo digital.' : 'We are a digital marketing agency dedicated to helping businesses grow and thrive in the digital world.'}
            </p>
          </div>

          {/* Links de navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Indice</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a aria-labelledby='Ancla a sección de Inicio' aria-label='Ancla a sección de Inicio' href="#" className="hover:text-black">{locale == 'Es' ? 'Inicio' : 'Home'}</a></li>
              <li><a aria-labelledby='Ancla a sección de Marketing' aria-label='Ancla a sección de Marketing' href="#marketing" className="hover:text-black">Marketing</a></li>
              <li><a aria-labelledby='Ancla a sección de Audiovisual' aria-label='Ancla a sección de Audiovisual' href="#audiovisual" className="hover:text-black">Audiovisual</a></li>
              <li><a aria-labelledby='Ancla a sección de Diseño' aria-label='Ancla a sección de Diseño' href="#grafico" className="hover:text-black">{locale == 'Es' ? 'Diseño' : 'Design'}</a></li>
              <li><a aria-labelledby='Ancla a sección de TI' aria-label='Ancla a sección de TI'  href="#ti" className="hover:text-black">TI</a></li>
              <li><a aria-labelledby='Ancla a sección de Proyecto' aria-label='Ancla a sección de Proyecto' href="#proyectos" className="hover:text-black">{locale == 'Es' ? 'Proyectos' : 'Projects'}</a></li>
              <li><a aria-labelledby='Ancla a sección de Legal' aria-label='Ancla a sección de Legal' href="#legal" className="hover:text-black">Legal</a></li>
              <li><a aria-labelledby='Ancla a sección de Finanzas' aria-label='Ancla a sección de Finanzas' href="#finanzas" className="hover:text-black">{locale == 'Es' ? 'Finanzas' : 'Finance'}</a></li>
              <li><a aria-labelledby='Ancla a sección de Contacto' aria-label='Ancla a sección de Contacto' href="#contacto" className="hover:text-black">{locale == 'Es' ? 'Contacto' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">{locale == 'Es' ? 'Contacto' : 'Contact'}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>imkt-digital@imkt.com</li>
              <li>+52 871-116-7745</li>
              <li>{locale == 'Es' ? 'Oficina Virtual' : 'Virtual Office'}</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t mt-12 pt-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 flex gap-2 items-center">© {locale == 'Es' ? 'IMPULSADOS POR ' : 'DRIVEN BY '}
              <i className="fa-brands fa-react text-2xl text-blue-400"></i>
              <i className="fa-brands fa-js text-2xl text-amber-300"></i> 
              <i className="fa-brands fa-html5 text-2xl text-red-400"></i>
              <i className="fa-brands fa-css3 text-2xl text-blue-400"></i>
            </div>
            <div className="flex gap-4">
              <a aria-labelledby='Enlace a sitio web en Facebook' aria-label='Enlace a sitio web en Facebook' href="https://www.facebook.com/profile.php?id=61573553276870" className="w-10 h-10 bg-blue-600 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a aria-labelledby='Enlace a sitio web en Linkedin' aria-label='Enlace a sitio web en Linkedin' href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
                <i className="fa-brands fa-linkedin text-blue-600 text-4xl"></i>
              </a>
              <a aria-labelledby='Enlace a sitio web en Instagram' aria-label='Enlace a sitio web en Instagram' href="https://www.instagram.com/im_marketing_oficial" className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:bg-gray-100 transition">
                <i className="fab fa-instagram text-fuchsia-800 text-4xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}