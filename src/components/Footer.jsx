import React from 'react'

const UIILogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path fill="var(--c4)" d="M870.9,225.7v151.8h-51c-4.1,0-16.1,9.9-14.1,16.2-5.7,109.5,8.7,227.8-2.2,336.2-20.9,209.5-231.2,285.7-413.7,222.9-237.7-81.7-154.3-367.7-169.7-558.9,0-6.5-10.7-16.4-16.1-16.4h-47.7c-.7,0-1.7,2.7-3.3,2.2v-154h189.8c23.5,0,48.5,26.7,52.9,49s2.2,60.5,2.5,86.5c1.2,104.5-2.8,208.6-.1,312.4,1.5,55.5,13.3,106.1,73.3,124,79.1,23.6,153-19.6,156.7-104.5l.2-414.1c2.1-24.9,29.9-53.4,55.1-53.4h187.6Z"/>
    <path fill="var(--c2)" d="M276.2,52.8c102.8-14.9,113.3,129.4,27.1,142-100.5,14.7-113.6-129.4-27.1-142Z"/>
    <path fill="var(--c2)" d="M722.9,52.8c103.1-15,112.4,128.6,27.1,142-99,15.6-114.7-129.3-27.1-142Z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <>
      <style>{`
        .ft-root {
          background: var(--c1);
          color: var(--c4);
          border-top: 1px solid rgba(var(--c3-rgb), 0.25);
        }

        /* ── Single main row ── */
        .ft-main {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 1.5rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── Brand zone ── */
        .ft-brand {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          flex-shrink: 0;
          padding-right: 2.5rem;
          border-right: 1px solid rgba(var(--c3-rgb), 0.2);
        }
        .ft-brand-top {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .ft-brand-name {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c4);
        }
        .ft-brand-full {
          font-size: 0.65rem;
          color: rgba(var(--c4-rgb), 0.45);
          letter-spacing: 0.02em;
        }
        .ft-reg-inline {
          font-size: 0.58rem;
          color: rgba(var(--c4-rgb), 0.3);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .ft-reg-inline span { color: rgba(var(--c4-rgb), 0.5); }

        /* ── Social buttons ── */
        .ft-social {
          display: flex;
          gap: 0.4rem;
          margin-left: 0.25rem;
        }
        .ft-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.3rem 0.65rem;
          border: 1px solid rgba(var(--c4-rgb), 0.2);
          border-radius: 0.25rem;
          background: transparent;
          color: rgba(var(--c4-rgb), 0.45);
          font-size: 0.63rem;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: color 0.15s, border-color 0.15s;
          min-height: unset;
          min-width: unset;
          white-space: nowrap;
        }
        .ft-social-btn:hover {
          color: var(--c4);
          border-color: rgba(var(--c4-rgb), 0.45);
        }
        .ft-social-btn:focus-visible {
          outline: 2px solid var(--c2);
          outline-offset: 3px;
        }

        /* ── Link groups ── */
        .ft-links-zone {
          flex: 1;
          display: flex;
          align-items: flex-start;
          gap: 0;
          padding: 0 2.5rem;
        }
        .ft-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-right: 2.5rem;
        }
        .ft-group:last-child { padding-right: 0; }
        .ft-group-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--c2);
          margin-bottom: 0.15rem;
        }
        .ft-link {
          font-size: 0.75rem;
          color: rgba(var(--c4-rgb), 0.55);
          text-decoration: none;
          transition: color 0.15s;
          line-height: 1;
          min-height: unset;
          min-width: unset;
          white-space: nowrap;
        }
        .ft-link:hover { color: var(--c4); }
        .ft-link:focus-visible { outline: 2px solid var(--c2); outline-offset: 3px; border-radius: 2px; }

        /* ── Contact zone ── */
        .ft-contact-zone {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          flex-shrink: 0;
          padding-left: 2.5rem;
          border-left: 1px solid rgba(var(--c3-rgb), 0.2);
        }
        .ft-contact-row {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .ft-clabel {
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c2);
          opacity: 0.65;
          white-space: nowrap;
          flex-shrink: 0;
          min-width: 4.5rem;
        }
        .ft-cvalue {
          font-size: 0.72rem;
          color: rgba(var(--c4-rgb), 0.6);
          text-decoration: none;
          transition: color 0.15s;
          min-height: unset;
          min-width: unset;
        }
        a.ft-cvalue:hover { color: var(--c4); }

        /* ── Bottom bar ── */
        .ft-bottom {
          border-top: 1px solid rgba(var(--c3-rgb), 0.12);
          padding: 0.75rem 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          max-width: 1400px;
          margin: 0 auto;
        }
        .ft-copyright {
          font-size: 0.65rem;
          color: rgba(var(--c4-rgb), 0.3);
          letter-spacing: 0.03em;
        }
        .ft-legal {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .ft-legal-link {
          font-size: 0.65rem;
          color: rgba(var(--c4-rgb), 0.3);
          text-decoration: none;
          transition: color 0.15s;
          min-height: unset;
          min-width: unset;
        }
        .ft-legal-link:hover { color: rgba(var(--c4-rgb), 0.65); }

        @media (max-width: 1100px) {
          .ft-main { flex-wrap: wrap; gap: 1.5rem; padding: 1.5rem 2rem; }
          .ft-brand { border-right: none; padding-right: 0; border-bottom: 1px solid rgba(var(--c3-rgb),0.2); padding-bottom: 1rem; width: 100%; }
          .ft-links-zone { padding: 0; gap: 1.5rem; }
          .ft-contact-zone { border-left: none; padding-left: 0; border-top: 1px solid rgba(var(--c3-rgb),0.2); padding-top: 1rem; width: 100%; }
          .ft-bottom { padding: 0.75rem 2rem; }
        }
        @media (max-width: 768px) {
          .ft-main { padding: 1.25rem 1.5rem; gap: 1.25rem; }
          .ft-contact-row { flex-direction: column; gap: 0.1rem; }
          .ft-cvalue { font-size: 0.68rem; word-break: break-all; }
          .ft-links-zone { flex-wrap: wrap; gap: 1.25rem; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 0.5rem; padding: 0.75rem 1.5rem; }
        }
      `}</style>

      <footer className="ft-root" aria-label="Footer — informații organizație">
        <div className="ft-main">

          {/* Brand */}
          <div className="ft-brand">
            <div className="ft-brand-top">
              <UIILogo size={22} />
              <div className="ft-social" aria-label="Rețele sociale">
                <a href="" className="ft-social-btn" aria-label="Instagram UII" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon /> Instagram
                </a>
                <a href="" className="ft-social-btn" aria-label="LinkedIn UII" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
            <span className="ft-brand-full">Urban Innovation Institute</span>
            <span className="ft-reg-inline">
              Est. <span>2020</span> · Fundație · CUI <span>40887291</span> · România
            </span>
          </div>

          {/* Nav + Programs links */}
          <div className="ft-links-zone">
            <nav className="ft-group" aria-label="Navigație footer">
              <span className="ft-group-label">Navigație</span>
              <a href="#about"     className="ft-link">Despre</a>
              <a href="#services"  className="ft-link">Cum Lucrăm</a>
              <a href="#ecosystem" className="ft-link">Ecosistem</a>
              <a href="#track"     className="ft-link">Track Record</a>
              <a href="#contact"   className="ft-link">Contact</a>
            </nav>
            <div className="ft-group">
              <span className="ft-group-label">Programe</span>
              <a href="#" className="ft-link">Consultanță Publică</a>
              <a href="#" className="ft-link">Fonduri UE</a>
              <a href="#" className="ft-link">Parteneriate Corp.</a>
              <a href="#" className="ft-link">Co-design Urban</a>
              <a href="#" className="ft-link">Smart City</a>
            </div>
          </div>

          {/* Contact */}
          <address className="ft-contact-zone" style={{ fontStyle: 'normal' }}>
            <span className="ft-group-label">Contact</span>
            <div className="ft-contact-row">
              <span className="ft-clabel">General</span>
              <a href="mailto:contact@uii.ro" className="ft-cvalue">contact@uii.ro</a>
            </div>
            <div className="ft-contact-row">
              <span className="ft-clabel">Presă</span>
              <a href="mailto:media@uii.ro" className="ft-cvalue">media@uii.ro</a>
            </div>
            <div className="ft-contact-row">
              <span className="ft-clabel">Sediu</span>
              <span className="ft-cvalue">Strada Atena nr.1, Sector 1, București, România</span>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <span className="ft-copyright">
            © 2026 Urban Innovation Institute Association | Tax ID 52883389
          </span>
          <nav className="ft-legal" aria-label="Link-uri legale">
            <a href="#" className="ft-legal-link">Confidențialitate</a>
            <a href="#" className="ft-legal-link">Termeni</a>
            <a href="#" className="ft-legal-link">Cookie-uri</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
