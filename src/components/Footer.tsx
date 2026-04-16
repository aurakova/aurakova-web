import { X } from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Marca */}
          <div className="flex flex-col gap-4">
            <a href="/" aria-label="Aurakova — volver al inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Aurakova-logo-horiz.svg" alt="Aurakova" className="h-8 w-auto" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Implementamos IA en operaciones B2B con un piloto de 4–8 semanas y ROI medible antes de comprometer más.
            </p>
          </div>

          {/* Col 2: Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <a href="#proceso" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Cómo trabajamos</a>
              </li>
              <li>
                <a href="#equipo" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Sobre nosotros</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Carreras</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="list-none flex flex-col gap-3">
              <li>
                <a href="/privacidad" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacidad</a>
              </li>
              <li>
                <a href="/aviso-legal" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Términos</a>
              </li>
              <li>
                <a href="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Cookies</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <X className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Aurakova. Todos los derechos reservados.
          </p>
          <span className="font-mono text-xs text-slate-600">
            Aurakova · Consultoría de IA B2B · España y LATAM
          </span>
        </div>
      </div>
    </footer>
  );
}
