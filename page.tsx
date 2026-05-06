import Link from "next/link";

export default function Competencies() {
  return (
    <div className="pt-32 pb-[var(--spacing-section-gap)] px-[var(--spacing-margin)] md:px-[var(--spacing-gutter)] max-w-7xl mx-auto flex flex-col gap-[var(--spacing-section-gap)]">
      {/* Back to Home Button */}
      <div className="-mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-label text-sm uppercase tracking-widest hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <header className="flex flex-col gap-base max-w-3xl">
        <h1 className="font-h1 text-4xl md:text-5xl font-bold text-[var(--color-on-surface)]">Technical Skills &amp; Competencies</h1>
        <p className="font-body-lg text-lg text-[var(--color-on-surface-variant)] mt-4">
          A comprehensive overview of programming languages, frameworks, and tools I use to build scalable web applications and software solutions.
        </p>
      </header>

      {/* Structured Grid for Competencies */}
      <div className="flex justify-center w-full">
        
        {/* Column 1: Computational Languages */}
        <section className="w-full max-w-4xl flex flex-col gap-10">
          <div className="border-b border-[var(--color-surface-variant)] pb-2">
            <h2 className="font-h2 text-3xl font-bold text-[var(--color-on-surface)] flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--color-primary)]">code</span>
              Languages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Python */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--color-surface-container-low)] border border-[var(--color-surface-variant)] hover:border-t-2 hover:border-t-[var(--color-primary)] hover:bg-[var(--color-surface-container-high)] transition-all duration-150 group">
              <div className="flex justify-between items-center">
                <h3 className="font-h3 text-xl font-semibold text-[var(--color-on-surface)]">Python</h3>
              </div>
            </div>
            {/* C++ */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--color-surface-container-low)] border border-[var(--color-surface-variant)] hover:border-t-2 hover:border-t-[var(--color-primary)] hover:bg-[var(--color-surface-container-high)] transition-all duration-150 group">
              <div className="flex justify-between items-center">
                <h3 className="font-h3 text-xl font-semibold text-[var(--color-on-surface)]">C++</h3>
              </div>
            </div>
            {/* Java */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--color-surface-container-low)] border border-[var(--color-surface-variant)] hover:border-t-2 hover:border-t-[var(--color-primary)] hover:bg-[var(--color-surface-container-high)] transition-all duration-150 group">
              <div className="flex justify-between items-center">
                <h3 className="font-h3 text-xl font-semibold text-[var(--color-on-surface)]">Java</h3>
              </div>
            </div>
            {/* JavaScript/TypeScript */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--color-surface-container-low)] border border-[var(--color-surface-variant)] hover:border-t-2 hover:border-t-[var(--color-primary)] hover:bg-[var(--color-surface-container-high)] transition-all duration-150 group">
              <div className="flex justify-between items-center">
                <h3 className="font-h3 text-xl font-semibold text-[var(--color-on-surface)]">JavaScript/TypeScript</h3>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
