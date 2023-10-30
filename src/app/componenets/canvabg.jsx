'use client'
import React, { useRef, useEffect } from 'react';

class CanvasComponent extends React.Component {
  canvasRef = null;
  elementColors = '#ff18378c';
  opacity = 0;

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.elements = [];
    this.numElements = 5; // We'll have 5 squares and 5 circles

    // Generate a random element with the given type (circle or square)
    const generateRandomElement = (type) => {
      const size = Math.random() * 200 + 30;
      const x = Math.random() * (window.innerWidth - size) + size / 2;
      const y = Math.random() * (window.innerHeight - size) + size / 2;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;

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
    for (let i = 0; i < this.numElements; i++) {
      this.elements.push(generateRandomElement('square'));
      this.elements.push(generateRandomElement('circle'));
    }
  }

  handleResize = () => {
    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  componentDidMount() {
    this.canvasRef.current.width = window.innerWidth;
    this.canvasRef.current.height = window.innerHeight;

    window.addEventListener('resize', this.handleResize);
    this.animate();

    // Start the opacity animation after a short delay (adjust the delay time as desired)
    setTimeout(() => {
      this.opacity = 1;
      this.forceUpdate(); // Re-render to apply opacity change
    }, 500);
  }

  animate = () => {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    this.elements.forEach((element) => {
      const { type, x, y, dx, dy, size } = element;

      context.beginPath();
      if (type === 'circle') {
        context.arc(x, y, size / 2, 0, Math.PI * 2);
        context.fillStyle = this.elementColors;
        context.fill();
      } else if (type === 'square') {
        context.rect(x - size / 2, y - size / 2, size, size);
        context.strokeStyle = this.elementColors;
        context.stroke();
      }
      context.closePath();

      if (type === 'circle' || type === 'square') {
        if (x + dx > canvas.width - size / 2 || x + dx < size / 2) {
          element.dx = -dx;
        }
        if (y + dy > canvas.height - size / 2 || y + dy < size / 2) {
          element.dy = -dy;
        }

        element.x += dx;
        element.y += dy;
      }
    });

    requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{ opacity: this.opacity, transition: 'opacity 0.5s ease' }}
        className="fixed top-0 left-0 -z-50"
      />
    );
  }
}

export default CanvasComponent;
