export default function Journey() {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-rohan-white/10 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/3">
          <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">02</div>
          <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-12">My Journey</div>
          <p className="text-sm font-semibold tracking-widest uppercase text-rohan-red">
            From Science to Software
          </p>
        </div>
        
        <div className="lg:w-2/3 space-y-12">
          <div className="prose prose-invert prose-lg max-w-none prose-p:font-light prose-p:text-rohan-white/70 prose-p:leading-relaxed">
            <p>
              After completing 10th standard, I chose PCMC because of a growing interest in computers and a lack of interest in biology. During PU, I became fascinated by computers, technology, design, and how digital systems work.
            </p>
            <p>
              I participated in a mini science project where we developed an <span className="text-rohan-white font-medium">accident-control machine</span>. That project secured <span className="text-rohan-red font-bold">2nd prize</span>, fueling my passion for building things that solve problems.
            </p>
            <p>
              After PUC, I attempted CET but did not obtain an engineering seat based on my score. I chose <span className="text-rohan-white font-medium">BCA (Bachelor of Computer Applications)</span> because it was closely connected to my core interests.
            </p>
            <p>
              During BCA, I started aggressively learning:
              <br/>
              <span className="text-rohan-white font-medium tracking-wide">PYTHON / C / C++ / JAVA / JAVASCRIPT / WEB DEVELOPMENT</span>
            </p>
            <p>
              I began building projects and attending technical sessions and events to expand my knowledge.
            </p>
            <div className="mt-12 p-8 border border-rohan-white/10 bg-rohan-deep">
              <p className="text-sm tracking-widest uppercase text-rohan-red mb-4 font-bold">Current Goal</p>
              <p className="text-2xl font-display leading-tight text-rohan-white m-0">
                Become a skilled full-stack developer, explore AI, work on innovative products, and eventually build my own technology business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
