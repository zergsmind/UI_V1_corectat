import React from 'react'

const row1base = ['PRIMĂRIA CLUJ-NAPOCA', 'ONU-HABITAT', 'COMISIA EUROPEANĂ', 'OSAKA 2025']
const row2base = ['PRIMĂRIA TIMIȘOARA', 'BANCA MONDIALĂ', 'UAUIM', 'UNICEF ROMÂNIA']

// 8× duplication — one half (4×) is always wider than any viewport, guaranteeing no blank gaps
const row1 = [...row1base, ...row1base, ...row1base, ...row1base, ...row1base, ...row1base, ...row1base, ...row1base]
const row2 = [...row2base, ...row2base, ...row2base, ...row2base, ...row2base, ...row2base, ...row2base, ...row2base]

export default function TrustedBy() {
  return (
    <>
      <style>{`
        .tb-root {
          width: 100%;
          overflow: hidden;
        }
        .tb-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 5rem 4rem;
          align-items: start;
          background: var(--c1);
        }
        .tb-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .tb-chevron {
          font-size: 5rem;
          font-weight: 900;
          color: var(--c2);
          line-height: 0.9;
          letter-spacing: -0.05em;
          font-family: 'Inter', sans-serif;
          margin-bottom: 0.5rem;
        }
        .tb-heading {
          font-size: clamp(1.75rem, 3.5vw, 3.25rem);
          font-weight: 800;
          color: var(--c4);
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .tb-right { padding-top: 0.5rem; }
        .tb-desc {
          font-size: 0.9rem;
          color: rgba(var(--c4-rgb), 0.7);
          line-height: 1.75;
          max-width: 480px;
        }
        .tb-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
          list-style: none;
          padding: 0;
        }
        .tb-stats > div { display: flex; flex-direction: column-reverse; gap: 0.3rem; }
        .tb-stat-num {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--c2);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .tb-stat-label {
          font-size: 0.72rem;
          color: rgba(var(--c4-rgb), 0.5);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.4;
        }

        /* ── Marquee ── */
        .tb-marquee-wrap {
          background: var(--c4);
          border-top: 1px solid var(--c3);
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
        }
        .tb-marquee-row {
          display: flex;
          overflow: hidden;
          border-bottom: 1px solid var(--c3);
          padding: 0;
        }
        .tb-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .tb-marquee-track.left {
          animation: tb-scroll-left 28s linear infinite;
        }
        .tb-marquee-track.right {
          animation: tb-scroll-right 28s linear infinite;
        }
        /* Translate by exactly 1/8 of total track width = one base set */
        @keyframes tb-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-12.5%); }
        }
        @keyframes tb-scroll-right {
          from { transform: translateX(-12.5%); }
          to   { transform: translateX(0); }
        }
        .tb-marquee-wrap:hover .tb-marquee-track { animation-play-state: paused; }

        .tb-partner {
          font-size: 0.68rem;
          color: rgba(var(--c1-rgb), 0.35);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 1.25rem 2.5rem;
          white-space: nowrap;
          list-style: none;
          transition: color 0.2s;
          cursor: default;
          border-right: 1px solid var(--c3);
        }
        .tb-partner:hover { color: var(--c1); }

        @media (max-width: 768px) {
          .tb-main { grid-template-columns: 1fr; padding: 3rem 2rem; gap: 2rem; }
          .tb-stats { grid-template-columns: 1fr 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tb-marquee-track { animation: none !important; }
        }
      `}</style>

      <section className="tb-root" aria-labelledby="trusted-heading" id="track">
        <div className="tb-main">
          <div className="tb-left">
            <div className="tb-chevron" aria-hidden="true">{'>>'}</div>
            <h2 className="tb-heading" id="trusted-heading">
              UII lucrează cu instituții din întreaga lume
            </h2>
          </div>
          <div className="tb-right">
            <p className="tb-desc">
              Fondatori, arhitecți și lideri instituționali din toată lumea au ales UII pentru
              inovare urbană sistemică — ancorată în infrastructură de integrare operațională
              și parteneriate strategice pe termen lung.
            </p>
            <dl className="tb-stats" aria-label="Statistici UII">
              <div>
                <dt className="tb-stat-label">Proiecte spații publice livrate</dt>
                <dd className="tb-stat-num">100+</dd>
              </div>
              <div>
                <dt className="tb-stat-label">Niveluri de decizie acoperite</dt>
                <dd className="tb-stat-num">3</dd>
              </div>
              <div>
                <dt className="tb-stat-label">Organizații japoneze în pipeline activ</dt>
                <dd className="tb-stat-num">10</dd>
              </div>
              <div>
                <dt className="tb-stat-label">Smart City Expo Barcelona &amp; Osaka Expo</dt>
                <dd className="tb-stat-num">2025</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Scrolling partner marquee — 2 rows, opposite directions */}
        <div className="tb-marquee-wrap" aria-label="Parteneri și instituții colaboratoare">
          {/* Row 1 — scrolls left */}
          <div className="tb-marquee-row">
            <ul className="tb-marquee-track left" aria-hidden="true" style={{ display: 'flex', padding: 0, margin: 0 }}>
              {row1.map((name, i) => (
                <li key={i} className="tb-partner">{name}</li>
              ))}
            </ul>
          </div>
          {/* Row 2 — scrolls right */}
          <div className="tb-marquee-row">
            <ul className="tb-marquee-track right" aria-hidden="true" style={{ display: 'flex', padding: 0, margin: 0 }}>
              {row2.map((name, i) => (
                <li key={i} className="tb-partner">{name}</li>
              ))}
            </ul>
          </div>
          {/* Screen-reader-only static list */}
          <ul className="sr-only">
            {[...row1, ...row2].map((name, i) => <li key={i}>{name}</li>)}
          </ul>
        </div>
      </section>
    </>
  )
}
