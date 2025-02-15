import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  direction: number;
}

export function PageTransition({ children, direction }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ x: 300 * direction, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300 * direction, opacity: 0 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
      className="absolute w-full h-full"
    >
      {children}
    </motion.div>
  );
}
