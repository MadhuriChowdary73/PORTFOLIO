export default function Projects() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Hero Section for Chronicle */}
      <section className="mb-20 text-center max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-on-surface)] mb-6 leading-tight">Projects</h1>
        <p className="font-body text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl mx-auto">
          A showcase of my academic and personal projects, highlighting my journey in web development, software engineering, and database management.
        </p>
      </section>

      {/* Chronological Portfolio / Timeline */}
      <section className="relative before:absolute before:inset-0 before:ml-4 sm:before:ml-8 md:before:mx-auto md:before:w-0.5 before:bg-[var(--color-surface-variant)] before:h-full z-0">
        
        {/* Project 1 */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 z-10 group">
          <div className="hidden md:block md:w-5/12 text-right pr-12">
            <span className="font-label text-sm tracking-widest text-[var(--color-primary)] uppercase font-bold mb-2 block">Recent</span>
            <h3 className="font-headline text-3xl font-bold text-[var(--color-on-surface)] mb-3">SmartRoute — AI Traffic Management</h3>
            <p className="font-body text-[var(--color-on-surface-variant)] mb-4">An AI-powered traffic management system that optimizes routes and manages congestion in real-time.</p>
            <ul className="text-[var(--color-on-surface-variant)] font-body text-sm mb-4 space-y-1">
              <li>Live camera feed-based vehicle density analysis</li>
              <li>Congestion alert system and emergency green corridor routing</li>
              <li>Suggests toll-free and fuel-efficient alternate routes</li>
            </ul>
            <div className="flex flex-wrap justify-end gap-4 mb-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
                View Code <span className="material-symbols-outlined text-[14px]">code</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-end gap-2">
              <span className="bg-[var(--color-surface-container-high)] px-3 py-1 rounded font-label text-xs text-[var(--color-on-surface-variant)]">Python</span>
              <span className="bg-[var(--color-surface-container-high)] px-3 py-1 rounded font-label text-xs text-[var(--color-on-surface-variant)]">OpenCV</span>
              <span className="bg-[var(--color-surface-container-high)] px-3 py-1 rounded font-label text-xs text-[var(--color-on-surface-variant)]">AI/ML</span>
            </div>
          </div>
          
          {/* Center Node */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full border-4 border-[var(--color-surface)] group-hover:scale-150 transition-transform duration-300"></div>
          
          <div className="pl-12 sm:pl-16 md:pl-12 md:w-5/12 w-full">
            <div className="bg-[var(--color-surface-container-lowest)] rounded-lg overflow-hidden border border-[var(--color-outline-variant)]/15 shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img 
                alt="Traffic Management Dashboard Visualization" 
                className="w-full h-64 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80"
              />
            </div>
            {/* Mobile Text (Hidden on MD) */}
            <div className="md:hidden mt-6">
              <span className="font-label text-sm tracking-widest text-[var(--color-primary)] uppercase font-bold mb-2 block">Recent</span>
              <h3 className="font-headline text-2xl font-bold text-[var(--color-on-surface)] mb-3">SmartRoute</h3>
              <p className="font-body text-[var(--color-on-surface-variant)] text-sm mb-3">An AI-powered traffic management system that optimizes routes and manages congestion in real-time.</p>
              <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] font-body text-sm mb-4 space-y-1">
                <li>Vehicle density analysis</li>
                <li>Emergency green corridor routing</li>
              </ul>
              <div className="flex flex-wrap gap-4 mb-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                  Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
                  View Code <span className="material-symbols-outlined text-[14px]">code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-12 z-10 group">
          <div className="hidden md:block md:w-5/12 text-left pl-12">
            <span className="font-label text-sm tracking-widest text-[var(--color-tertiary)] uppercase font-bold mb-2 block">Previous</span>
            <h3 className="font-headline text-3xl font-bold text-[var(--color-on-surface)] mb-3">ArogyaMithra</h3>
            <p className="font-body text-[var(--color-on-surface-variant)] mb-4">An AI Hospital Management System providing intelligent patient guidance and streamlined operations.</p>
            <ul className="text-[var(--color-on-surface-variant)] font-body text-sm mb-4 space-y-1">
              <li>Symptom-based initial disease prediction using AI</li>
              <li>Appointment booking with integrated patient record management</li>
              <li>Interactive AI assistant for patient guidance</li>
            </ul>
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
                View Code <span className="material-symbols-outlined text-[14px]">code</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-start gap-2">
              <span className="bg-[var(--color-surface-container-high)] px-3 py-1 rounded font-label text-xs text-[var(--color-on-surface-variant)]">Python</span>
              <span className="bg-[var(--color-surface-container-high)] px-3 py-1 rounded font-label text-xs text-[var(--color-on-surface-variant)]">Next.js</span>
              <span className="bg-[var(--color-surface-container-high)] px-3 py-1 rounded font-label text-xs text-[var(--color-on-surface-variant)]">NLP</span>
            </div>
          </div>
          
          {/* Center Node */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-tertiary)] rounded-full border-4 border-[var(--color-surface)] group-hover:scale-150 transition-transform duration-300"></div>
          
          <div className="pl-12 sm:pl-16 md:pr-12 md:pl-0 md:w-5/12 w-full text-right">
            <div className="bg-[var(--color-surface-container-lowest)] rounded-lg overflow-hidden border border-[var(--color-outline-variant)]/15 shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img 
                alt="Hospital Management Interface" 
                className="w-full h-64 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&auto=format&fit=crop&q=80"
              />
            </div>
            {/* Mobile Text (Hidden on MD) */}
            <div className="md:hidden mt-6 text-left">
              <span className="font-label text-sm tracking-widest text-[var(--color-tertiary)] uppercase font-bold mb-2 block">Previous</span>
              <h3 className="font-headline text-2xl font-bold text-[var(--color-on-surface)] mb-3">ArogyaMithra</h3>
              <p className="font-body text-[var(--color-on-surface-variant)] text-sm mb-3">An AI Hospital Management System providing intelligent patient guidance and streamlined operations.</p>
              <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] font-body text-sm mb-4 space-y-1">
                <li>Symptom-based disease prediction</li>
                <li>Interactive AI assistant</li>
              </ul>
              <div className="flex flex-wrap justify-start gap-4 mb-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                  Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
                  View Code <span className="material-symbols-outlined text-[14px]">code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
