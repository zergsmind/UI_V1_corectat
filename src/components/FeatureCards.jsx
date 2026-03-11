import React, { useState, useRef } from 'react'

const cards = [
  {
    num: '01',
    title: 'CE SUNTEM',
    desc: 'UII este o fundație independentă înregistrată în România, construită ca infrastructură de integrare sistemică pentru inovare urbană. Nu competăm cu consultanțele, cu ONG-urile sau cu administrația publică. Competăm cu absența unui mecanism de integrare. Și în acel spațiu, nu avem competiție.',
    bg: 'var(--c4)',
    color: 'var(--c1)',
    visual: 'identity'
  },
  {
    num: '02',
    title: 'CONSULTANȚĂ ADMINISTRAȚIE PUBLICĂ',
    desc: 'Consultanță tehnică și strategică pentru primării și ministere. Aplicații fonduri europene, New European Bauhaus, strategii smart city, design participativ și documentații tehnice. Transformăm conversații și decizii în proiecte contractate, finanțate și livrate.',
    bg: 'var(--c1)',
    color: 'var(--c4)',
    visual: 'hexagons'
  },
  {
    num: '03',
    title: 'FACILITARE CONSORȚII ȘI FONDURI UE',
    desc: 'UII intră în consorții ca partener sau co-coordonator. Apeluri relevante: EUI Call 4, NEB Facility, URBACT IV, Interreg Danube, LIFE Programme. Angajamente pe 3-5 ani, ancorate în rețele europene și capacitate de implementare locală.',
    bg: 'var(--c2)',
    color: 'var(--c4)',
    visual: 'triangle'
  },
  {
    num: '04',
    title: 'PARTENERIATE CORPORATIVE INTERNAȚIONALE',
    desc: 'Market entry și navigare instituțională pentru corporații japoneze și europene în piața românească și CEE sau pentru accesarea fondurilor europene prin parteneri locali. Pipeline activ: 10 organizații japoneze post-Osaka 2025.',
    bg: 'var(--c3)',
    color: 'var(--c1)',
    visual: 'community'
  }
]

const IdentityVisual = () => (
  <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="160" height="12" rx="6" fill="var(--c1)" opacity="0.12" />
    <rect x="20" y="30" width="110" height="12" rx="6" fill="var(--c1)" opacity="0.7" />
    <rect x="20" y="58" width="180" height="12" rx="6" fill="var(--c1)" opacity="0.12" />
    <rect x="20" y="58" width="145" height="12" rx="6" fill="var(--c1)" opacity="0.7" />
    <rect x="20" y="86" width="140" height="12" rx="6" fill="var(--c1)" opacity="0.12" />
    <rect x="20" y="86" width="90"  height="12" rx="6" fill="var(--c1)" opacity="0.7" />
    <circle cx="195" cy="60" r="22" fill="var(--c2)" opacity="0.15" />
    <circle cx="195" cy="60" r="14" fill="var(--c2)" opacity="0.35" />
    <circle cx="195" cy="60" r="7"  fill="var(--c2)" opacity="0.9" />
  </svg>
)

const HexagonsVisual = () => (
  <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="110,128 155,103 155,143 110,168 65,143 65,103" fill="var(--c4)" opacity="0.25" />
    <polygon points="110,128 155,103 110,78  65,103" fill="var(--c4)" opacity="0.35" />
    <polygon points="110,128 65,103  65,143 110,168" fill="var(--c4)" opacity="0.2" />

    <polygon points="110,95 155,70 155,110 110,135 65,110 65,70" fill="var(--c4)" opacity="0.3" />
    <polygon points="110,95 155,70  110,45  65,70"  fill="var(--c4)" opacity="0.45" />
    <polygon points="110,95 65,70   65,110 110,135" fill="var(--c4)" opacity="0.25" />

    <polygon points="110,62 155,37 155,77 110,102 65,77 65,37" fill="var(--c4)" opacity="0.35" />
    <polygon points="110,62 155,37  110,12  65,37"  fill="var(--c4)" opacity="0.55" />
    <polygon points="110,62 65,37   65,77  110,102" fill="var(--c4)" opacity="0.3" />

    <line x1="110" y1="12"  x2="155" y2="37"  stroke="var(--c3)" strokeWidth="1" opacity="0.5" />
    <line x1="155" y1="37"  x2="155" y2="77"  stroke="var(--c3)" strokeWidth="1" opacity="0.4" />
    <line x1="110" y1="45"  x2="155" y2="70"  stroke="var(--c3)" strokeWidth="1" opacity="0.4" />
    <line x1="155" y1="70"  x2="155" y2="110" stroke="var(--c3)" strokeWidth="1" opacity="0.3" />
    <line x1="110" y1="78"  x2="155" y2="103" stroke="var(--c3)" strokeWidth="1" opacity="0.3" />
    <line x1="155" y1="103" x2="155" y2="143" stroke="var(--c3)" strokeWidth="1" opacity="0.25" />
  </svg>
)

