'use client'
import React, { useRef, useEffect,  } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const elementColors = '#ff18378c';

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;
    const numElements = 6;

    const elements = Array.from({ length: numElements }, () =>
      generateRandomElement()
    );

    function generateRandomElement() {
      const type = Math.random() < 0.5 ? 'square' : 'circle';
      const size = Math.random() * 200 + 30;
      const x = Math.random() * (canvas.width - size) + size / 2;
      const y = Math.random() * (canvas.height - size) + size / 2;
      const dx = (Math.random() - 0.5) * 3;
      const dy = (Math.random() - 0.5) * 3;

      return { type, size, x, y, dx, dy };
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach((element) => {
        const { type, x, y, dx, dy, size } = element;

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

        if (x + dx > canvas.width - size / 2 || x + dx < size / 2) {
          element.dx = -dx;
        }
        if (y + dy > canvas.height - size / 2 || y + dy < size / 2) {
          element.dy = -dy;
        }

        element.x += dx;
        element.y += dy;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      className='opacity-50 fixed -z-50 top-0 left-0'
      ref={canvasRef}
    />
  );
};

export default CanvasComponent;
