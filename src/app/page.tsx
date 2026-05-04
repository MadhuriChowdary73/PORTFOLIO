import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-surface-container-low)] rounded-full">
              <span className="material-symbols-outlined text-[var(--color-tertiary)] fill text-sm">school</span>
              <span className="font-label text-xs uppercase tracking-widest text-[var(--color-tertiary)] font-bold">3rd Year B.Tech CSE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-widest text-green-700 dark:text-green-400 font-bold">Open to Opportunities</span>
            </div>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight tracking-tight text-[var(--color-on-background)]">
            Madhuri <br /><span className="text-[var(--color-primary)] italic">Chowdary.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl">
            Third-year Computer Science and Engineering student at Amrita University, Amaravati campus with a strong interest in software development. Eager to apply foundational programming and problem-solving skills to contribute to impactful technology solutions while gaining hands-on industry experience.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Link href="#projects" className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary)] px-8 py-3 rounded-xl font-label text-sm tracking-widest uppercase hover:shadow-md transition-all">
              View Projects
            </Link>
            <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-on-background)] px-6 py-3 rounded-xl font-label text-sm tracking-widest uppercase hover:shadow-md hover:border-[var(--color-primary)] transition-all flex items-center gap-2">
              GitHub <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <a href="https://www.linkedin.com/in/madhuri-chowdary-a19328335/" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-on-background)] px-6 py-3 rounded-xl font-label text-sm tracking-widest uppercase hover:shadow-md hover:border-[var(--color-primary)] transition-all flex items-center gap-2">
              LinkedIn <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <div className="bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-on-background)] px-6 py-3 rounded-xl font-body text-sm hover:border-[var(--color-primary)] transition-all flex items-center gap-2 select-all cursor-text">
              <span className="material-symbols-outlined text-sm text-[var(--color-primary)]">mail</span> madhurichowdary2007@gmail.com
            </div>
            <Link href="#projects" className="text-[var(--color-primary)] font-label text-sm tracking-widest uppercase flex items-center gap-2 hover:underline decoration-primary/30 underline-offset-4 transition-all group ml-2 mt-2 md:mt-0">
              My Journey
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden relative shadow-[0_0_40px_rgba(9,76,178,0.15)] hover:shadow-[0_0_60px_rgba(9,76,178,0.3)] transition-all duration-500 border-4 border-[var(--color-surface-container-lowest)] z-10 group bg-[var(--color-surface-container)]">
            <img
              alt="Profile photo of Madhuri Chowdary"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="/profile.jpg"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-tr from-[var(--color-primary)]/10 to-[var(--color-tertiary)]/10 rounded-full blur-3xl -z-10"></div>

          <div className="absolute -bottom-6 -left-2 md:-left-6 bg-[var(--color-surface-container-lowest)] p-6 rounded-2xl shadow-[0_24px_40px_-12px_rgba(0,0,0,0.06)] max-w-[240px] z-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-[var(--color-primary)]">code_blocks</span>
              <span className="font-label text-xs uppercase tracking-widest text-[var(--color-on-surface-variant)]">Focus Area</span>
            </div>
            <p className="font-headline text-sm font-bold text-[var(--color-on-background)] leading-snug">Full-Stack Web Development</p>
          </div>
        </div>
      </section>

      {/* Competencies Section Preview */}
      <section id="skills" className="bg-[var(--color-surface-container-low)] py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-[var(--color-on-background)] mb-4">Core Skills</h2>
              <p className="font-body text-[var(--color-on-surface-variant)] max-w-xl">A collection of technical skills and tools I have learned through academic coursework and personal projects.</p>
            </div>
            <Link href="/competencies" className="text-[var(--color-primary)] font-label text-sm tracking-widest uppercase hover:underline decoration-primary/30 underline-offset-4 flex items-center gap-1">
              View All Skills <span className="material-symbols-outlined text-sm">north_east</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-2xl transition-all duration-300 hover:bg-[var(--color-surface-container)]">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-primary)]">
                <span className="material-symbols-outlined fill">web</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Frontend Development</h3>
              <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Building responsive and interactive user interfaces using React, Next.js, and Tailwind CSS.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-2xl transition-all duration-300 hover:bg-[var(--color-surface-container)]">
              <div className="w-12 h-12 bg-[var(--color-tertiary)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-tertiary)]">
                <span className="material-symbols-outlined fill">database</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Backend &amp; Databases</h3>
              <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Developing robust APIs and managing data with Node.js, Express, MongoDB, and SQL databases.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[var(--color-surface-container-lowest)] p-8 rounded-2xl transition-all duration-300 hover:bg-[var(--color-surface-container)]">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-primary)]">
                <span className="material-symbols-outlined fill">terminal</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Programming Languages</h3>
              <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Strong foundation in object-oriented programming and data structures using C++, Java, and Python.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
        {/* Hero Section for Chronicle */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-on-surface)] mb-6 leading-tight">Projects</h2>
          <p className="font-body text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl mx-auto">
            A showcase of my academic and personal projects, highlighting my journey in web development, software engineering, and database management.
          </p>
        </div>

        {/* Chronological Portfolio / Timeline */}
        <div className="relative before:absolute before:inset-0 before:ml-4 sm:before:ml-8 md:before:mx-auto md:before:w-0.5 before:bg-[var(--color-surface-variant)] before:h-full z-0">
          
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
                <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                  Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
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
                  src="/smartroute.png"
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
                  <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                    Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                  <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
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
                <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                  Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
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
                  src="/arogyamithra.png"
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
                  <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-primary)] font-label text-xs tracking-widest uppercase hover:underline decoration-[var(--color-primary)]/30 underline-offset-4 transition-all">
                    Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                  <a href="https://github.com/MadhuriChowdary73" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--color-on-surface-variant)] font-label text-xs tracking-widest uppercase hover:text-[var(--color-on-surface)] transition-all">
                    View Code <span className="material-symbols-outlined text-[14px]">code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
