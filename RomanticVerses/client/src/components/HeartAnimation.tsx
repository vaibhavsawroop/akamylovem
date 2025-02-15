import { motion } from 'framer-motion';

const generateHearts = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const randomX = Math.random() * 300 - 150; // -150 to 150
    const randomY = Math.random() * 300 - 150; // -150 to 150
    const scale = 0.3 + Math.random() * 0.7; // 0.3 to 1
    const rotation = Math.random() * 360; // 0 to 360
    const delay = Math.random() * 0.2; // 0 to 0.2s delay

    return (
      <motion.div
        key={i}
        initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
        animate={{
          scale: [0, scale, 0],
          x: [0, randomX],
          y: [0, randomY],
          rotate: [0, rotation],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.6, 1],
          delay,
          ease: "easeOut",
        }}
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="rgba(244, 63, 94, 0.8)"
          />
        </svg>
      </motion.div>
    );
  });
};

const generateFlowers = (count: number) => {
  const flowerTypes = [
    // Simple daisy
    "M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z",
    // Rose-like flower
    "M12 2C15 2 18 5 18 8C21 8 24 11 24 14C24 17 21 20 18 20C18 23 15 26 12 26C9 26 6 23 6 20C3 20 0 17 0 14C0 11 3 8 6 8C6 5 9 2 12 2Z",
    // Simple tulip
    "M12 2C14 6 18 8 18 12C18 16 15 20 12 20C9 20 6 16 6 12C6 8 10 6 12 2Z"
  ];

  return Array.from({ length: count }, (_, i) => {
    const randomX = Math.random() * 400 - 200; // -200 to 200
    const randomY = Math.random() * 400 - 200; // -200 to 200
    const rotation = Math.random() * 720 - 360; // -360 to 360
    const delay = Math.random() * 0.3;
    const duration = 1.5 + Math.random() * 0.5;
    const flowerPath = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

    return (
      <motion.div
        key={`flower-${i}`}
        initial={{ scale: 0, x: 0, y: 0, rotate: 0, opacity: 1 }}
        animate={{
          scale: [0, 1, 0.8, 0],
          x: [0, randomX],
          y: [0, randomY],
          rotate: [0, rotation],
          opacity: [1, 1, 0.8, 0],
        }}
        transition={{
          duration,
          delay,
          times: [0, 0.4, 0.8, 1],
          ease: "easeOut",
        }}
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d={flowerPath}
            fill="rgba(251, 113, 133, 0.8)"
          />
        </svg>
      </motion.div>
    );
  });
};

export function HeartAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {generateHearts(20)}
      {generateFlowers(15)}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 1],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.6, 1],
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="rgba(244, 63, 94, 0.6)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}