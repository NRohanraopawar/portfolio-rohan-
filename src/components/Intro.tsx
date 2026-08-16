export default function Intro() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-rohan-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">01</div>
          <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50">About</div>
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-3xl md:text-5xl font-display leading-[1.1] mb-8">
            BUILDING DIGITAL EXPERIENCES WITH CODE + CREATIVITY.
          </h3>
          <p className="text-rohan-white/70 text-lg leading-relaxed max-w-2xl font-light">
            I am a BCA student and aspiring full-stack developer focused on building modern web applications, exploring AI, and turning ideas into useful digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
