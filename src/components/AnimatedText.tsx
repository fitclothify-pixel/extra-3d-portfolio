import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const AnimatedCharacter: React.FC<CharProps> = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = Math.min(1, start + 0.05); // quick smooth transition per character
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible select-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = Array.from(text);
  const total = characters.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {characters.map((char, index) => {
        if (char === ' ') {
          return <span key={index}> </span>;
        }
        return (
          <AnimatedCharacter
            key={index}
            char={char}
            index={index}
            total={total}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};
