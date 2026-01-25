import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Users, Clock, Shield, CheckCircle, Instagram, Linkedin, MessageCircle, Star, Zap, Heart, Check, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Counter } from '../components/Counter';
import { useState, useEffect } from 'react';

// Proyectos para el carrusel
const projects = [
    {
        id: 0,
        name: "MiCampus - App Educativa UNPSJB",
        description: "Una plataforma masiva que simplifica la vida universitaria. Calendarios inteligentes, gestión académica en tiempo real y un asistente virtual integrado. Un ejemplo de cómo transformamos procesos complejos en experiencias simples y potentes.",
        image: "/projects/micampus_mobile.png",
        link: "https://campusunpjsb.netlify.app",
        category: "Sistemas a Medida"
    },
    {
        id: 1,
        name: "Contenedores Benja",
        description: "Más que una web, un vendedor automático 24/7. Incorporamos un Asistente Virtual Inteligente que atiende consultas y cotiza servicios al instante, permitiendo que el negocio siga vendiendo incluso fuera del horario comercial.",
        image: "/projects/contenedores_benja.png",
        link: "https://contenedoresbenja.netlify.app",
        category: "Web + IA"
    }
];

export function Home() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play del carrusel cada 4 segundos
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextProject = () => {
        setIsAutoPlaying(false);
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setIsAutoPlaying(false);
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            await fetch("https://formsubmit.co/ajax/santinosoto21@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            setIsSuccess(true);
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const whatsappLink = "https://wa.me/5492974309758?text=Hola!%20Quiero%20información%20sobre%20páginas%20web";

    return (
        <div className="bg-dark-bg text-white font-sans overflow-x-hidden">
            {/* Hero Section - Vendedor y Directo */}
            <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 min-h-screen flex items-center overflow-hidden">
                <AnimatedBackground />
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 sm:px-5 py-2 rounded-full border border-chunix/30 bg-chunix/10 text-chunix text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                            Tu negocio merece una web profesional
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
                            Conseguí más clientes con una
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chunix to-chunix-light"> página web que vende</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
                            Creo páginas web simples, profesionales y efectivas para emprendedores, comercios y profesionales. <strong className="text-white">Sin complicaciones.</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/30"
                            >
                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                                Hablemos por WhatsApp
                            </a>
                            <a href="#services" className="px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg border-2 border-white/20 hover:bg-white/5 transition-all text-center">
                                Ver qué puedo hacer por vos
                            </a>
                        </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400 text-sm sm:text-base"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-chunix" />
                            <span>Entrega rápida</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-chunix" />
                            <span>Precio justo</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-chunix" />
                            <span>Atención personalizada</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Qué problema resuelvo */}
            <section className="py-16 sm:py-20 md:py-24 bg-dark-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-chunix/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">¿Tu negocio todavía no tiene presencia online?</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-2">
                        Hoy en día, si no estás en internet, <strong className="text-white">no existís</strong>.
                        Una página web profesional te ayuda a conseguir más clientes, generar confianza y vender más.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Conseguí más clientes",
                                desc: "Las personas buscan servicios en Google. Si no te encuentran ahí, van a tu competencia.",
                                color: "text-chunix"
                            },
                            {
                                icon: Star,
                                title: "Mostrá profesionalismo",
                                desc: "Una web bien diseñada genera confianza desde el primer momento.",
                                color: "text-purple-400"
                            },
                            {
                                icon: Zap,
                                title: "Vendé 24/7",
                                desc: "Tu página trabaja por vos las 24 horas, incluso mientras dormís.",
                                color: "text-orange-400"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-dark-bg p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-chunix/30 transition-colors"
                            >
                                <div className={`w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto ${item.color}`}>
                                    <item.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Servicios - Sin jerga técnica */}
            <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">¿Qué puedo hacer por tu negocio?</h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">Soluciones simples para que te encuentren, te conozcan y te elijan.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        {/* Landing Page */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-dark-surface p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-chunix/50 transition-all"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-chunix/20 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                    <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-chunix" />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold">Página web simple</h3>
                                    <p className="text-gray-400 text-sm sm:text-base">Ideal para empezar</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                Una página web clara y profesional donde tus clientes puedan ver qué hacés,
                                cómo contactarte y por qué elegirte. Perfecta para profesionales, comercios y emprendedores.
                            </p>
                            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                {["Diseño moderno y atractivo", "Se ve perfecto en celular", "Formulario de contacto", "Mapa de ubicación", "Links a tus redes sociales"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-chunix shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-chunix font-bold hover:gap-4 transition-all text-sm sm:text-base"
                            >
                                Quiero saber más <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </motion.div>

                        {/* Página para empresas */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-dark-surface p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                    <Star className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold">Página web completa</h3>
                                    <p className="text-gray-400 text-sm sm:text-base">Para negocios que quieren más</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                Una web más completa con varias secciones, galería de fotos, catálogo de productos
                                o servicios, y todo lo que necesites para destacar sobre tu competencia.
                            </p>
                            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                {["Múltiples páginas y secciones", "Galería de fotos/proyectos", "Catálogo de productos", "Blog o sección de novedades", "Optimizado para Google"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all text-sm sm:text-base"
                            >
                                Quiero saber más <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </motion.div>

                        {/* Sistema / Panel */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-dark-surface p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all md:col-span-2"
                        >
                            <div className="md:flex md:items-start md:gap-8 lg:gap-12">
                                <div className="md:flex-1 mb-6 md:mb-0">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                            <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold">Sistemas a medida</h3>
                                            <p className="text-gray-400 text-sm sm:text-base">Automatizá tu negocio</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                        ¿Necesitás gestionar turnos, reservas, pedidos o inventario? Creo sistemas simples
                                        y fáciles de usar para que puedas administrar tu negocio sin dolores de cabeza.
                                    </p>
                                </div>
                                <div className="md:flex-1">
                                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                        {["Sistema de turnos y reservas", "Gestión de pedidos", "Panel de administración", "Reportes y estadísticas", "Acceso desde cualquier dispositivo"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-orange-400 font-bold hover:gap-4 transition-all text-sm sm:text-base"
                                    >
                                        Contame qué necesitás <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Portafolio / Proyectos Reales */}
            <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-dark-bg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-chunix/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-chunix/30 bg-chunix/10 text-chunix text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                            Proyectos que hablan por sí solos
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
                            Mirá lo que ya creamos para otros negocios
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
                            Cada proyecto es una historia de éxito. Negocios reales que ahora tienen presencia profesional en internet.
                        </p>
                    </div>

                    {/* Carrusel de proyectos */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-dark-surface border border-white/5 group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentProject}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col" // Diseño unificado Flex Column para todo
                                >
                                    {/* Imagen Real del Proyecto */}
                                    <div className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden">
                                        <img
                                            src={projects[currentProject].image}
                                            alt={projects[currentProject].name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Overlay muy sutil solo para dar profundidad, pero no para texto */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-50"></div>
                                    </div>

                                    {/* Contenido del proyecto - Siempre debajo con fondo sólido */}
                                    <div className="relative p-6 sm:p-8 md:p-10 bg-dark-surface border-t border-white/5">
                                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                            <div className="max-w-3xl">
                                                <span className="inline-block px-3 py-1 bg-chunix/10 text-chunix text-xs font-bold rounded-full mb-3 border border-chunix/20">
                                                    {projects[currentProject].category}
                                                </span>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                                                    {projects[currentProject].name}
                                                </h3>
                                                <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                                                    {projects[currentProject].description}
                                                </p>
                                            </div>
                                            <a
                                                href={projects[currentProject].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-chunix text-black px-6 py-4 md:py-3 rounded-xl md:rounded-full font-bold text-base hover:bg-chunix-light transition-all shadow-lg hover:scale-105 shrink-0"
                                            >
                                                Ver proyecto real
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controles de navegación */}
                            {/* Posicionados sobre la IMAGEN (mitad superior de la card) */}
                            <div className="absolute top-[35%] sm:top-[40%] -translate-y-1/2 w-full flex justify-between px-2 md:px-4 z-30 pointer-events-none">
                                <button
                                    onClick={prevProject}
                                    className="w-10 h-10 md:w-14 md:h-14 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm pointer-events-auto border border-white/10 hover:scale-110"
                                    aria-label="Proyecto anterior"
                                >
                                    <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
                                </button>
                                <button
                                    onClick={nextProject}
                                    className="w-10 h-10 md:w-14 md:h-14 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm pointer-events-auto border border-white/10 hover:scale-110"
                                    aria-label="Proyecto siguiente"
                                >
                                    <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
                                </button>
                            </div>
                        </div>

                        {/* Indicadores de progreso */}
                        <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                            {projects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentProject(idx);
                                    }}
                                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentProject
                                        ? 'w-6 sm:w-8 bg-chunix'
                                        : 'w-1.5 sm:w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Ver proyecto ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Contador de proyectos */}
                        <div className="text-center mt-4 sm:mt-6">
                            <span className="text-gray-500 text-sm">
                                {currentProject + 1} / {projects.length} proyectos
                            </span>
                        </div>
                    </div>

                    {/* Mini cards de otros proyectos (visible en desktop) */}
                    <div className="hidden lg:grid lg:grid-cols-5 gap-3 mt-8">
                        {projects.map((project, idx) => (
                            <motion.button
                                key={project.id}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentProject(idx);
                                }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`p-4 rounded-xl text-left transition-all ${idx === currentProject
                                    ? 'bg-chunix/20 border-2 border-chunix'
                                    : 'bg-dark-surface border border-white/5 hover:border-white/20'
                                    }`}
                            >
                                <span className={`text-xs font-medium ${idx === currentProject ? 'text-chunix' : 'text-gray-500'}`}>
                                    {project.category}
                                </span>
                                <h4 className={`font-bold text-sm mt-1 line-clamp-1 ${idx === currentProject ? 'text-white' : 'text-gray-300'}`}>
                                    {project.name}
                                </h4>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por qué elegirme */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-dark-surface">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">¿Por qué trabajar conmigo?</h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 px-2">Sin vueltas, sin complicaciones. Así de simple.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {[
                            { icon: Clock, title: "Rápido", desc: "Tu web lista en días, no en meses", color: "text-chunix" },
                            { icon: Shield, title: "Precio justo", desc: "Sin sorpresas ni costos ocultos", color: "text-green-400" },
                            { icon: Heart, title: "Atención personal", desc: "Hablás directo conmigo, no con un bot", color: "text-pink-400" },
                            { icon: CheckCircle, title: "Sin complicaciones", desc: "Te explico todo en palabras simples", color: "text-blue-400" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-dark-bg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center"
                            >
                                <div className={`w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 ${item.color}`}>
                                    <item.icon className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7" />
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm md:text-base">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        <div className="bg-dark-bg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-chunix mb-1 sm:mb-2">
                                <Counter to={50} duration={1} suffix="+" />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400">Proyectos realizados</div>
                        </div>
                        <div className="bg-dark-bg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                                <Counter to={100} duration={1.2} suffix="%" />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400">Clientes satisfechos</div>
                        </div>
                        <div className="bg-dark-bg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                                <Counter to={7} duration={0.8} />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400">Días promedio de entrega</div>
                        </div>
                        <div className="bg-dark-bg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-chunix mb-1 sm:mb-2">
                                <Counter to={2} duration={0.5} suffix="+" />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400">Años de experiencia</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre mí */}
            <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-dark-bg relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-chunix/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">Conocé al profesional detrás del proyecto</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">Trabajo de forma directa y personalizada con cada cliente.</p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center bg-dark-surface rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/5 hover:border-chunix/20 transition-all">
                        {/* Photo Column */}
                        <div className="md:col-span-5 lg:col-span-4 relative group">
                            <div className="absolute inset-0 bg-chunix/20 rounded-xl sm:rounded-2xl blur-xl group-hover:bg-chunix/30 transition-all opacity-0 group-hover:opacity-100"></div>
                            <img
                                src="/santino.jpg"
                                alt="Santino - Desarrollador Web"
                                className="relative w-full max-w-[280px] sm:max-w-none mx-auto aspect-[3/4] object-cover rounded-xl sm:rounded-2xl border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl"
                            />
                        </div>

                        {/* Bio Column */}
                        <div className="md:col-span-7 lg:col-span-8 space-y-4 sm:space-y-5 md:space-y-6">
                            <div>
                                <div className="inline-block px-2 sm:px-3 py-1 bg-chunix/10 text-chunix text-[10px] sm:text-xs font-bold rounded-full mb-2 sm:mb-3">
                                    DESARROLLADOR WEB
                                </div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">Santino Soto</h3>
                                <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">Estudiante de Analista Programador Universitario</p>
                            </div>

                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                                Estudiante avanzado en la <span className="text-chunix">Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB)</span>.
                                Me especializo en crear páginas web profesionales para emprendedores, comercios y profesionales que buscan destacar en internet.
                            </p>

                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                Mi enfoque es simple: entender lo que tu negocio necesita y crear una web que funcione,
                                que se vea profesional y que te ayude a conseguir más clientes. Sin vueltas, sin complicaciones
                                y con atención personalizada de principio a fin.
                            </p>

                            <div className="pt-4 sm:pt-5 md:pt-6 border-t border-white/5">
                                <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Conectemos</h4>
                                <div className="flex gap-3 sm:gap-4">
                                    <a href="https://instagram.com/s2nttyy" target="_blank" className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl hover:bg-chunix hover:text-black transition-all hover:-translate-y-1">
                                        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/santino-soto" target="_blank" className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl hover:bg-chunix hover:text-black transition-all hover:-translate-y-1">
                                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-1"
                                    >
                                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final grande */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-dark-surface to-dark-bg">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
                        ¿Listo para tener tu web?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                        Contame sobre tu negocio y te doy un presupuesto sin compromiso.
                        <strong className="text-white"> Respondo en menos de 24 horas.</strong>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-0">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-[#25D366]/30 w-full sm:w-auto"
                        >
                            <MessageCircle className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7" />
                            Hablemos por WhatsApp
                        </a>
                    </div>
                    <p className="mt-4 sm:mt-6 text-gray-500 text-sm sm:text-base">Presupuesto sin compromiso</p>
                </div>
            </section>

            {/* Contact Form - Simple */}
            <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-dark-bg">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">¿Preferís escribirme por acá?</h2>
                        <p className="text-gray-400 text-sm sm:text-base px-2">Completá el formulario y te contacto a la brevedad.</p>
                    </div>

                    <div className="bg-white/5 p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8 sm:py-10 md:py-12"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-green-500">
                                    <Check className="w-8 h-8 sm:w-10 sm:h-10" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">¡Mensaje enviado!</h3>
                                <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">Gracias por escribirme. Te respondo pronto.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="bg-white/10 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white/20 transition-all font-semibold text-sm sm:text-base"
                                >
                                    Enviar otro mensaje
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs sm:text-sm font-medium text-gray-300">Tu nombre</label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:outline-none focus:border-chunix transition-colors text-base sm:text-lg"
                                            placeholder="¿Cómo te llamás?"
                                        />
                                    </div>
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs sm:text-sm font-medium text-gray-300">WhatsApp o teléfono</label>
                                        <input
                                            name="phone"
                                            required
                                            type="tel"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:outline-none focus:border-chunix transition-colors text-base sm:text-lg"
                                            placeholder="+54 ..."
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-xs sm:text-sm font-medium text-gray-300">Email (opcional)</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:outline-none focus:border-chunix transition-colors text-base sm:text-lg"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-xs sm:text-sm font-medium text-gray-300">Contame sobre tu negocio</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:outline-none focus:border-chunix transition-colors text-base sm:text-lg resize-none"
                                        placeholder="¿Qué tipo de negocio tenés y qué necesitás?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-chunix text-black font-bold py-4 sm:py-5 rounded-lg sm:rounded-xl transition-all transform hover:scale-[1.02] text-base sm:text-lg ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-chunix-light'}`}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
