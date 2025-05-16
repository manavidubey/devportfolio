import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Lettergraphic() {
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.innerText = textRef.current.innerText
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="lettergraphic"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 ref={textRef} className="glitch-text">MANAVI</h3>
      <p className="subtitle">Full Stack Developer</p>
    </motion.div>
  );
} 