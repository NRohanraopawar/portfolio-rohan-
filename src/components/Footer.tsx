export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 md:px-12 border-t border-rohan-white/10 relative overflow-hidden bg-rohan-deep">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="text-8xl md:text-[8rem] font-display leading-[0.8] mb-4 text-rohan-white">ROHAN</h2>
          <div className="text-xs font-semibold tracking-widest uppercase text-rohan-red">
            Web / Full-Stack Developer<br/>
            Creative Technologist
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-12">
          <div className="flex flex-wrap md:justify-end gap-6 md:gap-12 text-xs font-semibold tracking-widest uppercase text-rohan-white/60">
            <a href="#about" className="hover:text-rohan-red transition-colors">About</a>
            <a href="#work" className="hover:text-rohan-red transition-colors">Work</a>
            <a href="#experience" className="hover:text-rohan-red transition-colors">Experience</a>
            <a href="#skills" className="hover:text-rohan-red transition-colors">Skills</a>
            <a href="#contact" className="hover:text-rohan-red transition-colors">Contact</a>
          </div>
          
          <div className="text-right">
            <p className="text-lg font-display tracking-wider mb-2">CODE. CREATE. COMPETE.</p>
            <p className="text-[10px] tracking-widest uppercase text-rohan-white/40">
              © {new Date().getFullYear()} N. Rohan Rao Pawar. All rights reserved.
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
