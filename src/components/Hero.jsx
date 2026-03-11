import React, { useState, useEffect } from 'react'

const UIILogo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffffff" d="M870.9,225.7v151.8h-51c-4.1,0-16.1,9.9-14.1,16.2-5.7,109.5,8.7,227.8-2.2,336.2-20.9,209.5-231.2,285.7-413.7,222.9-237.7-81.7-154.3-367.7-169.7-558.9,0-6.5-10.7-16.4-16.1-16.4h-47.7c-.7,0-1.7,2.7-3.3,2.2v-154h189.8c23.5,0,48.5,26.7,52.9,49s2.2,60.5,2.5,86.5c1.2,104.5-2.8,208.6-.1,312.4,1.5,55.5,13.3,106.1,73.3,124,79.1,23.6,153-19.6,156.7-104.5l.2-414.1c2.1-24.9,29.9-53.4,55.1-53.4h187.6Z"/>
    <path fill="#D4613A" d="M276.2,52.8c102.8-14.9,113.3,129.4,27.1,142-100.5,14.7-113.6-129.4-27.1-142Z"/>
    <path fill="#D4613A" d="M722.9,52.8c103.1-15,112.4,128.6,27.1,142-99,15.6-114.7-129.3-27.1-142Z"/>
  </svg>
)

const NetworkSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="120" y1="80" x2="40"  y2="30"  stroke="rgba(212,97,58,0.35)" strokeWidth="1" />
    <line x1="120" y1="80" x2="200" y2="30"  stroke="rgba(212,97,58,0.35)" strokeWidth="1" />
    <line x1="120" y1="80" x2="20"  y2="90"  stroke="rgba(212,97,58,0.35)" strokeWidth="1" />
    <line x1="120" y1="80" x2="220" y2="90"  stroke="rgba(212,97,58,0.35)" strokeWidth="1" />
    <line x1="120" y1="80" x2="40"  y2="140" stroke="rgba(212,97,58,0.35)" strokeWidth="1" />
    <line x1="120" y1="80" x2="200" y2="140" stroke="rgba(212,97,58,0.35)" strokeWidth="1" />
    <line x1="120" y1="80" x2="80"  y2="15"  stroke="rgba(212,97,58,0.35)" strokeWidth="1" />
    <line x1="120" y1="80" x2="160" y2="15"  stroke="rgba(212,97,58,0.35)" strokeWidth="1" />

    <circle cx="40"  cy="30"  r="8" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />
    <circle cx="200" cy="30"  r="8" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />
    <circle cx="20"  cy="90"  r="7" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />
    <circle cx="220" cy="90"  r="7" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />
    <circle cx="40"  cy="140" r="8" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />
    <circle cx="200" cy="140" r="8" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />
    <circle cx="80"  cy="15"  r="6" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />
    <circle cx="160" cy="15"  r="6" fill="rgba(212,97,58,0.15)" stroke="rgba(212,97,58,0.6)" strokeWidth="1.5" />

    {/* Center node */}
    <circle cx="120" cy="80" r="22" fill="rgba(10,30,25,0.85)" stroke="rgba(27,94,90,0.9)" strokeWidth="1.5" />
    {/* UII mark in center */}
    <path fill="#D4613A" d="M120,64 L132,96 L108,96 Z" />
    <path fill="#0a1e19" d="M120,76 L126,92 L114,92 Z" />
  </svg>
)

