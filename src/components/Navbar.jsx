import React, { useState } from 'react'

const UIILogo = ({ size = 32, onLight = true }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path fill={onLight ? 'var(--c1)' : 'var(--c4)'} d="M870.9,225.7v151.8h-51c-4.1,0-16.1,9.9-14.1,16.2-5.7,109.5,8.7,227.8-2.2,336.2-20.9,209.5-231.2,285.7-413.7,222.9-237.7-81.7-154.3-367.7-169.7-558.9,0-6.5-10.7-16.4-16.1-16.4h-47.7c-.7,0-1.7,2.7-3.3,2.2v-154h189.8c23.5,0,48.5,26.7,52.9,49s2.2,60.5,2.5,86.5c1.2,104.5-2.8,208.6-.1,312.4,1.5,55.5,13.3,106.1,73.3,124,79.1,23.6,153-19.6,156.7-104.5l.2-414.1c2.1-24.9,29.9-53.4,55.1-53.4h187.6Z"/>
    <path fill="var(--c2)" d="M276.2,52.8c102.8-14.9,113.3,129.4,27.1,142-100.5,14.7-113.6-129.4-27.1-142Z"/>
    <path fill="var(--c2)" d="M722.9,52.8c103.1-15,112.4,128.6,27.1,142-99,15.6-114.7-129.3-27.1-142Z"/>
  </svg>
)

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const COLOR_THEMES = [
  { id: '',      label: 'Sage',  swatch: '#557174' },
  { id: 'terra', label: 'Terra', swatch: '#7b5c45' },
  { id: 'slate', label: 'Slate', swatch: '#3d5a6c' },
]

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [activeTheme, setActiveTheme] = useState('')

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
  }

  const applyColorTheme = (id) => {
    setActiveTheme(id)
    document.documentElement.setAttribute('data-theme', id)
  }

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 80px;
          background: var(--c4);
          border-bottom: 1px solid var(--c3);
          display: flex;
          align-items: center;
          z-index: 1000;
        }
        .nav-inner { display: flex; align-items: center; width: 100%; height: 100%; }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0 2rem;
          flex-shrink: 0;
        }
        .nav-logo-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--c1);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .nav-center {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--c1);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--c2); }
        .nav-link-contact { display: flex; align-items: center; gap: 0.25rem; }
        .nav-link-contact .arrow { color: var(--c2); font-weight: 700; }
        .nav-right { display: flex; align-items: center; height: 100%; flex-shrink: 0; }
        .theme-swatches {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          margin-right: 0.875rem;
          padding: 0.35rem 0.6rem;
          border: 1px solid var(--c3);
          border-radius: 2rem;
        }
        .theme-swatch {
          width: 14px; height: 14px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          transition: transform 0.15s, border-color 0.15s;
          flex-shrink: 0;
          outline: none;
          padding: 0;
        }
        .theme-swatch:hover { transform: scale(1.25); }
        .theme-swatch.active {
          border-color: var(--c3);
          transform: scale(1.2);
          box-shadow: 0 0 0 2px var(--c4), 0 0 0 3px var(--c3);
        }
        .theme-toggle {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid var(--c3);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: var(--c1);
          margin-right: 1.5rem;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .theme-toggle:hover { background: var(--c3); }
        .colaboreaza-btn {
          height: 80px;
          padding: 0 2rem;
          background: var(--c1);
          color: var(--c4);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          display: flex; align-items: center; gap: 0.5rem;
          white-space: nowrap;
          min-width: 200px;
          justify-content: center;
          transition: background 0.2s;
          font-family: 'Inter', sans-serif;
          border-radius: 0;
        }
        .colaboreaza-btn:hover { background: var(--c2); }
      `}</style>

      <nav className="nav-root">
        <div className="nav-inner">
          <div className="nav-left">
            <UIILogo size={32} onLight={true} />
            <span className="nav-logo-text">UII</span>
          </div>

          <div className="nav-center">
            <a href="#about"     className="nav-link">Despre</a>
            <a href="#services"  className="nav-link">Cum Lucrăm</a>
            <a href="#ecosystem" className="nav-link">Ecosistem</a>
            <a href="#track"     className="nav-link">Track Record</a>
            <a href="#contact"   className="nav-link nav-link-contact">
              Contact <span className="arrow">→</span>
            </a>
          </div>

          <div className="nav-right">
            <div className="theme-swatches" role="group" aria-label="Color theme">
              {COLOR_THEMES.map(t => (
                <button
                  key={t.id}
                  className={`theme-swatch${activeTheme === t.id ? ' active' : ''}`}
                  style={{ background: t.swatch }}
                  onClick={() => applyColorTheme(t.id)}
                  aria-label={t.label}
                  title={t.label}
                />
              ))}
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="colaboreaza-btn">Colaborează →</button>
          </div>
        </div>
      </nav>
    </>
  )
}
