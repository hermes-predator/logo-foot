
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hookz/web';

interface ConfettiCelebrationProps {
  duration?: number;
}

const ConfettiCelebration: React.FC<ConfettiCelebrationProps> = ({ duration = 5000 }) => {
  const [isActive, setIsActive] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  if (!isActive) return null;

  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={300}
      gravity={0.15}
      colors={[
        '#9b87f5', // Primary Purple
        '#7E69AB', // Secondary Purple
        '#6E59A5', // Tertiary Purple
        '#D6BCFA', // Light Purple
        '#FFDEE2', // Soft Pink
        '#FDE1D3', // Soft Peach
        '#D3E4FD', // Soft Blue
        '#8B5CF6', // Vivid Purple
        '#D946EF', // Magenta Pink
        '#F97316', // Bright Orange
        '#33C3F0', // Sky Blue
      ]}
    />
  );
};

export default ConfettiCelebration;
