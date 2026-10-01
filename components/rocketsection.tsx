"use client";

import type { CSSProperties } from "react";
import { Pause } from "lucide-react";

/* ============================================================
   Deterministic data (no Math.random, so no hydration mismatch)
   ============================================================ */

const streaks = [
  { y: 7,  len: 240, dur: 0.9,  delay: -0.2, o: 0.85 },
  { y: 14, len: 150, dur: 1.3,  delay: -0.9, o: 0.5  },
  { y: 22, len: 320, dur: 0.75, delay: -0.5, o: 0.9  },
  { y: 31, len: 190, dur: 1.1,  delay: -0.1, o: 0.6  },
  { y: 39, len: 130, dur: 1.5,  delay: -1.2, o: 0.4  },
  { y: 61, len: 280, dur: 0.8,  delay: -0.7, o: 0.85 },
  { y: 69, len: 160, dur: 1.25, delay: -0.3, o: 0.5  },
  { y: 77, len: 340, dur: 0.7,  delay: -0.6, o: 0.9  },
  { y: 85, len: 200, dur: 1.0,  delay: -1.0, o: 0.65 },
  { y: 92, len: 140, dur: 1.4,  delay: -0.4, o: 0.45 },
  { y: 47, len: 120, dur: 1.6,  delay: -1.4, o: 0.35 },
  { y: 54, len: 110, dur: 1.7,  delay: -0.8, o: 0.3  },
];

const sparks = [
  { oy: -10, dy: -34, s: 3, dur: 1.1, delay: 0.0 },
  { oy: 8,   dy: 30,  s: 4, dur: 1.4, delay: 0.2 },
  { oy: -4,  dy: -18, s: 2, dur: 0.9, delay: 0.4 },
  { oy: 12,  dy: 46,  s: 3, dur: 1.3, delay: 0.6 },
  { oy: -14, dy: -52, s: 2, dur: 1.2, delay: 0.8 },
  { oy: 2,   dy: 12,  s: 4, dur: 1.0, delay: 0.3 },
  { oy: 6,   dy: 24,  s: 2, dur: 1.5, delay: 0.1 },
];

