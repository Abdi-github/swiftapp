import { useEffect, useRef, useState } from 'react';

class Particle {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.closeEnoughTarget = 100;
    this.maxSpeed = 1;
    this.maxForce = 0.1;
    this.particleSize = 10;
    this.isKilled = false;
    this.startColor = { r: 84, g: 215, b: 255 };
    this.targetColor = { r: 84, g: 215, b: 255 };
    this.colorWeight = 0;
    this.colorBlendRate = 0.01;
  }

  move() {
    let proximityMult = 1;
    const distance = Math.hypot(this.pos.x - this.target.x, this.pos.y - this.target.y);

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };

    const magnitude = Math.hypot(towardsTarget.x, towardsTarget.y);
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult;
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };

    const steerMagnitude = Math.hypot(steer.x, steer.y);
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce;
      steer.y = (steer.y / steerMagnitude) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx) {
    if (this.colorWeight < 1) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1);
    }

    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    };

    ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
  }

  kill(width, height) {
    if (this.isKilled) return;

    const randomPos = generateRandomPos(width / 2, height / 2, (width + height) / 2);
    this.target.x = randomPos.x;
    this.target.y = randomPos.y;
    this.startColor = {
      r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
      g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
      b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
    };
    this.targetColor = { r: 0, g: 0, b: 0 };
    this.colorWeight = 0;
    this.isKilled = true;
  }
}

const generateRandomPos = (x, y, mag) => {
  const randomX = Math.random() * 1000;
  const randomY = Math.random() * 500;
  const direction = {
    x: randomX - x,
    y: randomY - y,
  };
  const magnitude = Math.hypot(direction.x, direction.y);

  if (magnitude > 0) {
    direction.x = (direction.x / magnitude) * mag;
    direction.y = (direction.y / magnitude) * mag;
  }

  return {
    x: x + direction.x,
    y: y + direction.y,
  };
};

const ParticleGreeting = ({ words, onComplete }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const frameCountRef = useRef(0);
  const wordIndexRef = useRef(0);
  const nextWordChangeFrameRef = useRef(0);
  const openingWordsRemainingRef = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);

    const handleChange = () => setPrefersReducedMotion(media.matches);
    media.addEventListener?.('change', handleChange);

    return () => media.removeEventListener?.('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    particlesRef.current = [];
    frameCountRef.current = 0;
    wordIndexRef.current = 0;
    nextWordChangeFrameRef.current = 560;
    openingWordsRemainingRef.current = Math.min(2, words.length);

    const resizeCanvas = () => {
      const maxCanvasWidth = 1200;
      const maxCanvasHeight = 700;
      canvas.width = Math.min(window.innerWidth, maxCanvasWidth);
      canvas.height = Math.min(window.innerHeight, maxCanvasHeight);
    };

    const nextWord = (word) => {
      const offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width = canvas.width;
      offscreenCanvas.height = canvas.height;
      const offscreenCtx = offscreenCanvas.getContext('2d');
      offscreenCtx.fillStyle = 'white';
      const fontSize = Math.max(54, Math.min(canvas.width / word.length, canvas.height * 0.22));
      offscreenCtx.font = `900 ${fontSize}px Arial`;
      offscreenCtx.textAlign = 'center';
      offscreenCtx.textBaseline = 'middle';
      offscreenCtx.fillText(word, canvas.width / 2, canvas.height / 2);

      const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const colorSteps = [
        { r: 84, g: 215, b: 255 },
        { r: 246, g: 193, b: 119 },
        { r: 185, g: 236, b: 255 },
      ];
      const newColor = colorSteps[wordIndexRef.current % colorSteps.length];
      const particles = particlesRef.current;
      let particleIndex = 0;
      const coordsIndexes = [];

      // for (let i = 0; i < pixels.length; i += 10 * 4) {
      //   coordsIndexes.push(i);
      // }
      for (let i = 0; i < pixels.length; i += 7 * 4) {
        coordsIndexes.push(i);
      }

      for (let i = coordsIndexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]];
      }

      for (const coordIndex of coordsIndexes) {
        const alpha = pixels[coordIndex + 3];

        if (alpha <= 0) continue;

        const x = (coordIndex / 4) % canvas.width;
        const y = Math.floor(coordIndex / 4 / canvas.width);
        let particle;

        if (particleIndex < particles.length) {
          particle = particles[particleIndex];
          particle.isKilled = false;
          particleIndex += 1;
        } else {
          particle = new Particle();
          const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2);
          particle.pos.x = randomPos.x;
          particle.pos.y = randomPos.y;
          // particle.maxSpeed = Math.random() * 6 + 4;
          particle.maxSpeed = Math.random() * 2.5 + 1.8;
          // particle.maxForce = particle.maxSpeed * 0.05;
          particle.maxForce = particle.maxSpeed * 0.035;
          particle.colorBlendRate = Math.random() * 0.0275 + 0.0025;
          particles.push(particle);
        }

        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        };
        particle.targetColor = newColor;
        particle.colorWeight = 0;
        particle.target.x = x;
        particle.target.y = y;
      }

      for (let i = particleIndex; i < particles.length; i++) {
        particles[i].kill(canvas.width, canvas.height);
      }
    };

    const animate = () => {
      const ctx = canvas.getContext('2d');
      const particles = particlesRef.current;

      // ctx.fillStyle = 'rgba(6, 9, 20, 0.18)';
      ctx.fillStyle = 'rgba(6, 9, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.move();
        particle.draw(ctx);

        if (
          particle.isKilled &&
          (particle.pos.x < 0 ||
            particle.pos.x > canvas.width ||
            particle.pos.y < 0 ||
            particle.pos.y > canvas.height)
        ) {
          particles.splice(i, 1);
        }
      }

      frameCountRef.current += 1;
      if (frameCountRef.current >= nextWordChangeFrameRef.current) {
        const openingHoldFrames = 560;
        const regularHoldFrames = 300;

        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        nextWord(words[wordIndexRef.current]);
        openingWordsRemainingRef.current = Math.max(openingWordsRemainingRef.current - 1, 0);
        nextWordChangeFrameRef.current =
          frameCountRef.current +
          (openingWordsRemainingRef.current > 0 ? openingHoldFrames : regularHoldFrames);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    nextWord(words[0]);
    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [prefersReducedMotion, words]);

  useEffect(() => {
    // const timeout = window.setTimeout(onComplete, prefersReducedMotion ? 1800 : 5200);
    // const timeout = window.setTimeout(onComplete, prefersReducedMotion ? 2500 : 9000);
    // return () => window.clearTimeout(timeout);
  }, [onComplete, prefersReducedMotion]);

  return (
    <section className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-backGround">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(84,215,255,0.16),transparent_34%)]" />
      <div className="relative z-10 flex h-screen w-screen items-center justify-center text-center">
        {prefersReducedMotion ? (
          <h1 className="px-4 text-5xl font-black text-white tablet:text-7xl">
            Abdulkadir Ahmed
          </h1>
        ) : (
          <canvas
            ref={canvasRef}
            className="h-full w-full"
            style={{ objectFit: 'contain' }}
            aria-label="Animated greeting"
          />
        )}
        <button
          type="button"
          onClick={onComplete}
          className="primary-button absolute bottom-1/3 left-1/2 -translate-x-1/2"
        >
          Enter portfolio
        </button>
      </div>
    </section>
  );
};

export default ParticleGreeting;
