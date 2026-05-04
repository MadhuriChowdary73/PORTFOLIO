import React, { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[var(--color-surface-container-lowest)] rounded-3xl shadow-2xl overflow-hidden border border-[var(--color-outline-variant)]">
        <div className="flex justify-between items-center p-6 border-b border-[var(--color-surface-variant)]">
          <h2 className="font-headline text-2xl font-bold text-[var(--color-on-surface)]">Resume</h2>
          <button 
            onClick={onClose}
            className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] p-2 rounded-full transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick Highlights */}
          <div className="bg-[var(--color-surface-container-low)] p-5 rounded-2xl space-y-4">
            <h3 className="font-label text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold">Profile Highlights</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">rocket_launch</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[var(--color-on-surface)]">2 Major AI Projects</p>
                  <p className="font-body text-xs text-[var(--color-on-surface-variant)]">AI Traffic & Hospital Management</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">code_blocks</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[var(--color-on-surface)]">Core Strengths</p>
                  <p className="font-body text-xs text-[var(--color-on-surface-variant)]">C, Python, Java, Web Technologies</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">event_available</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[var(--color-on-surface)]">Availability</p>
                  <p className="font-body text-xs text-[var(--color-on-surface-variant)]">Open to Internships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <a 
              href="https://drive.google.com/file/d/1LkIbdgvYDo6vh2gndJGcKqNN4eTibErk/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={onClose}
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary)] py-3 px-4 rounded-xl font-label text-sm tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              View Resume
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1LkIbdgvYDo6vh2gndJGcKqNN4eTibErk/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] py-3 px-4 rounded-xl font-label text-sm tracking-widest uppercase hover:bg-[var(--color-surface-container-high)] transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
