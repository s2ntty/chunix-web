import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
    const whatsappLink = "https://wa.me/5492974309758?text=Hola!%20Quiero%20información%20sobre%20páginas%20web";

    return (
        <footer className="bg-dark-surface pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-3xl font-bold tracking-tighter block mb-6">
                            Chunix<span className="text-chunix">CODE</span>
                        </span>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Páginas web profesionales para emprendedores, comercios y profesionales.
                            Simples, efectivas y sin complicaciones.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/s2nttyy" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-chunix hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/santino-soto" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-chunix hover:text-black transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:santinosoto21@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-chunix hover:text-black transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Servicios</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="/#services" className="hover:text-chunix transition-colors">Páginas web simples</a></li>
                            <li><a href="/#services" className="hover:text-chunix transition-colors">Páginas web completas</a></li>
                            <li><a href="/#services" className="hover:text-chunix transition-colors">Sistemas a medida</a></li>
                            <li><a href="/#services" className="hover:text-chunix transition-colors">Tiendas online</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="/#about" className="hover:text-chunix transition-colors">Sobre mí</a></li>
                            <li><a href="/#contact" className="hover:text-chunix transition-colors">Escribime</a></li>
                            <li>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#25D366] transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2026 Chunix Code. Hecho con ❤️ en Argentina.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
