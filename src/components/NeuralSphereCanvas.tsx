import { useEffect, useRef, useState } from 'react';

interface SphereNode {
  x: number;
  y: number;
  z: number;
  isAccent: boolean;
  phase: number;
}

export function NeuralSphereCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pulseBoost, setPulseBoost] = useState(false);
  const pulseRef = useRef(false);

  useEffect(() => {
    pulseRef.current = pulseBoost;
  }, [pulseBoost]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = 0;
    let width = container.clientWidth || 440;
    let height = container.clientHeight || 440;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(280, rect.width);
      height = Math.max(280, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    // Build Fibonacci lattice on a unit sphere for balanced 3D AI node distribution
    const nodeCount = 72;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const nodes: SphereNode[] = Array.from({ length: nodeCount }, (_, i) => {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return {
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        isAccent: i % 5 === 0,
        phase: i * 0.45,
      };
    });

    // Precompute close synaptic neighbors
    const edges: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const d = Math.hypot(dx, dy, dz);
        if (d < 0.62) {
          edges.push([i, j]);
        }
      }
    }

    let angleY = 0.4;
    let angleX = 0.25;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let time = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetTiltY = nx * 0.35;
      targetTiltX = -ny * 0.35;
    };

    const handlePointerLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const sphereRadius = Math.min(width, height) * 0.34;
      const fov = sphereRadius * 3.1;

      if (!prefersReducedMotion) {
        const speedMult = pulseRef.current ? 1.85 : 1;
        angleY += 0.0042 * speedMult;
        angleX += 0.0014 * speedMult;
        time += 0.032 * speedMult;
      }

      currentTiltX += (targetTiltX - currentTiltX) * 0.06;
      currentTiltY += (targetTiltY - currentTiltY) * 0.06;

      const rotY = angleY + currentTiltY;
      const rotX = angleX + currentTiltX;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Ambient central core aura
      const coreGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, sphereRadius * 1.25);
      coreGrad.addColorStop(0, pulseRef.current ? 'rgba(0, 245, 255, 0.28)' : 'rgba(0, 200, 255, 0.16)');
      coreGrad.addColorStop(0.45, 'rgba(139, 92, 246, 0.09)');
      coreGrad.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Subtle orbital rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.35 + currentTiltY * 0.4);
      ctx.beginPath();
      ctx.ellipse(0, 0, sphereRadius * 1.28, sphereRadius * 0.38, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.rotate(1.05);
      ctx.beginPath();
      ctx.ellipse(0, 0, sphereRadius * 1.18, sphereRadius * 0.32, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Project nodes into 2D
      const projected = nodes.map((n) => {
        // Rotate Y
        const x1 = n.x * cosY - n.z * sinY;
        const z1 = n.x * sinY + n.z * cosY;
        // Rotate X
        const y2 = n.y * cosX - z1 * sinX;
        const z2 = n.y * sinX + z1 * cosX;

        const scale = fov / (fov - z2 * sphereRadius);
        const sx = cx + x1 * sphereRadius * scale;
        const sy = cy + y2 * sphereRadius * scale;
        return { sx, sy, z: z2, scale, isAccent: n.isAccent, phase: n.phase };
      });

      // Draw synaptic edges
      for (const [aIdx, bIdx] of edges) {
        const a = projected[aIdx];
        const b = projected[bIdx];
        const avgZ = (a.z + b.z) * 0.5;
        const depthAlpha = Math.max(0.05, Math.min(0.42, (avgZ + 1.1) * 0.2));

        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.strokeStyle =
          a.isAccent || b.isAccent
            ? `rgba(139, 92, 246, ${depthAlpha})`
            : `rgba(0, 200, 255, ${depthAlpha})`;
        ctx.lineWidth = avgZ > 0.2 ? 1.15 : 0.7;
        ctx.stroke();
      }

      // Draw back-to-front nodes
      const sorted = [...projected].sort((a, b) => a.z - b.z);
      for (const p of sorted) {
        const depth = (p.z + 1) * 0.5;
        const pulse = 0.8 + Math.sin(time + p.phase) * 0.25;
        const r = (p.isAccent ? 3.2 : 2.1) * p.scale * (pulseRef.current ? 1.18 : 1) * pulse;
        const alpha = 0.28 + depth * 0.72;

        if (depth > 0.55) {
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, r * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = p.isAccent
            ? `rgba(139, 92, 246, ${alpha * 0.22})`
            : `rgba(0, 245, 255, ${alpha * 0.22})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent
          ? `rgba(167, 139, 250, ${alpha})`
          : `rgba(0, 245, 255, ${alpha})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={() => setPulseBoost((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setPulseBoost((prev) => !prev);
        }
      }}
      aria-label={
        pulseBoost
          ? 'Interactive 3D neural intelligence sphere in accelerated rotation mode. Click to normalize.'
          : 'Interactive 3D neural intelligence sphere. Move cursor to tilt or click to boost synaptic rotation.'
      }
      className="relative flex h-full min-h-[340px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B1020]/75 backdrop-blur-md transition-colors hover:border-[#00C8FF]/45 lg:min-h-[460px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.12),rgba(139,92,246,0.06)_45%,transparent_72%)]"
      />
      <canvas ref={canvasRef} className="relative z-10 block h-full w-full" />
      <div className="pointer-events-none absolute inset-x-5 bottom-4 z-20 flex items-center justify-between text-xs text-[#94A3B8]">
        <span>Neural Lattice · Interactive 3D Sphere</span>
        <span className="font-mono text-[#00C8FF]">{pulseBoost ? 'Boost Active' : 'Hover / Click'}</span>
      </div>
    </div>
  );
}
