export default function BeyondCode() {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-rohan-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">09</div>
        <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-16">Beyond Code</div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="group border-l border-rohan-white/10 pl-6">
            <h4 className="text-xs tracking-widest uppercase font-bold text-rohan-red mb-4">Gaming</h4>
            <h5 className="text-2xl font-display tracking-wide mb-4">COMPETITIVE GAMER</h5>
            <p className="text-sm font-light text-rohan-white/70 leading-relaxed italic">
              "Gaming has helped develop a competitive mindset, strategic thinking and quick decision-making."
            </p>
            <div className="mt-6 pt-4 border-t border-rohan-white/10 text-[10px] tracking-widest uppercase text-rohan-white/50">
              2 Championship Prizes
            </div>
          </div>
          
          <div className="group border-l border-rohan-white/10 pl-6">
            <h4 className="text-xs tracking-widest uppercase font-bold text-rohan-red mb-4">Fitness</h4>
            <h5 className="text-2xl font-display tracking-wide mb-4">GYM & FITNESS ENTHUSIAST</h5>
            <p className="text-sm font-light text-rohan-white/70 leading-relaxed">
              Maintaining discipline and physical well-being through regular training.
            </p>
          </div>
          
          <div className="group border-l border-rohan-white/10 pl-6">
            <h4 className="text-xs tracking-widest uppercase font-bold text-rohan-red mb-4">Fashion & Design</h4>
            <h5 className="text-2xl font-display tracking-wide mb-4">FASHION & DESIGN ENTHUSIAST</h5>
            <p className="text-sm font-light text-rohan-white/70 leading-relaxed italic">
              "An interest in visual composition, aesthetics, style and creative expression."
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
