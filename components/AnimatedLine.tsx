"use client";

import { useMemo } from "react";

/**
 * Lightweight animated time-series line. The line draws left-to-right and repeats every 30s.
 */
export function AnimatedLine({
  title = "Customer case study: stock returns",
}: {
  title?: string;
  subtitle?: string;
}) {
  const points = useMemo(() => {
    const n = 80;
    const xs: number[] = [];
    const ys: number[] = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const y =
        0.52 +
        0.18 * Math.sin(2 * Math.PI * (t * 1.2 + 0.08)) +
        0.10 * Math.sin(2 * Math.PI * (t * 3.4 + 0.21)) +
        0.10 * (t - 0.5);
      xs.push(t);
      ys.push(y);
    }
    const ymin = Math.min(...ys);
    const ymax = Math.max(...ys);
    const yn = ys.map((v) => (v - ymin) / (ymax - ymin || 1));
    return xs.map((t, i) => ({ x: t, y: yn[i] }));
  }, []);

  const W = 640;
  const H = 220;
  const padX = 22;
  const padY = 18;

  const pathD = useMemo(() => {
    const x = (t: number) => padX + t * (W - 2 * padX);
    const y = (v: number) => padY + (1 - v) * (H - 2 * padY);
    return points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.x).toFixed(2)} ${y(p.y).toFixed(2)}`)
      .join(" ");
  }, [points]);

  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mt-1 text-base text-muted">{title}</div>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-[180px] w-full" role="img" aria-label="Animated line graph">
          <defs>
            <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(205 95% 60%)" stopOpacity="0.0" />
              <stop offset="15%" stopColor="hsl(205 95% 60%)" stopOpacity="0.9" />
              <stop offset="60%" stopColor="hsl(254 92% 70%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(254 92% 70%)" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(205 95% 60%)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="hsl(205 95% 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {Array.from({ length: 7 }).map((_, i) => {
            const y = (H / 7) * (i + 1);
            return (
              <line key={i} x1="0" x2={W} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            );
          })}

          <path
            d={`${pathD} L ${W - padX} ${H - padY} L ${padX} ${H - padY} Z`}
            fill="url(#fillGrad)"
            opacity="0.9"
          />

          <path
            d={pathD}
            fill="none"
            stroke="url(#strokeGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="orx-draw"
          />
        </svg>
      </div>
    </div>
  );
}
