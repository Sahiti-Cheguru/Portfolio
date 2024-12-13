import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30"
      animate={{
        background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.10), transparent 80%)`
      }}
    />
  );
}