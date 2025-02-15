import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bookContent } from '@/lib/content';
import { BookPage } from '@/components/BookPage';
import { PageTransition } from '@/components/PageTransition';
import { HeartAnimation } from '@/components/HeartAnimation';
import { useSwipeable } from 'react-swipeable';

export function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < bookContent.length - 1) {
        setDirection(1);
        setCurrentPage(prev => prev + 1);
        setShowHeart(true);
        setTimeout(() => setShowHeart(false), 1000);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 0) {
        setDirection(-1);
        setCurrentPage(prev => prev - 1);
        setShowHeart(true);
        setTimeout(() => setShowHeart(false), 1000);
      }
    },
    trackMouse: true,
    swipeDuration: 500,
    preventScrollOnSwipe: true
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && currentPage < bookContent.length - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 1000);
    } else if (e.key === 'ArrowLeft' && currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 1000);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...handlers}
    >
      <AnimatePresence mode="wait">
        <PageTransition key={currentPage} direction={direction}>
          <BookPage
            title={bookContent[currentPage].title}
            content={bookContent[currentPage].content}
            pageNumber={!bookContent[currentPage].iscover ? currentPage : undefined}
            isCover={bookContent[currentPage].iscover}
          />
        </PageTransition>
      </AnimatePresence>

      {showHeart && <HeartAnimation />}
    </div>
  );
}