const TriangleVisual = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,180 20,40 180,40" fill="var(--c4)" opacity="0.85" />
    <polygon points="100,40 60,120 140,120" fill="var(--c1)" opacity="0.25" />
  </svg>
)

const CommunityVisual = () => (
  <svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80,20 Q20,80 80,140"  stroke="var(--c1)" strokeWidth="40" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M130,20 Q70,80 130,140" stroke="var(--c1)" strokeWidth="40" fill="none" strokeLinecap="round" opacity="0.35" />
  </svg>
)

function CardVisual({ visual }) {
  switch (visual) {
    case 'identity':   return <IdentityVisual />
    case 'hexagons':   return <HexagonsVisual />
    case 'triangle':   return <TriangleVisual />
    case 'community':  return <CommunityVisual />
    default:           return null
  }
}

export default function FeatureCards() {
  const [activeCard, setActiveCard] = useState(1)
  const contentRefs = useRef([])

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveCard(activeCard === idx ? -1 : idx)
    }
  }

  return (
    <>
      <style>{`
        .fc-root { width: 100%; }
        .fc-card {
          width: 100%;
          overflow: hidden;
          transition: background 0.4s ease;
        }
        .fc-header {
          display: grid;
          grid-template-columns: 3rem 1fr;
          align-items: center;
          height: 80px;
          padding: 0 2.5rem;
          cursor: pointer;
          gap: 1.5rem;
          user-select: none;
        }
        .fc-num {
          font-size: 0.75rem;
          font-weight: 500;
          opacity: 0.45;
          font-variant-numeric: tabular-nums;
          flex-shrink: 0;
        }
        .fc-title {
          font-size: clamp(1rem, 2vw, 1.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          line-height: 1;
        }
        .fc-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fc-body.active { max-height: 700px; }
        .fc-body-left {
          padding: 2rem 2.5rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 1.5rem;
        }
        .fc-desc {
          font-size: 0.95rem;
          line-height: 1.75;
          max-width: 480px;
          opacity: 0.9;
        }
        .fc-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          padding: 0.6rem 1.25rem;
          border-radius: 0.4rem;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: opacity 0.2s;
          align-self: flex-start;
        }
        .fc-learn-more:hover { opacity: 0.8; }
        .fc-body-right {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          min-height: 280px;
        }

        @media (max-width: 768px) {
          .fc-header { height: 64px; padding: 0 1.25rem; }
          .fc-body { grid-template-columns: 1fr; }
          .fc-body-right { display: none; }
          .fc-body-left { padding: 1.25rem 1.25rem 2rem; }
          .fc-title { font-size: clamp(0.85rem, 3.5vw, 1.2rem); }
        }
      `}</style>

      {/* ADA: section landmark */}
      <section aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">Serviciile UII</h2>
        <div className="fc-root">
          {cards.map((card, idx) => {
            const isActive = activeCard === idx
            const panelId = `fc-panel-${idx}`
            const headerId = `fc-header-${idx}`
            const borderColor = card.color === 'var(--c1)'
              ? 'rgba(85,113,116,0.15)'
              : 'rgba(247,247,232,0.15)'
            const btnBg = card.color === 'var(--c1)' ? 'var(--c1)' : 'rgba(247,247,232,0.2)'
            const btnColor = card.color === 'var(--c1)' ? 'var(--c4)' : 'var(--c4)'

            return (
              <div
                key={card.num}
                className="fc-card"
                style={{ background: card.bg, color: card.color, borderBottom: `1px solid ${borderColor}` }}
              >
                {/* ADA: button role, keyboard activation, aria-controls linking panel */}
                <button
                  id={headerId}
                  className="fc-header"
                  onClick={() => setActiveCard(isActive ? -1 : idx)}
                  onKeyDown={e => handleKeyDown(e, idx)}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}
                >
                  <span className="fc-num" style={{ color: card.color }} aria-hidden="true">{card.num}</span>
                  <span className="fc-title" style={{ color: card.color }}>{card.title}</span>
                </button>

                <div
                  id={panelId}
                  className={`fc-body${isActive ? ' active' : ''}`}
                  ref={el => contentRefs.current[idx] = el}
                  role="region"
                  aria-labelledby={headerId}
                  aria-hidden={!isActive}
                  inert={!isActive ? '' : undefined}
                >
                  <div className="fc-body-left">
                    <p className="fc-desc" style={{ color: card.color }}>{card.desc}</p>
                    <button
                      className="fc-learn-more"
                      style={{ background: btnBg, color: btnColor }}
                      aria-label={`Află mai mult despre ${card.title}`}
                    >
                      Află mai mult <span aria-hidden="true">→</span>
                    </button>
                  </div>
                  <div className="fc-body-right" aria-hidden="true">
                    <CardVisual visual={card.visual} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
