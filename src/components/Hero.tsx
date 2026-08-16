import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 pt-32 pb-12">
      {/* Background oversized text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none opacity-90 select-none">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[20vw] leading-none font-display text-rohan-red tracking-tight"
        >
          ROHAN
        </motion.h1>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end h-full mt-auto">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-md mb-12 md:mb-0"
        >
          <p className="text-xl italic font-light mb-2">Hello, I'm</p>
          <h2 className="text-6xl md:text-8xl font-display leading-[0.85] mb-6">
            ROHAN<br/>RAO PAWAR
          </h2>
          <div className="flex flex-col gap-1 text-sm tracking-widest text-rohan-red mb-6 uppercase font-bold">
            <span>Web / Full-Stack Developer</span>
            <span>AI/ML Enthusiast</span>
            <span>Creative Technologist</span>
          </div>
          <p className="text-rohan-white/70 text-sm leading-relaxed mb-8 max-w-sm">
            Building modern web applications, exploring AI, and combining technology with creative design.
          </p>
          <div className="flex flex-col gap-4 text-xs font-semibold tracking-widest uppercase">
            <a href="#work" className="flex items-center gap-2 hover:text-rohan-red transition-colors w-fit">
              View Projects <span className="text-rohan-red">→</span>
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-rohan-red transition-colors w-fit">
              Contact Me <span className="text-rohan-red">→</span>
            </a>
          </div>
        </motion.div>

        {/* Right Content - Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex md:flex-col gap-8 md:gap-12 mt-12 md:mt-0 text-right z-30 ml-auto"
        >
          <div>
            <div className="text-4xl md:text-6xl font-display text-rohan-red">7</div>
            <div className="text-[10px] tracking-widest uppercase text-rohan-white/60">Projects</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-display text-rohan-red">3</div>
            <div className="text-[10px] tracking-widest uppercase text-rohan-white/60">Certifications</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-display text-rohan-red">BCA</div>
            <div className="text-[10px] tracking-widest uppercase text-rohan-white/60">Current • 2027</div>
          </div>
          
          <div className="hidden md:block mt-auto text-[10px] tracking-widest uppercase text-rohan-white/60 pt-12">
            Bangalore, India<br/>
            Available for opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
