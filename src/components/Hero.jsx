import React, { useState, useEffect } from 'react'

function LiveClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
      <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--c1)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em' }}>
        {timeStr}
      </span>
      <span style={{ fontSize: '0.75rem', color: 'var(--c2)', fontWeight: 400 }}>
        {dateStr} · București
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-root {
          background: var(--c4);
          border-bottom: 1px solid var(--c3);
        }

        /* ── Main 2-col area ── */
        .hero-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 80px - 90px);
          padding: 5rem 4rem 4rem;
          gap: 4rem;
          align-items: center;
        }

        /* ── Left col ── */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .hero-chevron {
          font-size: clamp(4rem, 8vw, 7rem);
          font-weight: 900;
          color: var(--c2);
          line-height: 0.85;
          letter-spacing: -0.06em;
          font-family: 'Inter', sans-serif;
          user-select: none;
        }
        .hero-heading {
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          font-weight: 800;
          color: var(--c1);
          text-transform: uppercase;
          line-height: 1.05;
          letter-spacing: -0.025em;
          margin: 0;
        }

        /* ── Right col ── */
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-top: 0.5rem;
        }
        .hero-desc {
          font-size: 0.95rem;
          color: var(--c1);
          line-height: 1.8;
          opacity: 0.75;
          max-width: 480px;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .hero-cta-btn {
          background: var(--c1);
          color: var(--c4);
          border: none;
          padding: 0.75rem 1.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.03em;
          transition: background 0.2s;
          border-radius: 0.375rem;
        }
        .hero-cta-btn:hover { background: var(--c2); }
        .hero-cta-link {
          font-size: 0.875rem;
          color: var(--c2);
          font-weight: 500;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'Inter', sans-serif;
          padding: 0;
        }
        .hero-clock-row {
          padding-top: 1rem;
          border-top: 1px solid var(--c3);
        }

        /* ── Stats strip ── */
        .hero-stats-strip {
          border-top: 1px solid var(--c3);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .hero-stat {
          padding: 1.5rem 2rem;
          border-right: 1px solid var(--c3);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-num {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--c1);
          line-height: 1;
          letter-spacing: -0.03em;
          font-variant-numeric: tabular-nums;
        }
        .hero-stat-num.accent { color: var(--c2); }
        .hero-stat-label {
          font-size: 0.62rem;
          color: var(--c2);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.4;
        }
        .hero-stat-source {
          font-size: 0.5rem;
          color: var(--c3);
          letter-spacing: 0.04em;
          margin-top: 0.1rem;
        }

        @media (max-width: 900px) {
          .hero-main { grid-template-columns: 1fr; padding: 3rem 2rem; min-height: auto; }
          .hero-stats-strip { grid-template-columns: repeat(2, 1fr); }
          .hero-stat:nth-child(2) { border-right: none; }
          .hero-stat:nth-child(3), .hero-stat:nth-child(4) { border-top: 1px solid var(--c3); }
          .hero-stat:last-child { grid-column: 1 / -1; border-top: 1px solid var(--c3); border-right: none; }
        }
      `}</style>

      <section className="hero-root">
        <div className="hero-main">
          <div className="hero-left">
            <div className="hero-chevron">{'>>'}</div>
            <h1 className="hero-heading">
              UII conectează<br />inovarea urbană<br />la nivel sistemic
            </h1>
          </div>

          <div className="hero-right">
            <p className="hero-desc">
              Fondatori, arhitecți și lideri instituționali din toată lumea au ales UII pentru
              inovare urbană sistemică — ancorată în infrastructură de integrare operațională
              și parteneriate strategice pe termen lung. Structură neutră. Independentă operațional.
            </p>
            <div className="hero-cta-row">
              <button className="hero-cta-btn">Colaborează →</button>
              <button className="hero-cta-link">Află mai mult</button>
            </div>
            <div className="hero-clock-row">
              <LiveClock />
            </div>
          </div>
        </div>

        <div className="hero-stats-strip">
          <div className="hero-stat">
            <span className="hero-stat-num">70%</span>
            <span className="hero-stat-label">Populație urbană globală în 2050</span>
            <span className="hero-stat-source">IEA, 2024</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">112</span>
            <span className="hero-stat-label">Orașe UE spre neutralitate climatică</span>
            <span className="hero-stat-source">EC Mission, 2025</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">75%</span>
            <span className="hero-stat-label">Din energia globală consumată de orașe</span>
            <span className="hero-stat-source">IEA, 2024</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">80%</span>
            <span className="hero-stat-label">Din PIB-ul global generat în orașe</span>
            <span className="hero-stat-source">OECD, 2024</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num accent">~0.3g</span>
            <span className="hero-stat-label">CO₂ per vizită pe acest site</span>
            <span className="hero-stat-source">Mai curat decât 74% din web</span>
          </div>
        </div>
      </section>
    </>
  )
}
