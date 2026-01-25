import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const whatsappLink = "https://wa.me/5492974309758?text=Hola!%20Quiero%20información%20sobre%20páginas%20web";

    const menuItems = [
        { label: 'Servicios', href: '/#services', isLink: false },
        { label: 'Proyectos', href: '/#projects', isLink: false },
        { label: 'Sobre mí', href: '/#about', isLink: false },
        { label: 'Contacto', href: '/#contact', isLink: false },
    ];

    return (
        <nav className="fixed w-full z-50 top-10 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src="/logo.png" alt="Chunix Code Logo" className="h-16 w-16 object-cover rounded-full" />
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {menuItems.map((item) => (
                        item.isLink ? (
                            <Link key={item.label} to={item.href} className="hover:text-chunix transition-colors">{item.label}</Link>
                        ) : (
                            <a key={item.label} href={item.href} className="hover:text-chunix transition-colors">{item.label}</a>
                        )
                    ))}
                </div>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#20bd5a] transition-all transform hover:scale-105 active:scale-95"
                >
                    <MessageCircle className="w-5 h-5" />
                    Pedí tu web
                </a>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white p-2" onClick={toggleMenu}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-bg border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {menuItems.map((item) => (
                                item.isLink ? (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-300 hover:text-chunix transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-300 hover:text-chunix transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                )
                            ))}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Hablemos por WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
