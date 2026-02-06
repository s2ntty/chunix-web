import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PromoBanner } from './components/PromoBanner';
import { MessageCircle } from 'lucide-react';

function App() {
    const whatsappLink = "https://wa.me/5492974309758?text=Hola!%20Quiero%20información%20sobre%20páginas%20web";

    return (
        <Router>
            <div className="min-h-screen bg-dark-bg text-white font-sans overflow-x-hidden flex flex-col">
                <PromoBanner />
                <Navbar />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>

                <Footer />

                {/* Floating WhatsApp Button */}
                <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-[#25D366]/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                        scale: 1.15,
                        boxShadow: "0 0 15px rgba(37, 211, 102, 0.9), 0 0 30px rgba(37, 211, 102, 0.6), 0 0 45px rgba(37, 211, 102, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                        boxShadow: { duration: 0.2 }
                    }}
                >
                    <MessageCircle className="w-8 h-8" />
                </motion.a>
            </div>
        </Router>
    )
}

export default App
