import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rohan-black text-rohan-white">
        <div className="text-center">
          <h1 className="text-6xl font-display text-rohan-red mb-4">404</h1>
          <p className="tracking-widest uppercase mb-8">Project Not Found</p>
          <Link to="/" className="text-xs font-semibold tracking-widest uppercase hover:text-rohan-red transition-colors flex items-center justify-center gap-2">
            <span className="text-rohan-red">←</span> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-rohan-black min-h-screen text-rohan-white selection:bg-rohan-red selection:text-rohan-white">
      <Navbar />
      
      <article className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase hover:text-rohan-red transition-colors mb-12">
          <span className="text-rohan-red">←</span> Back
        </Link>

        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-baseline gap-6 mb-6"
          >
            <span className="text-6xl md:text-8xl font-display text-rohan-red leading-none">{project.number}</span>
            <h1 className="text-4xl md:text-7xl font-display leading-[0.85]">{project.title}</h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-widest uppercase text-rohan-red font-bold"
          >
            {project.category}
          </motion.p>
        </header>

        {/* Project Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full aspect-video bg-rohan-deep border border-rohan-white/10 mb-20 relative overflow-hidden flex items-center justify-center group"
        >
          {project.image ? (
            <>
              <div className="absolute inset-0 bg-rohan-black/20 z-10" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-tr from-rohan-black/80 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-rohan-white/5 font-display text-7xl md:text-[10rem] tracking-widest uppercase transform -rotate-12 scale-150 transition-transform duration-700 group-hover:scale-100">
                {project.title}
              </div>
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-6">Overview</h2>
              <p className="text-lg font-light text-rohan-white/80 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-6">Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-light text-rohan-white/70">
                    <span className="text-rohan-red mt-1">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {project.aiFeatures && project.aiFeatures.length > 0 && (
              <section>
                <h2 className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-6">AI Methodology</h2>
                <ul className="space-y-4">
                  {project.aiFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm font-light text-rohan-white/70">
                      <span className="text-rohan-red mt-1">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-12">
            <div>
              <h3 className="text-[10px] tracking-widest uppercase font-semibold text-rohan-white/40 mb-4 border-b border-rohan-white/10 pb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium px-2 py-1 bg-rohan-white/5 text-rohan-white/80 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] tracking-widest uppercase font-semibold text-rohan-white/40 mb-4 border-b border-rohan-white/10 pb-2">Status</h3>
              <p className="text-sm font-bold tracking-widest uppercase text-rohan-red">
                {project.status}
              </p>
            </div>
            
            <div className="pt-8">
              <button disabled className="w-full py-4 border border-rohan-white/10 bg-rohan-white/5 text-xs font-semibold tracking-widest uppercase text-rohan-white/30 cursor-not-allowed flex items-center justify-center gap-2">
                Live Demo <span className="text-rohan-white/30">↗</span>
              </button>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}
