import React from 'react'

const partners = [
  'PRIMĂRIA CLUJ-NAPOCA',
  'PRIMĂRIA TIMIȘOARA',
  'ONU-HABITAT',
  'BANCA MONDIALĂ',
  'UAUIM',
  'COMISIA EUROPEANĂ',
  'UNICEF ROMÂNIA',
  'OSAKA 2025'
]

export default function TrustedBy() {
  return (
    <>
      <style>{`
        .tb-root {
          background: var(--c1);
          width: 100%;
        }
        .tb-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 5rem 4rem;
          align-items: start;
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
          color: rgba(var(--c4-rgb),0.75);
          line-height: 1.75;
          max-width: 480px;
        }
        .tb-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .tb-stat-num {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--c2);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .tb-stat-label {
          font-size: 0.72rem;
          color: rgba(var(--c4-rgb),0.6);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 0.3rem;
          line-height: 1.4;
        }
        .tb-partners {
          border-top: 1px solid rgba(var(--c4-rgb),0.2);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        }
        .tb-partner {
          font-size: 0.68rem;
          color: rgba(var(--c4-rgb),0.4);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 2rem 2.5rem;
          white-space: nowrap;
          transition: color 0.2s;
          cursor: default;
        }
        .tb-partner:hover { color: rgba(var(--c4-rgb),0.85); }
        @media (max-width: 768px) {
          .tb-main {
            grid-template-columns: 1fr;
            padding: 3rem 2rem;
            gap: 2rem;
          }
          .tb-partners { justify-content: center; }
          .tb-partner { padding: 1.25rem 1.5rem; }
          .tb-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section className="tb-root">
        <div className="tb-main">
          <div className="tb-left">
            <div className="tb-chevron">{'>>'}</div>
            <h2 className="tb-heading">
              UII lucrează cu instituții din întreaga lume
            </h2>
          </div>
          <div className="tb-right">
            <p className="tb-desc">
              Fondatori, arhitecți și lideri instituționali din toată lumea au ales UII pentru
              inovare urbană sistemică — ancorată în infrastructură de integrare operațională
              și parteneriate strategice pe termen lung.
            </p>
            <div className="tb-stats">
              <div>
                <div className="tb-stat-num">100+</div>
                <div className="tb-stat-label">Proiecte spații publice livrate</div>
              </div>
              <div>
                <div className="tb-stat-num">3</div>
                <div className="tb-stat-label">Niveluri de decizie acoperite</div>
              </div>
              <div>
                <div className="tb-stat-num">10</div>
                <div className="tb-stat-label">Organizații japoneze în pipeline activ</div>
              </div>
              <div>
                <div className="tb-stat-num">2025</div>
                <div className="tb-stat-label">Smart City Expo Barcelona & Osaka Expo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tb-partners">
          {partners.map((name, idx) => (
            <span key={idx} className="tb-partner">{name}</span>
          ))}
        </div>
      </section>
    </>
  )
}
