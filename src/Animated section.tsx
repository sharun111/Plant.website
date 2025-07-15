'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimatedSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration: 0.8,
        type: 'spring',
        stiffness: 60,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  );
}
