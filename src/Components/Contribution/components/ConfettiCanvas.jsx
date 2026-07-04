import { useEffect, useRef } from "react";

export default function ConfettiCanvas({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    const colors = ["#FFD54A", "#FACC15", "#EAB308", "#FFFFFF", "#F59E0B"];

    const particles = Array.from({ length: 350 }, () => ({
      x: Math.random() * canvas.width,

      y: Math.random() * -canvas.height,

      size: Math.random() * 10 + 4,

      speedX: Math.random() * 6 - 3,

      speedY: Math.random() * 4 + 3,

      rotation: Math.random() * 360,

      rotationSpeed: Math.random() * 8 - 4,

      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;

        particle.y += particle.speedY;

        particle.rotation += particle.rotationSpeed;

        ctx.save();

        ctx.translate(particle.x, particle.y);

        ctx.rotate((particle.rotation * Math.PI) / 180);

        ctx.fillStyle = particle.color;

        ctx.fillRect(
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size,
        );

        ctx.restore();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
