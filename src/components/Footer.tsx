import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-12 px-8 bg-slate-100 transition-all duration-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="font-serif italic text-lg text-slate-900">
          PORTFOLIO
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          <a
            className="font-label text-xs uppercase tracking-widest text-slate-500 hover:underline decoration-blue-700/30 underline-offset-4"
            href="https://github.com/MadhuriChowdary73"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
          <a
            className="font-label text-xs uppercase tracking-widest text-slate-500 hover:underline decoration-blue-700/30 underline-offset-4"
            href="https://www.linkedin.com/in/madhuri-chowdary-a19328335/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Professional Network
          </a>
          <a
            className="font-label text-xs uppercase tracking-widest text-slate-500 hover:underline decoration-blue-700/30 underline-offset-4"
            href="https://drive.google.com/file/d/1LkIbdgvYDo6vh2gndJGcKqNN4eTibErk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        <div className="font-label text-xs uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} Madhuri Chowdary • PreFinal Year B.Tech CSE
        </div>
      </div>
    </footer>
  );
}
