"use client"

import React, { useEffect } from 'react';

// Generate random number between min and max
const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// Generate random duration for animation
const generateRandomDuration = () => {
  return getRandomNumber(5, 20);
};

// Generate random size for stars
const generateRandomSize = () => {
  return getRandomNumber(1, 3);
};

interface FallingStarsProps {
  count: number;
}

const FallingStars: React.FC<FallingStarsProps> = ({ count }) => {
  useEffect(() => {
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${getRandomNumber(0, 100)}%`;
        star.style.animationDuration = `${generateRandomDuration()}s`;
        star.style.width = `${generateRandomSize()}px`;
        star.style.height = `${generateRandomSize()}px`;
        starsContainer.appendChild(star);
      }
    }

    return () => {
      // Clean up stars when component unmounts
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => star.remove());
    };
  }, [count]);

  return <div id="stars-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default FallingStars;
