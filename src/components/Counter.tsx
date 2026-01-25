import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
    to: number;
    from?: number;
    duration?: number;
    suffix?: string;
}

export const Counter = ({ to, from = 0, duration = 1.5, suffix = "" }: CounterProps) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!nodeRef.current || !isInView) return;

        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration: duration, // Fast duration
            ease: "circOut",
            onUpdate: (value) => {
                node.textContent = Math.floor(value) + suffix;
            },
        });

        return () => controls.stop();
    }, [to, from, duration, suffix, isInView]);

    return <span ref={nodeRef} />;
};
