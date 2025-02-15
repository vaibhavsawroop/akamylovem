import { motion } from 'framer-motion';
import { TypewriterEffect } from './TypewriterEffect';
import { ScrollArea } from './ui/scroll-area';

interface BookPageProps {
  title: string;
  content: string;
  pageNumber?: number;
  isCover?: boolean;
}

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: 0.5 + Math.random() * 0.5,
            opacity: 0.3 + Math.random() * 0.4,
          }}
          animate={{
            y: [null, -100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-pink-200">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const FloatingFlowers = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: 0.4 + Math.random() * 0.4,
            opacity: 0.2 + Math.random() * 0.3,
          }}
          animate={{
            y: [null, -100],
            rotate: [0, 720],
          }}
          transition={{
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-rose-200">
            <path d="M12 2l2.4 7.2L22 11l-5.8 4.8L18.4 22l-6.4-4.8L5.6 22l2.2-6.2L2 11l7.6-1.8z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export function BookPage({ title, content, pageNumber, isCover = false }: BookPageProps) {
  return (
    <motion.div 
      className={`relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12
        ${isCover ? 'bg-gradient-to-br from-rose-200 via-pink-100 to-rose-100' : 'bg-gradient-to-br from-rose-50 via-white to-pink-50'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FloatingHearts />
      <FloatingFlowers />

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hearts" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 10 C20 0, 0 0, 0 10 A10 10 0 0 0 20 30 A10 10 0 0 0 40 10 C40 0, 20 0, 20 10" fill="currentColor"/>
            </pattern>
            <pattern id="flowers" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25 10 C25 0, 15 0, 15 10 C15 20, 25 20, 25 10 M25 10 C25 0, 35 0, 35 10 C35 20, 25 20, 25 10 M25 10 C25 0, 25 0, 25 10 C25 20, 25 20, 25 10" fill="currentColor"/>
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(244, 63, 94)', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(251, 113, 133)', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#gradient)"/>
          <rect width="100%" height="100%" fill="url(#hearts)"/>
          <rect width="100%" height="100%" fill="url(#flowers)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl w-full mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-rose-100" style={{ maxHeight: '80vh' }}>
        <ScrollArea className="h-full">
          <h2 className={`text-center mb-8 font-playfair
            ${isCover ? 'text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent' : 
            'text-2xl md:text-3xl text-gray-800 italic'}`}>
            {title}
          </h2>

          <div className="prose prose-rose max-w-none">
            <TypewriterEffect text={content} speed={30} />
          </div>

          {!isCover && (
            <div className="mt-4 text-right text-gray-400 font-playfair italic">
              {pageNumber}
            </div>
          )}
        </ScrollArea>
      </div>
    </motion.div>
  );
}