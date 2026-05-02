import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import logoLight from '../assets/images/logo-brand-black.png';
import logoDark from '../assets/images/logo-brand-white.png';

const links = [
  { label: 'Soluciones', href: '/#soluciones' },
  { label: 'Sectores', href: '/#sectores' },
  { label: 'Capacidades', href: '/#capacidades' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Cotizar', href: '/cotizar' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300" style={{ borderColor: 'var(--color-nav-border)', background: 'var(--color-nav-bg)' }}>
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="/" className="block">
          <img src={logoLight.src} alt="MG Cortes & Dobleces" className="h-12 w-auto dark:hidden" />
          <img src={logoDark.src} alt="MG Cortes & Dobleces" className="hidden h-12 w-auto dark:block" />
        </a>
        
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-main)] transition-colors hover:text-[var(--color-accent-secondary)]"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="/cotizar" className="button-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em]">Solicitar cotizacion</a>
        </nav>
        
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label="Menu"
            className="relative z-50 flex flex-col gap-1.5 p-1"
          >
            <span className={`block h-0.5 w-6 bg-[var(--color-brand-primary)] transition-all dark:bg-white ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-[var(--color-brand-primary)] transition-all dark:bg-white ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-[var(--color-brand-primary)] transition-all dark:bg-white ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ background: 'var(--color-bg-main)' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-semibold text-[var(--color-brand-primary)] dark:text-white"
          >
            {link.label}
          </a>
        ))}
        <a href="/cotizar" onClick={() => setIsMenuOpen(false)} className="button-primary px-8 py-3 text-base">Solicitar cotizacion</a>
      </div>
    </header>
  );
}
