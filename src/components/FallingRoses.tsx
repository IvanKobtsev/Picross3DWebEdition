import React, { useEffect, useRef } from "react";
import rose1 from "../assets/images/rose_small1.png";
import rose2 from "../assets/images/rose_small2.png";
import rose3 from "../assets/images/rose_small3.png";

const particleCount = 1;
const animationSpeed = 0.05;
const particlesMaxSpeed = 20;
const minRoseSize = 30;
const maxRoseSize = 50;
const maxRotationSpeed = 0.001;
const rose1Image = new Image();
rose1Image.src = rose1;
const rose2Image = new Image();
rose2Image.src = rose2;
const rose3Image = new Image();
rose3Image.src = rose3;

const roses = [rose1Image, rose2Image, rose3Image];

class Particle {
  x: number;
  y: number;
  vy: number;
  radius: number;
  colorScale: number;
  rotation: number;
  rotationSpeed: number;
  image: HTMLImageElement;

  constructor(
    x: number,
    y: number,
    vy: number,
    radius: number,
    colorScale: number,
    rotation: number,
    rotationSpeed: number,
    roseImage: number,
  ) {
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.radius = radius;
    this.colorScale = colorScale;
    this.rotation = rotation;
    this.rotationSpeed = rotationSpeed;
    this.image = roses[roseImage];
  }

  update() {
    this.y += this.vy * animationSpeed;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    drawRotatedImage(
      ctx,
      this.image,
      this.x,
      this.y,
      this.rotation,
      this.radius,
      this.colorScale,
    );
  }
}

const drawRotatedImage = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  angle: number,
  size: number,
  colorScale: number,
) => {
  ctx.save(); // Save the current state
  ctx.translate(x, y); // Move to the image position
  ctx.rotate(angle); // Rotate by the given angle
  ctx.filter = `brightness(${colorScale})`;
  ctx.drawImage(image, -size / 2, -size / 2, size, size); // Draw centered
  ctx.restore(); // Restore the previous state
};

const FallingRosesAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.background = "transparent";

    const spawnParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = -100;
        const vy = Math.random() * particlesMaxSpeed + 10;
        const radius = Math.random() * maxRoseSize + minRoseSize;
        const colorScale = Math.random() * 0.4 + 0.6;
        const rotation = Math.random() * Math.PI;
        const rotationSpeed =
          Math.random() * maxRotationSpeed * 2 * vy - maxRotationSpeed * vy;

        const imageChoice = Math.random();
        let image = 0;
        if (imageChoice > 0.7) {
          image = 1;
          if (imageChoice > 0.8) {
            image = 2;
          }
        }

        particles.current.push(
          new Particle(
            x,
            y,
            vy,
            radius,
            colorScale,
            rotation,
            rotationSpeed,
            image,
          ),
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.current.length; ++i) {
        particles.current[i].update();
        particles.current[i].draw(ctx);
        if (particles.current[i].y > canvas.height)
          particles.current.splice(i--, 1);
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const interval = setInterval(spawnParticles, 500);
    animate();

    return () => {
      clearInterval(interval);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", display: "block" }}
    />
  );
};

export default FallingRosesAnimation;
