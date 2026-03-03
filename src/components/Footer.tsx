"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-slate-800/50">
      <div className="w-full max-w-6xl mx-auto text-center">
        <a
          href="https://github.com/KevinDruciak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
        >
          Built by Kevin Druciak
        </a>
      </div>
    </footer>
  );
}
