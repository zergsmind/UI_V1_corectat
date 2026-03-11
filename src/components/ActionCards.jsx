import React from 'react'

const FoundationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const UIIIcon = () => (
  <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path fill="white" d="M870.9,225.7v151.8h-51c-4.1,0-16.1,9.9-14.1,16.2-5.7,109.5,8.7,227.8-2.2,336.2-20.9,209.5-231.2,285.7-413.7,222.9-237.7-81.7-154.3-367.7-169.7-558.9,0-6.5-10.7-16.4-16.1-16.4h-47.7c-.7,0-1.7,2.7-3.3,2.2v-154h189.8c23.5,0,48.5,26.7,52.9,49s2.2,60.5,2.5,86.5c1.2,104.5-2.8,208.6-.1,312.4,1.5,55.5,13.3,106.1,73.3,124,79.1,23.6,153-19.6,156.7-104.5l.2-414.1c2.1-24.9,29.9-53.4,55.1-53.4h187.6Z"/>
    <circle fill="#D4613A" cx="276" cy="120" r="80"/>
    <circle fill="#D4613A" cx="722" cy="120" r="80"/>
  </svg>
)

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3"  y="10" width="4" height="11" rx="1" fill="white" />
    <rect x="10" y="5"  width="4" height="16" rx="1" fill="white" />
    <rect x="17" y="13" width="4" height="8"  rx="1" fill="white" />
  </svg>
)

const actionCards = [
  {
    icon: <FoundationIcon />,
    iconBg: '#1B5E5A',
    title: 'DEVINO PARTENER',
    desc: 'Conectează-te la infrastructura UII ca administrație publică, organizație privată sau partener academic. Intrăm în consorții, co-design și proiecte finanțate împreună.',
    cta: 'Înregistrează-te →'
  },
  {
    icon: <UIIIcon />,
    iconBg: '#0a1e19',
    title: 'ECOSISTEMUL UII',
    desc: 'UII conectează administrație publică, sector privat, academie, societate civilă și comunități prin procese standardizate de co-design și diagnostic bazat pe date.',
    cta: 'Află Mai Mult →'
  },
  {
    icon: <ChartIcon />,
    iconBg: '#D4613A',
    title: 'TRACK RECORD',
    desc: '100+ proiecte de spații publice livrate, 3 niveluri de decizie acoperite, 10 organizații japoneze în pipeline activ, reprezentare la Smart City Expo Barcelona și Osaka Expo 2025.',
    cta: 'Explorează →'
  }
]

export default function ActionCards() {
  return (
    <>
      <style>{`
        .ac-root {
          background: #f7f4ef;
          padding: 5rem 3rem;
        }
        .ac-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ac-card {
          background: #ffffff;
          border: 1px solid #e7e7e7;
          border-radius: 1rem;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ac-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .ac-icon {
          width: 48px; height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ac-title {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #0a0a0a;
          text-transform: uppercase;
          margin-top: 1.5rem;
          line-height: 1.2;
        }
        .ac-desc {
          font-size: 0.875rem;
          color: #5d5d5d;
          line-height: 1.65;
          margin-top: 0.875rem;
          flex: 1;
        }
        .ac-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          margin-top: 2rem;
          background: #1B5E5A;
          color: #ffffff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: background 0.2s;
          align-self: flex-start;
        }
        .ac-btn:hover { background: #2A7C76; }
        @media (max-width: 768px) {
          .ac-grid { grid-template-columns: 1fr; }
          .ac-root { padding: 3rem 1.5rem; }
        }
      `}</style>

      <section className="ac-root">
        <div className="ac-grid">
          {actionCards.map((card, idx) => (
            <div key={idx} className="ac-card">
              <div className="ac-icon" style={{ background: card.iconBg }}>
                {card.icon}
              </div>
              <h3 className="ac-title">{card.title}</h3>
              <p className="ac-desc">{card.desc}</p>
              <button className="ac-btn">{card.cta}</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
