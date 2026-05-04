"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import ResumeModal from "./ResumeModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleCVDownload = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-lg shadow-sm transition-all duration-300 border-b border-slate-800">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href="/">
          <div className="text-2xl font-serif font-black tracking-tighter text-slate-50 cursor-pointer transition-opacity active:opacity-70">
            MY PORTFOLIO
          </div>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.name === "Contact") {
              return (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                    className="font-medium transition-colors duration-300 font-label text-base uppercase tracking-wider text-slate-300 hover:text-blue-400 flex items-center gap-1"
                  >
                    {link.name}
                    <span className="material-symbols-outlined text-[18px]">
                      {isContactDropdownOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  
                  {isContactDropdownOpen && (
                    <div className="absolute top-full right-0 mt-4 w-[360px] max-w-[90vw] bg-[var(--color-surface-container-lowest)] rounded-2xl shadow-xl border border-[var(--color-outline-variant)]/50 p-4 flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex flex-col gap-1 p-2 hover:bg-[var(--color-surface-container-low)] rounded-xl transition-colors group">
                        <span className="font-label text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold">Email</span>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-primary)] transition-colors">mail</span>
                          <span className="font-body text-sm text-[var(--color-on-surface)] select-all">madhurichowdary2007@gmail.com</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/madhuri-chowdary-a19328335/" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 p-2 hover:bg-[var(--color-surface-container-low)] rounded-xl transition-colors group">
                        <span className="font-label text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold">LinkedIn</span>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-primary)] transition-colors">link</span>
                          <span className="font-body text-sm text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">View Profile</span>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 font-label text-base uppercase tracking-wider ${isActive
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1 font-bold"
                    : "text-slate-300 hover:text-blue-400"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={handleCVDownload}
          className="hidden md:block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary)] px-6 py-2 rounded-full font-label text-base tracking-wide hover:opacity-90 transition-opacity cursor-pointer">
          Resume
        </button>
        <button
          className="md:hidden text-slate-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col px-8 py-4 gap-4">
            {navLinks.map((link) => {
              if (link.name === "Contact") {
                return (
                  <div key={link.name} className="flex flex-col gap-3">
                    <button
                      onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                      className="font-medium text-left transition-colors duration-300 font-label text-base uppercase tracking-wider text-slate-300 hover:text-blue-400 flex justify-between items-center"
                    >
                      {link.name}
                      <span className="material-symbols-outlined text-[18px]">
                        {isContactDropdownOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                    {isContactDropdownOpen && (
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-700 ml-2">
                        <div className="flex flex-col gap-1">
                          <span className="font-label text-[10px] uppercase tracking-widest text-slate-400">Email</span>
                          <span className="font-body text-sm text-slate-300 select-all">madhurichowdary2007@gmail.com</span>
                        </div>
                        <a href="https://www.linkedin.com/in/madhuri-chowdary-a19328335/" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1">
                          <span className="font-label text-[10px] uppercase tracking-widest text-slate-400">LinkedIn</span>
                          <span className="font-body text-sm text-slate-300 hover:text-blue-400 transition-colors">View Profile</span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium transition-colors duration-300 font-label text-base uppercase tracking-wider ${pathname === link.href
                      ? "text-blue-400 font-bold"
                      : "text-slate-300 hover:text-blue-400"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={() => {
                handleCVDownload();
                setMobileMenuOpen(false);
              }}
              className="mt-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary)] px-6 py-3 rounded-full font-label text-base tracking-wide hover:opacity-90 w-full text-center">
              Resume
            </button>
          </nav>
        </div>
      )}

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </header>
  );
}
