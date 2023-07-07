import React, { useRef, useEffect } from 'react';
import './index.css';

const GradientCircle = ({ className }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = circleRef.current;
      const { clientX, clientY } = e;

      // Calculate the movement values based on the mouse position
      // You can adjust these values to achieve the desired effect
      const moveX = (window.innerWidth / 2 - clientX) / 15;
      const moveY = (window.innerHeight / 2 - clientY) / 4;

      // Update the CSS variables dynamically
      circle.style.setProperty('--moveX', `${moveX}px`);
      circle.style.setProperty('--moveY', `${moveY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="path_img-wrapper">
      <div className={`circle ${className}`} ref={circleRef}></div>
    </div>
  );
};

export default GradientCircle;
