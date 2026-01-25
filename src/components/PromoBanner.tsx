import { motion } from 'framer-motion';

export function PromoBanner() {
    const promoText = "TU PÁGINA WEB PROFESIONAL DESDE $200.000 • PRESUPUESTO SIN COMPROMISO";

    return (
        <div className="fixed top-0 left-0 w-full h-10 bg-chunix text-black z-[60] overflow-hidden flex items-center shadow-lg">
            <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-chunix to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-chunix to-transparent z-10"></div>

            <motion.div
                className="whitespace-nowrap flex gap-0 min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {/* Duplicated content for seamless loop */}
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 px-4 font-bold text-sm tracking-wider uppercase">
                        {promoText}
                        <span className="w-1.5 h-1.5 rounded-full bg-black/40"></span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
