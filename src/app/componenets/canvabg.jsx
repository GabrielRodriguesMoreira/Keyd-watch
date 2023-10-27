'use client'
import React, { useRef, useEffect, useState } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const elementColors = '#ff18378c';
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const elements = [];
    const numElements = 5; // We'll have 5 squares and 5 circles

    // Generate a random element with the given type (circle or square)
    const generateRandomElement = (type) => {
      const size = Math.random() * 200 + 30;
      const x = Math.random() * (window.innerWidth - size) + size / 2;
      const y = Math.random() * (window.innerHeight - size) + size / 2;
      const dx = (Math.random() - 0.5) * 3;
      const dy = (Math.random() - 0.5) * 3;

      return {
        type,
        size,
        x,
        y,
        dx,
        dy,
      };
    };

    // Generate 5 squares and 5 circles separately
    for (let i = 0; i < numElements; i++) {
      elements.push(generateRandomElement('square'));
      elements.push(generateRandomElement('circle'));
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach((element) => {
        const { type, x, y, dx, dy, size } = element;

        // Draw the element (filled or hollow circle/square)
        context.beginPath();
        if (type === 'circle') {
          context.arc(x, y, size / 2, 0, Math.PI * 2);
          context.fillStyle = elementColors;
          context.fill();
        } else if (type === 'square') {
          context.rect(x - size / 2, y - size / 2, size, size);
          context.strokeStyle = elementColors;
          context.stroke();
        }
        context.closePath();

        // Check for collision with the borders
        if (type === 'circle') {
          if (x + dx > canvas.width - size / 2 || x + dx < size / 2) {
            element.dx = -dx; // Reverse x direction
          }
          if (y + dy > canvas.height - size / 2 || y + dy < size / 2) {
            element.dy = -dy; // Reverse y direction
          }
        } else if (type === 'square') {
          if (x + dx > canvas.width - size / 2 || x + dx < size / 2) {
            element.dx = -dx; // Reverse x direction
          }
          if (y + dy > canvas.height - size / 2 || y + dy < size / 2) {
            element.dy = -dy; // Reverse y direction
          }
        }

        // Move the element
        element.x += dx;
        element.y += dy;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Start the opacity animation after a short delay (adjust the delay time as desired)
    setTimeout(() => {
      setOpacity(1);
    }, 500);

    // Cleanup function to stop animation and remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity: opacity, transition: 'opacity 0.5s ease' }}
      className="fixed top-0 left-0 -z-10"
    />
  );
};

export default CanvasComponent;
