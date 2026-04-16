'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Qué hacemos', href: '#servicios' },
    { label: 'El método', href: '#proceso' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Desarrollo web', href: '/desarrollo-web' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <nav className="container mx-auto px-4 max-w-7xl py-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center no-underline" aria-label="Aurakova — volver al inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Aurakova-logo-horiz.svg" alt="Aurakova" className="w-36 h-auto" />
        </a>

        {/* Hamburger Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none"
          aria-label="Alternar menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav & CTA */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors no-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="#contacto"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-5 py-2 text-sm font-bold hover:brightness-110 shadow hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Diagnóstico gratuito
          </a>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="w-full mt-4 md:hidden flex flex-col gap-4 bg-slate-900 overflow-hidden rounded-lg p-4 border border-slate-800">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors no-underline"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-5 py-2 text-sm font-bold hover:brightness-110 transition-all shadow"
            >
              Diagnóstico gratuito
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
