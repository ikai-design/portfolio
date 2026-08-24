import { useEffect, useRef } from 'react';
import styles from '../../styles/site.module.css';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  sat: number;
  light: number;
  twinklePhase: number;
  twinkleSpeed: number;
  star: boolean;
  starAngle: number;
};

type Ring = {
  x: number;
  y: number;
  life: number;
  maxLife: number;
};

/**
 * Fine sparkling dust that trails the cursor in the home hero.
 * Tiny specks scatter and twinkle; resting spawns settling motes,
 * clicking bursts a small ring, and chaotic movement adds swirl,
 * deeper hues, and rare star sparkles.
 * Disabled on coarse pointers and prefers-reduced-motion.
 */
export function HeroDiffusion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    if (reduceMotion.matches || !finePointer.matches) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const cursor = { x: 0, y: 0, tx: 0, ty: 0, active: false };
    const particles: Particle[] = [];
    const rings: Ring[] = [];
    const MAX_PARTICLES = 350;

    // Interaction state
    let idleFrames = 0;
    let chaos = 0; // 0..1, driven by rapid direction changes
    let lastAngle = 0;
    let hasAngle = false;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pushParticle = (p: Particle) => {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      particles.push(p);
    };

    const makeDust = (
      x: number,
      y: number,
      vx: number,
      vy: number,
      energetic: boolean,
    ): Particle => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      // Light: sky-blue → indigo. Dark: warm filament amber → soft gold.
      const hue = dark
        ? 32 + Math.random() * 18 + chaos * 12
        : 198 + Math.random() * 22 + chaos * 26;
      const star = energetic && Math.random() < 0.08;
      return {
        x,
        y,
        vx,
        vy,
        life: 0,
        maxLife: 60 + Math.random() * 90,
        size: star
          ? 1.4 + Math.random() * 0.8
          : Math.random() < 0.9
            ? 0.3 + Math.random() * 0.7
            : 1.0 + Math.random() * 0.5,
        hue,
        sat: dark ? 70 + Math.random() * 25 + chaos * 10 : 55 + Math.random() * 30 + chaos * 10,
        light: dark ? 62 + Math.random() * 16 : 55 + Math.random() * 18,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.1 + Math.random() * 0.22,
        star,
        starAngle: Math.random() * Math.PI,
      };
    };

    const spawnTrail = (x: number, y: number, speed: number) => {
      const energetic = chaos > 0.35;
      const count = Math.min(10, 2 + Math.floor(speed * 0.5) + Math.floor(chaos * 5));
      for (let i = 0; i < count; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const force = 0.06 + Math.random() * (0.3 + speed * 0.045);
        let vx = Math.cos(angle) * force;
        let vy = Math.sin(angle) * force - 0.05 - Math.random() * 0.08;

        // Chaotic movement: dust swirls around the cursor instead of just scattering
        if (energetic) {
          const dx = x - cursor.x;
          const dy = y - cursor.y;
          const d = Math.hypot(dx, dy) || 1;
          const swirl = (0.5 + Math.random() * 0.7) * chaos;
          vx += (-dy / d) * swirl;
          vy += (dx / d) * swirl;
        }

        pushParticle(
          makeDust(
            x + (Math.random() - 0.5) * 16,
            y + (Math.random() - 0.5) * 16,
            vx,
            vy,
            energetic,
          ),
        );
      }
    };

    // Dust settling in a sunbeam: motes wink in around a resting cursor,
    // slightly bigger and slower than trail dust so the calm moment reads
    const spawnIdleMote = () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 14 + Math.random() * 52;
      const mote = makeDust(
        cursor.x + Math.cos(angle) * dist,
        cursor.y + Math.sin(angle) * dist,
        (Math.random() - 0.5) * 0.08,
        -0.1 - Math.random() * 0.14,
        false,
      );
      mote.size = 0.8 + Math.random() * 0.9;
      mote.maxLife = 110 + Math.random() * 80;
      mote.twinkleSpeed = 0.04 + Math.random() * 0.07;
      mote.light += 6;
      pushParticle(mote);
    };

    const spawnClickBurst = (x: number, y: number) => {
      rings.push({ x, y, life: 0, maxLife: 34 });
      const count = 18;
      for (let i = 0; i < count; i += 1) {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
        const force = 0.8 + Math.random() * 1.4;
        pushParticle(
          makeDust(x, y, Math.cos(angle) * force, Math.sin(angle) * force, true),
        );
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;

      if (!inside) {
        cursor.active = false;
        hasAngle = false;
        return;
      }

      // Chaos metric: accumulate sharp direction changes, scaled by movement
      const mdx = x - cursor.tx;
      const mdy = y - cursor.ty;
      const dist = Math.hypot(mdx, mdy);
      if (dist > 2) {
        const angle = Math.atan2(mdy, mdx);
        if (hasAngle) {
          let delta = Math.abs(angle - lastAngle);
          if (delta > Math.PI) delta = Math.PI * 2 - delta;
          chaos = Math.min(1, chaos + (delta / Math.PI) * Math.min(1, dist / 30) * 0.5);
        }
        lastAngle = angle;
        hasAngle = true;
      }

      cursor.tx = x;
      cursor.ty = y;
      if (!cursor.active) {
        cursor.x = x;
        cursor.y = y;
      }
      cursor.active = true;
      idleFrames = 0;
    };

    const onPointerLeave = () => {
      cursor.active = false;
      hasAngle = false;
    };

    const onPointerDown = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      spawnClickBurst(x, y);
    };

    const drawStar = (p: Particle, alpha: number) => {
      // 4-point sparkle: two thin crossing lines with a bright core
      const r = p.size * 4;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.starAngle + p.life * 0.01);
      ctx.strokeStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light + 18}%, ${alpha * 0.8})`;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(-r, 0);
      ctx.lineTo(r, 0);
      ctx.moveTo(0, -r);
      ctx.lineTo(0, r);
      ctx.stroke();
      ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light + 24}%, ${alpha})`;
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      if (!running) return;
      raf = window.requestAnimationFrame(draw);

      ctx.clearRect(0, 0, width, height);

      cursor.x += (cursor.tx - cursor.x) * 0.22;
      cursor.y += (cursor.ty - cursor.y) * 0.22;

      const speed = Math.hypot(cursor.tx - cursor.x, cursor.ty - cursor.y);
      chaos *= 0.96;

      if (cursor.active) {
        if (speed > 0.6) {
          spawnTrail(cursor.x, cursor.y, speed);
          idleFrames = 0;
        } else {
          idleFrames += 1;
          // After ~0.8s of rest, dust starts settling around the cursor
          if (idleFrames > 48 && idleFrames % 9 === 0) {
            spawnIdleMote();
          }
        }
      }

      // Whisper-faint halo, smaller than before — fades near bottom edge
      if (cursor.active) {
        const dark = document.documentElement.getAttribute('data-theme') === 'dark';
        const edgePad = Math.max(48, height * 0.22);
        const edgeY =
          cursor.y > height - edgePad ? Math.max(0, (height - cursor.y) / edgePad) : 1;
        const haloR = 55 + chaos * 25;
        const halo = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, haloR);
        if (dark) {
          halo.addColorStop(0, `rgba(255, 170, 70, ${(0.07 + chaos * 0.04) * edgeY})`);
          halo.addColorStop(1, 'rgba(255, 170, 70, 0)');
        } else {
          halo.addColorStop(0, `rgba(150, 200, 240, ${(0.05 + chaos * 0.03) * edgeY})`);
          halo.addColorStop(1, 'rgba(150, 200, 240, 0)');
        }
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, haloR, 0, Math.PI * 2);
        ctx.fill();
      }

      // Click ripples: one thin expanding ring
      for (let i = rings.length - 1; i >= 0; i -= 1) {
        const ring = rings[i];
        ring.life += 1;
        if (ring.life >= ring.maxLife) {
          rings.splice(i, 1);
          continue;
        }
        const t = ring.life / ring.maxLife;
        const eased = 1 - (1 - t) ** 3;
        const radius = 6 + eased * 52;
        const edgePad = Math.max(48, height * 0.22);
        const edgeY =
          ring.y > height - edgePad ? Math.max(0, (height - ring.y) / edgePad) : 1;
        const dark = document.documentElement.getAttribute('data-theme') === 'dark';
        ctx.strokeStyle = dark
          ? `hsla(35, 85%, 62%, ${(1 - t) * 0.4 * edgeY})`
          : `hsla(205, 70%, 65%, ${(1 - t) * 0.35 * edgeY})`;
        ctx.lineWidth = 1 - t * 0.6;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.life += 1;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        const age = p.life / p.maxLife;

        p.vx += (Math.random() - 0.5) * 0.04;
        p.vy += (Math.random() - 0.5) * 0.04 - 0.0015;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;

        const twinkle = 0.5 + 0.5 * Math.sin(p.twinklePhase + p.life * p.twinkleSpeed);
        const fade = age < 0.1 ? age / 0.1 : 1 - (age - 0.1) / 0.9;
        // Dissolve only toward the bottom of the canvas; sides/top stay full-bleed
        const edgePad = Math.max(48, height * 0.22);
        const edgeY =
          p.y > height - edgePad ? Math.max(0, (height - p.y) / edgePad) : 1;
        const alpha = Math.max(0, fade) * twinkle * edgeY;

        if (alpha < 0.01) continue;

        if (p.star) {
          drawStar(p, alpha);
          continue;
        }

        // Soft glow halo around the grain
        const glowR = p.size * 4.5;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        glow.addColorStop(0, `hsla(${p.hue}, ${p.sat}%, ${p.light + 12}%, ${alpha * 0.3})`);
        glow.addColorStop(1, `hsla(${p.hue}, ${p.sat}%, ${p.light}%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Bright crisp core — the visible speck of dust
        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${alpha * 0.95})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    wrap.addEventListener('pointerleave', onPointerLeave);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      wrap.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.heroDiffusion} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.heroDiffusionCanvas} />
    </div>
  );
}
