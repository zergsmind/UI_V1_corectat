import React from 'react'

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact() {
  return (
    <>
      <style>{`
        .ct-root {
          background: var(--c4);
          border-top: 1px solid var(--c3);
          padding: 5rem 4rem;
        }
        .ct-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .ct-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--c2);
          margin-bottom: 1rem;
        }
        .ct-heading {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: var(--c1);
          text-transform: uppercase;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }
        .ct-desc {
          font-size: 0.95rem;
          color: rgba(var(--c1-rgb), 0.7);
          line-height: 1.75;
          max-width: 420px;
        }
        .ct-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top: 0.5rem;
        }
        .ct-email-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ct-email-row {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .ct-email-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--c2);
        }
        .ct-email-link {
          font-size: 0.9rem;
          color: var(--c1);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ct-email-link:hover { color: var(--c2); }
        .ct-email-link:focus-visible { outline: 2px solid var(--c2); outline-offset: 3px; border-radius: 2px; }

        .ct-social {
          display: flex;
          gap: 1rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--c3);
        }
        .ct-social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          border: 1.5px solid var(--c3);
          border-radius: 0.4rem;
          background: transparent;
          color: var(--c1);
          font-size: 0.8rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.05em;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          min-height: 44px;
        }
        .ct-social-btn:hover {
          background: var(--c1);
          color: var(--c4);
          border-color: var(--c1);
        }
        .ct-social-btn:focus-visible {
          outline: 2px solid var(--c2);
          outline-offset: 3px;
        }

        @media (max-width: 768px) {
          .ct-root { padding: 3rem 1.5rem; }
          .ct-inner { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>

      <section className="ct-root" id="contact" aria-labelledby="contact-heading">
        <div className="ct-inner">
          <div>
            <p className="ct-label">Contact</p>
            <h2 className="ct-heading" id="contact-heading">Hai să construim împreună</h2>
            <p className="ct-desc">
              Suntem deschiși parteneriatelor cu administrații publice, corporații internaționale,
              organizații europene și investitori instituționali.
            </p>
          </div>

          <div className="ct-right">
            <div className="ct-email-group">
              <div className="ct-email-row">
                <span className="ct-email-label">General</span>
                <a href="mailto:contact@urbaninnovationinstitute.ro" className="ct-email-link">contact@urbaninnovationinstitute.ro</a>
              </div>
              <div className="ct-email-row">
                <span className="ct-email-label">Parteneriate</span>
                <a href="mailto:partnerships@urbaninnovationinstitute.ro" className="ct-email-link">partnerships@urbaninnovationinstitute.ro</a>
              </div>
              <div className="ct-email-row">
                <span className="ct-email-label">Presă</span>
                <a href="mailto:media@urbaninnovationinstitute.ro" className="ct-email-link">media@urbaninnovationinstitute.ro</a>
              </div>
            </div>

            <div className="ct-social" role="list" aria-label="Rețele sociale">
              <a
                href=""
                className="ct-social-btn"
                role="listitem"
                aria-label="Instagram UII"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon /> Instagram
              </a>
              <a
                href=""
                className="ct-social-btn"
                role="listitem"
                aria-label="LinkedIn UII"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
