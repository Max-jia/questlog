"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Theme {
  colors: string[];
  particleCount: number;
  sizeRange: [number, number];
  speedRange: [number, number];
  opacityRange: [number, number];
  lifeRange: [number, number];
  connectParticles: boolean;
  connectDistance: number;
  direction: "up" | "random" | "down";
}

const THEMES: Record<string, Theme> = {
  default: {
    colors: ["rgba(161,255,79,", "rgba(199,79,255,"],
    particleCount: 40,
    sizeRange: [1, 3],
    speedRange: [0.2, 0.6],
    opacityRange: [0.03, 0.08],
    lifeRange: [300, 600],
    connectParticles: false,
    connectDistance: 0,
    direction: "random",
  },
  "meccha-chameleon": {
    colors: ["rgba(161,255,79,", "rgba(199,79,255,", "rgba(245,158,11,", "rgba(6,182,212,"],
    particleCount: 35,
    sizeRange: [2, 6],
    speedRange: [0.15, 0.4],
    opacityRange: [0.04, 0.1],
    lifeRange: [400, 800],
    connectParticles: false,
    connectDistance: 0,
    direction: "random",
  },
  "subnautica-2": {
    colors: ["rgba(6,182,212,", "rgba(8,145,178,", "rgba(34,211,238,", "rgba(255,255,255,"],
    particleCount: 50,
    sizeRange: [1, 4],
    speedRange: [0.3, 0.8],
    opacityRange: [0.03, 0.07],
    lifeRange: [200, 500],
    connectParticles: false,
    connectDistance: 0,
    direction: "up",
  },
  palworld: {
    colors: ["rgba(251,191,36,", "rgba(245,158,11,", "rgba(217,119,6,", "rgba(255,255,200,"],
    particleCount: 45,
    sizeRange: [1, 3],
    speedRange: [0.2, 0.5],
    opacityRange: [0.04, 0.09],
    lifeRange: [350, 700],
    connectParticles: true,
    connectDistance: 120,
    direction: "random",
  },
  "gta-6": {
    colors: ["rgba(236,72,153,", "rgba(245,158,11,", "rgba(255,255,200,", "rgba(6,182,212,"],
    particleCount: 30,
    sizeRange: [1, 2],
    speedRange: [0.1, 0.3],
    opacityRange: [0.04, 0.1],
    lifeRange: [500, 1000],
    connectParticles: false,
    connectDistance: 0,
    direction: "random",
  },
  "moonlight-peaks": {
    colors: ["rgba(168,85,247,", "rgba(236,72,153,", "rgba(255,255,255,", "rgba(192,132,252,"],
    particleCount: 55,
    sizeRange: [1, 3],
    speedRange: [0.1, 0.35],
    opacityRange: [0.03, 0.08],
    lifeRange: [400, 800],
    connectParticles: true,
    connectDistance: 100,
    direction: "up",
  },
  "ac-black-flag": {
    colors: ["rgba(245,158,11,", "rgba(251,191,36,", "rgba(6,182,212,", "rgba(255,255,255,"],
    particleCount: 35,
    sizeRange: [1, 3],
    speedRange: [0.15, 0.4],
    opacityRange: [0.03, 0.07],
    lifeRange: [300, 600],
    connectParticles: false,
    connectDistance: 0,
    direction: "random",
  },
};

function createParticle(w: number, h: number, theme: Theme, startFromBottom?: boolean): Particle {
  const color = theme.colors[Math.floor(Math.random() * theme.colors.length)];
  const size = theme.sizeRange[0] + Math.random() * (theme.sizeRange[1] - theme.sizeRange[0]);
  const maxLife = theme.lifeRange[0] + Math.random() * (theme.lifeRange[1] - theme.lifeRange[0]);

  let x: number, y: number;
  if (startFromBottom) {
    x = Math.random() * w;
    y = h + size;
  } else {
    x = Math.random() * w;
    y = Math.random() * h;
  }

  const speed = theme.speedRange[0] + Math.random() * (theme.speedRange[1] - theme.speedRange[0]);

  return {
    x,
    y,
    vx: (Math.random() - 0.5) * speed * 0.5,
    vy: startFromBottom ? -(speed * 0.5 + Math.random() * speed) : (Math.random() - 0.5) * speed,
    size,
    opacity: theme.opacityRange[0] + Math.random() * (theme.opacityRange[1] - theme.opacityRange[0]),
    color,
    life: Math.random() * maxLife,
    maxLife,
  };
}

export default function GameBackground({ game }: { game?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  const theme = THEMES[game || ""] || THEMES.default;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init particles
    const particles: Particle[] = [];
    for (let i = 0; i < theme.particleCount; i++) {
      particles.push(createParticle(w, h, theme));
    }
    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Life management
        p.life++;
        const lifeRatio = p.life / p.maxLife;
        const currentOpacity = p.opacity * (1 - lifeRatio);

        // Reset dead particles
        if (p.life >= p.maxLife || p.y < -20 || p.y > h + 20 || p.x < -20 || p.x > w + 20) {
          particles[i] = createParticle(w, h, theme, theme.direction === "up");
          continue;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.fill();
      }

      // Draw connections for connect-theme
      if (theme.connectParticles) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < theme.connectDistance) {
              const alpha = (1 - dist / theme.connectDistance) * 0.04;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
