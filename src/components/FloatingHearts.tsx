import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RISADAS = ['😂', '🤣', '😆', '😹', 'kkkk', 'KKKKK', 'hahaha', '🤭', 'rsrs'];

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number; risada: string }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      risada: RISADAS[Math.floor(Math.random() * RISADAS.length)],
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            rotate: [-10, 10, -10],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
          }}
          style={{
            left: `${heart.x}%`,
            position: 'absolute',
          }}
          className="text-2xl font-bold text-amber-500 whitespace-nowrap"
        >
          {heart.risada}
        </motion.div>
      ))}
    </div>
  );
}
