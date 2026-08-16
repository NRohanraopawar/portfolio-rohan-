import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Contact() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-rohan-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="md:w-1/2">
            <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">11</div>
            <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-12">Let's Work Together</div>
            
            <h2 className="text-6xl md:text-8xl font-display leading-[0.85] mb-8 uppercase text-stroke">
              Let's<br/>Build<br/>Something<br/>Together.
            </h2>
            <p className="text-rohan-white/70 text-lg leading-relaxed max-w-md font-light mb-12">
              Have an idea, project or opportunity? Let's create something meaningful.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-8 border-t border-rohan-white/10">
              <a href="mailto:rohanraopawar8@gmail.com" className="text-xs font-semibold tracking-widest uppercase hover:text-rohan-red transition-colors flex items-center gap-2">
                Email Me <span className="text-rohan-red">→</span>
              </a>
              <a href="https://www.linkedin.com/in/n-rohan-rao-pawar-95ba83339" target="_blank" rel="noreferrer" className="text-xs font-semibold tracking-widest uppercase hover:text-rohan-red transition-colors flex items-center gap-2">
                LinkedIn <span className="text-rohan-red">→</span>
              </a>
              <button 
                onClick={() => setShowResume(true)}
                className="text-xs font-semibold tracking-widest uppercase text-rohan-red hover:text-rohan-white transition-colors flex items-center gap-2"
              >
                View Resume <span className="text-rohan-white">↓</span>
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex items-center">
            <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-rohan-white/20 pb-2">
                <label htmlFor="name" className="block text-[10px] tracking-widest uppercase text-rohan-white/50 mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-transparent text-lg font-light text-rohan-white placeholder-rohan-white/20 focus:outline-none" placeholder="JOHN DOE" />
              </div>
              
              <div className="border-b border-rohan-white/20 pb-2">
                <label htmlFor="email" className="block text-[10px] tracking-widest uppercase text-rohan-white/50 mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-transparent text-lg font-light text-rohan-white placeholder-rohan-white/20 focus:outline-none" placeholder="HELLO@EXAMPLE.COM" />
              </div>
              
              <div className="border-b border-rohan-white/20 pb-2">
                <label htmlFor="message" className="block text-[10px] tracking-widest uppercase text-rohan-white/50 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-transparent text-lg font-light text-rohan-white placeholder-rohan-white/20 focus:outline-none resize-none" placeholder="TELL ME ABOUT YOUR PROJECT..." />
              </div>
              
              <button type="submit" className="pt-4 text-xs font-semibold tracking-widest uppercase hover:text-rohan-red transition-colors flex items-center gap-2">
                Send Message <span className="text-rohan-red">→</span>
              </button>
            </form>
          </div>
          
        </div>
      </section>

      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-rohan-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-rohan-deep border border-rohan-white/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            >
              <div className="sticky top-0 bg-rohan-black/90 backdrop-blur-md p-6 border-b border-rohan-white/10 flex justify-between items-center z-10">
                <h2 className="text-2xl font-display tracking-widest">RESUME</h2>
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('N. Rohan Rao Pawar Resume...');
                      link.download = 'N_Rohan_Rao_Pawar_Resume.txt';
                      link.click();
                    }}
                    className="text-[10px] font-semibold tracking-widest uppercase text-rohan-red hover:text-rohan-white transition-colors"
                  >
                    Download
                  </button>
                  <button onClick={() => setShowResume(false)} className="text-rohan-white/50 hover:text-rohan-white transition-colors">
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              <div className="p-8 md:p-12 space-y-12">
                <header>
                  <h1 className="text-5xl font-display text-rohan-red mb-2">N. Rohan Rao Pawar</h1>
                  <p className="text-xs tracking-widest uppercase text-rohan-white/70">Web / Full-Stack Developer • AI/ML Enthusiast</p>
                </header>

                <section>
                  <h3 className="text-[10px] tracking-widest uppercase font-semibold text-rohan-red mb-4 border-b border-rohan-white/10 pb-2">Career Objective</h3>
                  <p className="text-sm font-light text-rohan-white/80 leading-relaxed">
                    "To grow as a full-stack developer while exploring AI and modern technologies, contributing to innovative projects and eventually creating technology products of my own."
                  </p>
                </section>

                <section>
                  <h3 className="text-[10px] tracking-widest uppercase font-semibold text-rohan-red mb-4 border-b border-rohan-white/10 pb-2">Education</h3>
                  <div className="mb-4">
                    <h4 className="text-lg font-display tracking-wide">BCA (Bachelor of Computer Applications)</h4>
                    <p className="text-sm font-light text-rohan-white/70">Acharya Institute of Graduate Studies, Bangalore City University</p>
                    <p className="text-xs tracking-widest uppercase text-rohan-white/50 mt-2">5th Semester • Expected Graduation: 2027</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] tracking-widest uppercase font-semibold text-rohan-red mb-4 border-b border-rohan-white/10 pb-2">Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs tracking-widest uppercase text-rohan-white/50 block mb-1">Core Tech</span>
                      <p className="text-sm font-light">HTML, CSS, JavaScript, React, Python, Java, MySQL, Flask</p>
                    </div>
                    <div>
                      <span className="text-xs tracking-widest uppercase text-rohan-white/50 block mb-1">Tools</span>
                      <p className="text-sm font-light">Git, GitHub, Figma, Photoshop</p>
                    </div>
                    <div>
                      <span className="text-xs tracking-widest uppercase text-rohan-white/50 block mb-1">AI/ML</span>
                      <p className="text-sm font-light text-rohan-red">Intermediate</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] tracking-widest uppercase font-semibold text-rohan-red mb-4 border-b border-rohan-white/10 pb-2">Certifications</h3>
                  <ul className="space-y-2">
                    <li className="text-sm font-light"><span className="font-semibold text-rohan-white">IBM</span> — Python for Data Science</li>
                    <li className="text-sm font-light"><span className="font-semibold text-rohan-white">Deloitte</span> — Cybersecurity</li>
                    <li className="text-sm font-light"><span className="font-semibold text-rohan-white">Red Hat</span> — Linux Fundamentals</li>
                  </ul>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