function LiveClock() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const timeStr = now.toLocaleTimeString('en-US', {
    hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
  })
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <div style={{
        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
        fontWeight: 300,
        color: '#0a0a0a',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums'
      }}>
        {timeStr}
      </div>
      <div style={{ fontSize: '0.875rem', color: '#6d6d6d', fontWeight: 400 }}>
        {dateStr}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-root {
          display: grid;
          grid-template-columns: 280px 1fr 320px;
          height: calc(100vh - 80px);
          min-height: 600px;
        }
        .hero-panel-left {
          background: #0a1e19;
          border-right: 1px solid #e7e7e7;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          overflow: hidden;
        }
        .hero-panel-left-intro {
          flex: 1;
          display: flex;
          align-items: flex-start;
        }
        .hero-panel-left-intro p {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
          font-weight: 400;
        }
        .hero-powered-card {
          background: #0f2e26;
          border: 1px solid rgba(27,94,90,0.4);
          border-radius: 0.75rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 220px;
          position: relative;
          overflow: hidden;
        }
        .hero-powered-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #D4613A;
          text-transform: uppercase;
        }
        .hero-powered-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.65;
        }
        .hero-powered-link {
          font-size: 0.8rem;
          color: #ffffff;
          text-decoration: underline;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          font-family: 'Inter', sans-serif;
          text-align: left;
        }

        .hero-panel-center {
          background: #f7f4ef;
          border-right: 1px solid #e7e7e7;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .hero-diamonds-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-bg-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #c8c2b8 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.45;
        }
        .diamonds-container {
          position: relative;
          display: flex;
          align-items: center;
          z-index: 1;
        }
        .diamond-left {
          width: 300px;
          height: 380px;
          clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
          background: linear-gradient(135deg, #1B5E5A, #2A7C76);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .diamond-right {
          width: 300px;
          height: 380px;
          clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
          background: linear-gradient(135deg, #D4613A, #F2845F);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-left: -60px;
        }
        .diamond-inner-left {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-30%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .city-block {
          width: 60px; height: 80px;
          background: rgba(255,255,255,0.18);
          border-radius: 3px 3px 0 0;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .city-block-sm {
          width: 40px; height: 55px;
          background: rgba(255,255,255,0.12);
          border-radius: 3px 3px 0 0;
          border: 1px solid rgba(255,255,255,0.25);
          margin-left: -30px;
          align-self: flex-end;
        }
        .city-row { display: flex; align-items: flex-end; gap: 4px; }
        .city-ground {
          width: 100px; height: 6px;
          background: rgba(255,255,255,0.35);
          border-radius: 2px;
        }
        .diamond-inner-right {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-35%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .conn-node {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
        }
        .conn-line {
          width: 2px; height: 30px;
          background: rgba(255,255,255,0.5);
        }
        .conn-node-sm {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
        }

        .hero-panel-right {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 1.5rem;
        }
        .hero-panel-right-top {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .hero-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          margin-top: auto;
        }
        .hero-scroll-text {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          color: #6d6d6d;
          text-transform: uppercase;
          font-weight: 500;
        }
        .hero-scroll-arrow {
          width: 32px; height: 32px;
          border: 1px solid #e7e7e7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6d6d6d;
          font-size: 0.9rem;
          transform: rotate(45deg);
        }

        @media (max-width: 900px) {
          .hero-root {
            grid-template-columns: 1fr;
            height: auto;
          }
          .hero-panel-left,
          .hero-panel-center,
          .hero-panel-right { min-height: 400px; }
        }
      `}</style>

      <section className="hero-root">
        {/* Panel 1 — Left dark teal */}
        <div className="hero-panel-left">
          <div className="hero-panel-left-intro">
            <p>
              UII conectează administrație publică, sector privat, academie, societate civilă
              și comunități — prin procese standardizate de co-design, diagnostic bazat pe date
              și mobilizare de capital strategic. Structură neutră. Independentă operațional.
            </p>
          </div>

          <div className="hero-powered-card">
            <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '110px', opacity: 0.55 }}>
              <NetworkSVG />
            </div>
            <span className="hero-powered-label">Powered by UII</span>
            <p className="hero-powered-desc">
              Viitorul inovării urbane nu se va întâmpla pe o singură platformă — se va întâmpla
              prin mii de parteneriate sistemice. UII este infrastructura care le face posibile.
            </p>
            <button className="hero-powered-link">Află mai mult →</button>
          </div>
        </div>

        {/* Panel 2 — Center offwhite */}
        <div className="hero-panel-center">
          <div className="hero-diamonds-wrapper">
            <div className="hero-bg-dots" />
            <div className="diamonds-container">
              <div className="diamond-left">
                <div className="diamond-inner-left">
                  <div className="city-row">
                    <div className="city-block" />
                    <div className="city-block-sm" />
                  </div>
                  <div className="city-ground" />
                </div>
              </div>
              <div className="diamond-right">
                <div className="diamond-inner-right">
                  <div className="conn-node" />
                  <div className="conn-line" />
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div className="conn-node-sm" />
                    <div className="conn-node-sm" />
                    <div className="conn-node-sm" />
                  </div>
                  <div className="conn-line" />
                  <div className="conn-node" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3 — Right white with clock */}
        <div className="hero-panel-right">
          <div className="hero-panel-right-top">
            <UIILogo size={28} />
            <LiveClock />
            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9d9d9d', marginBottom: '0.5rem' }}>
                Locație
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1B5E5A' }}>
                București, România
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6d6d6d', marginTop: '0.25rem' }}>
                contact@urbaninnovationinstitute.ro
              </div>
            </div>
          </div>

          <div className="hero-scroll-indicator">
            <span className="hero-scroll-text">Scroll</span>
            <div className="hero-scroll-arrow">↗</div>
          </div>
        </div>
      </section>
    </>
  )
}
