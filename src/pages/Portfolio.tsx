import { motion } from 'framer-motion';
import { ArrowLeft, Database, Smartphone, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
    return (
        <div className="bg-dark-bg text-white min-h-screen pt-40 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-chunix transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Volver al Inicio
                    </Link>
                    <h1 className="text-4xl font-bold text-white">Portafolio</h1>
                </div>

                {/* Project: MiCampus */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-dark-surface rounded-[2.5rem] p-8 md:p-12 border border-white/5 mb-16"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Project Info */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-white/5 rounded-2xl p-3 border border-white/10 shadow-lg">
                                    <img src="/micampus/icon.jpg" alt="MiCampus Icon" className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-2">MiCampus</h2>
                                    <p className="text-chunix font-semibold tracking-wide uppercase text-sm">App Móvil Educativa</p>
                                </div>
                            </div>

                            <p className="text-xl text-gray-400 leading-relaxed">
                                La herramienta definitiva para estudiantes de la UNPSJB. Visualiza tu plan de estudios, gestiona tu calendario académico y consulta horarios, todo en una interfaz moderna e intuitiva.
                            </p>

                            <div>
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Stack Tecnológico</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React Native", "Expo", "Mistral AI", "PostgreSQL", "Node.js"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 bg-black/30 text-white rounded-lg text-sm font-medium border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button className="px-6 py-3 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                                    <Github className="w-5 h-5" /> Ver Código
                                </button>
                                {/* <button className="px-6 py-3 rounded-xl bg-white/5 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-colors border border-white/10">
                                    <ExternalLink className="w-5 h-5" /> Demo en Vivo
                                </button> */}
                            </div>
                        </div>

                        {/* Project Images - "All in one" Showcase */}
                        <div className="relative">
                            <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <motion.div whileHover={{ y: -10 }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <img src="/micampus/dashboard.jpg" alt="Dashboard" className="w-full h-auto" />
                                </motion.div>
                                <motion.div whileHover={{ y: -10 }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 mt-8">
                                    <img src="/micampus/progress.jpg" alt="Progress" className="w-full h-auto" />
                                </motion.div>
                                <motion.div whileHover={{ y: -10 }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <img src="/micampus/calendar.jpg" alt="Calendar" className="w-full h-auto" />
                                </motion.div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-500/20 blur-[100px] rounded-full -z-0"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Placeholder for Next Project */}
                {/* Project: Contenedores Benja */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-dark-surface rounded-[2.5rem] p-8 md:p-12 border border-white/5 mb-16"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Project Info */}
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-orange-500/10 rounded-2xl p-3 border border-orange-500/20 shadow-lg flex items-center justify-center">
                                    <Database className="w-10 h-10 text-orange-500" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-2">Contenedores Benja</h2>
                                    <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Web Corporativa + Chatbot IA</p>
                                </div>
                            </div>

                            <p className="text-xl text-gray-400 leading-relaxed">
                                Solución web integral para una empresa de servicios de contenedores y maquinaria. La plataforma no solo informa, sino que opera 24/7 gracias a un <span className="text-white font-bold">Asistente Virtual Inteligente</span> propio.
                            </p>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-orange-500 font-bold mb-2 flex items-center gap-2">
                                    <Smartphone className="w-5 h-5" /> Chatbot IA Propio
                                </h4>
                                <p className="text-sm text-gray-300">
                                    Desarrollado en Python con Agentes de IA avanzados. Atiende consultas, cotiza servicios y guía a los clientes de forma automática y natural, sin necesidad de intervención humana constante.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Stack Tecnológico</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Tailwind CSS", "Python", "AI Agents", "Vite"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 bg-black/30 text-white rounded-lg text-sm font-medium border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Project Images - Web Showcase Layout */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative z-10 space-y-6">
                                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <img src="/contenedores/hero.png" alt="Contenedores Benja Home" className="w-full h-auto" />
                                </motion.div>
                                <div className="grid grid-cols-2 gap-6">
                                    <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                        <img src="/contenedores/chat.png" alt="AI Chat Interface" className="w-full h-full object-cover" />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                        <img src="/contenedores/about.png" alt="About Section" className="w-full h-full object-cover" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-500/10 blur-[100px] rounded-full -z-0"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