export default function RocketSection() {
  return (
    <section className="ms-rocket-section">
      <div className="ts-container">

        <div className="ms-rk-card">

          {/* ===================================================
              SPACE BACKDROP
              =================================================== */}

          <div className="ms-rk-space" aria-hidden="true">

            <div className="ms-rk-nebula ms-rk-nebula-one" />
            <div className="ms-rk-nebula ms-rk-nebula-two" />
            <div className="ms-rk-planet" />

            <div className="ms-rk-stars ms-rk-stars-1" />
            <div className="ms-rk-stars ms-rk-stars-2" />
            <div className="ms-rk-stars ms-rk-stars-3" />

            {streaks.map((streak, index) => (
              <i
                key={index}
                className="ms-rk-streak"
                style={
                  {
                    "--y": `${streak.y}%`,
                    "--len": `${streak.len}px`,
                    "--dur": `${streak.dur}s`,
                    "--delay": `${streak.delay}s`,
                    "--o": streak.o,
                  } as CSSProperties
                }
              />
            ))}

            <div className="ms-rk-trail" />

          </div>

          {/* ===================================================
              COPY
              =================================================== */}

          <div className="ms-rk-copy">

            <div className="ms-eyebrow">
              <span className="ms-eyebrow-dot" />
              Thinksocially technology
            </div>

            <h2>
              Moving at
              <span> super speed.</span>
            </h2>

            <p>
              Technology should never become the thing
              slowing your organization down.
            </p>

            <div className="ms-rk-hint">
              <Pause size={14} />
              Hover to pause the flight
            </div>

          </div>

          {/* ===================================================
              THE ROCKET
              =================================================== */}

          <div className="ms-rk-flight" aria-hidden="true">

            <div className="ms-rk-heat" />

            <svg
              className="ms-rk-svg"
              viewBox="0 0 780 220"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Rocket"
            >
              <defs>
                {/* Hull */}
                <linearGradient id="rkBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f6f9ff" />
                  <stop offset="0.42" stopColor="#d3def3" />
                  <stop offset="0.75" stopColor="#8ea3c8" />
                  <stop offset="1" stopColor="#56698f" />
                </linearGradient>

                <linearGradient id="rkShade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
                  <stop offset="0.28" stopColor="#fff" stopOpacity="0" />
                  <stop offset="0.62" stopColor="#0a1530" stopOpacity="0" />
                  <stop offset="1" stopColor="#0a1530" stopOpacity="0.5" />
                </linearGradient>

                <linearGradient id="rkNose" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#6fa8ff" />
                  <stop offset="0.5" stopColor="#2f66d8" />
                  <stop offset="1" stopColor="#14306f" />
                </linearGradient>

                <linearGradient id="rkBand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#5b9bff" />
                  <stop offset="0.55" stopColor="#2458c9" />
                  <stop offset="1" stopColor="#10286a" />
                </linearGradient>

                <linearGradient id="rkFinTop" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#2f66d8" />
                  <stop offset="1" stopColor="#10285f" />
                </linearGradient>

                <linearGradient id="rkFinBottom" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1f4cb0" />
                  <stop offset="1" stopColor="#0b1d48" />
                </linearGradient>

                <linearGradient id="rkNozzle" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#1a2542" />
                  <stop offset="0.5" stopColor="#6c7ca0" />
                  <stop offset="1" stopColor="#2a3a5e" />
                </linearGradient>

                <radialGradient id="rkGlass" cx="0.35" cy="0.3" r="0.85">
                  <stop offset="0" stopColor="#d6ecff" />
                  <stop offset="0.45" stopColor="#3b82e8" />
                  <stop offset="1" stopColor="#081a44" />
                </radialGradient>

                {/* Engine glow cast onto the hull */}
                <radialGradient id="rkCast" cx="0" cy="0.5" r="1">
                  <stop offset="0" stopColor="#9cd0ff" stopOpacity="0.75" />
                  <stop offset="1" stopColor="#9cd0ff" stopOpacity="0" />
                </radialGradient>

                {/* Flame layers: bright at the nozzle (right) → clear at the tip (left) */}
                <linearGradient id="rkFlameOuter" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0" stopColor="#5aa2ff" stopOpacity="0.95" />
                  <stop offset="0.45" stopColor="#2f6bf0" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="rkFlameMid" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0" stopColor="#bfe0ff" stopOpacity="1" />
                  <stop offset="0.5" stopColor="#7cbaff" stopOpacity="0.65" />
                  <stop offset="1" stopColor="#4c8fff" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="rkFlameInner" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#e6f3ff" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#e6f3ff" stopOpacity="0" />
                </linearGradient>

                <filter id="rkBlur" x="-20%" y="-60%" width="140%" height="220%">
                  <feGaussianBlur stdDeviation="4" />
                </filter>

                <filter id="rkSoft" x="-20%" y="-60%" width="140%" height="220%">
                  <feGaussianBlur stdDeviation="1.4" />
                </filter>

                {/* Hull silhouette (used to clip shine + shading) */}
                <clipPath id="rkHull">
                  <path d="M150 70 H400 C445 72 485 92 508 110 C485 128 445 148 400 150 H150 Z" />
                </clipPath>
              </defs>

              <g transform="translate(220 0)">

                {/* ================= ENGINE FLAME ================= */}

                <g className="ms-rk-flames">

                  <path
                    className="ms-rk-flame ms-rk-flame-outer"
                    d="M122 93 C70 88 0 98 -170 110 C0 122 70 132 122 127 Z"
                    fill="url(#rkFlameOuter)"
                    filter="url(#rkBlur)"
                  />

                  <path
                    className="ms-rk-flame ms-rk-flame-mid"
                    d="M122 97 C70 95 10 103 -110 110 C10 117 70 125 122 123 Z"
                    fill="url(#rkFlameMid)"
                    filter="url(#rkSoft)"
                  />

                  <path
                    className="ms-rk-flame ms-rk-flame-inner"
                    d="M122 101 C80 101 30 105 -40 110 C30 115 80 119 122 119 Z"
                    fill="url(#rkFlameInner)"
                  />

                  {/* Shock diamonds */}
                  <ellipse className="ms-rk-diamond" cx="44" cy="110" rx="15" ry="5" fill="#fff" opacity="0.7" />
                  <ellipse className="ms-rk-diamond" cx="-16" cy="110" rx="11" ry="4" fill="#fff" opacity="0.55" />
                  <ellipse className="ms-rk-diamond" cx="-68" cy="110" rx="8" ry="3" fill="#fff" opacity="0.4" />

                </g>

                {/* ================= FINS ================= */}

                <polygon
                  points="300,70 205,70 166,12 216,12"
                  fill="url(#rkFinTop)"
                />
                <polyline
                  points="216,12 300,70"
                  stroke="#9cc4ff"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  fill="none"
                />

                <polygon
                  points="300,150 205,150 166,208 216,208"
                  fill="url(#rkFinBottom)"
                />
                <polyline
                  points="216,208 300,150"
                  stroke="#6f9be6"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* ================= ENGINE BELL ================= */}

                <path
                  d="M152 80 L120 91 Q108 110 120 129 L152 140 Z"
                  fill="url(#rkNozzle)"
                />
                <ellipse cx="120" cy="110" rx="7" ry="19" fill="#0b1226" />
                <ellipse cx="121" cy="110" rx="4" ry="13" fill="#bfe0ff" opacity="0.9" />

                {/* ================= HULL ================= */}

                <rect
                  x="150"
                  y="70"
                  width="250"
                  height="80"
                  rx="5"
                  fill="url(#rkBody)"
                />

                {/* Nose cone */}
                <path
                  d="M400 70 C445 72 485 92 508 110 C485 128 445 148 400 150 Z"
                  fill="url(#rkNose)"
                />
                <path
                  d="M404 76 C442 79 476 94 496 106"
                  stroke="#fff"
                  strokeOpacity="0.55"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Clipped details */}
                <g clipPath="url(#rkHull)">

                  <rect x="150" y="70" width="360" height="80" fill="url(#rkShade)" />

                  {/* Panel lines */}
                  <line x1="210" y1="70" x2="210" y2="150" stroke="#1b2c52" strokeOpacity="0.28" />
                  <line x1="300" y1="70" x2="300" y2="150" stroke="#1b2c52" strokeOpacity="0.28" />
                  <line x1="398" y1="70" x2="398" y2="150" stroke="#1b2c52" strokeOpacity="0.35" />

                  {/* Brand band */}
                  <rect x="308" y="70" width="22" height="80" fill="url(#rkBand)" />
                  <rect x="308" y="70" width="22" height="80" fill="url(#rkShade)" />

                  {/* Rivets */}
                  <g fill="#fff" fillOpacity="0.55">
                    <circle cx="160" cy="78" r="1.6" />
                    <circle cx="190" cy="78" r="1.6" />
                    <circle cx="220" cy="78" r="1.6" />
                    <circle cx="250" cy="78" r="1.6" />
                    <circle cx="280" cy="78" r="1.6" />
                    <circle cx="160" cy="142" r="1.6" />
                    <circle cx="190" cy="142" r="1.6" />
                    <circle cx="220" cy="142" r="1.6" />
                    <circle cx="250" cy="142" r="1.6" />
                    <circle cx="280" cy="142" r="1.6" />
                  </g>

                  {/* Engine light on the tail */}
                  <rect
                    className="ms-rk-cast"
                    x="150"
                    y="70"
                    width="190"
                    height="80"
                    fill="url(#rkCast)"
                  />

                  {/* Moving specular shine */}
                  <rect
                    className="ms-rk-shine"
                    x="120"
                    y="60"
                    width="46"
                    height="100"
                    fill="#fff"
                    opacity="0.3"
                    transform="skewX(-22)"
                  />

                </g>

                {/* Wordmark */}
                <text
                  x="224"
                  y="115"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="3"
                  fill="#17306f"
                  fillOpacity="0.85"
                >
                  THINKSOCIALLY
                </text>

                {/* ================= PORTHOLE ================= */}

                <circle
                  cx="362"
                  cy="110"
                  r="27"
                  fill="url(#rkNozzle)"
                  stroke="#b9c9e8"
                  strokeWidth="2"
                />
                <circle cx="362" cy="110" r="21" fill="url(#rkGlass)" />
                <ellipse
                  cx="354"
                  cy="101"
                  rx="9"
                  ry="5"
                  fill="#fff"
                  opacity="0.6"
                  transform="rotate(-28 354 101)"
                />
                <circle
                  cx="362"
                  cy="110"
                  r="21"
                  fill="none"
                  stroke="#0a1b45"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                />

              </g>
            </svg>

            {/* Embers thrown from the nozzle */}
            {sparks.map((spark, index) => (
              <span
                key={index}
                className="ms-rk-spark"
                style={
                  {
                    "--oy": `${spark.oy}px`,
                    "--dy": `${spark.dy}px`,
                    "--s": `${spark.s}px`,
                    "--dur": `${spark.dur}s`,
                    "--delay": `${spark.delay}s`,
                  } as CSSProperties
                }
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}