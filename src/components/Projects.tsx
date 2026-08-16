import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  
  const [filter, setFilter] = useState('ALL');
  
  const filters = [
    'ALL',
    'WEB DEVELOPMENT',
    'FULL-STACK',
    'AI / ML',
    'CYBERSECURITY',
    'GAME DEVELOPMENT'
  ];

  const applyFilter = (p: typeof projects[0]) => {
    if (filter === 'ALL') return true;
    if (filter === 'FULL-STACK') {
      return p.category.includes('WEB DEVELOPMENT') && (p.tech.includes('Python') || p.tech.includes('Node.js') || p.tech.includes('Flask') || p.tech.includes('MySQL'));
    }
    return p.category.includes(filter);
  };

  const filteredFeaturedProjects = featuredProjects.filter(applyFilter);
  const filteredOtherProjects = otherProjects.filter(applyFilter);

  return (
    <section id="work" className="py-24 border-t border-rohan-white/10 relative">
      <div className="px-6 md:px-12 mb-20 max-w-7xl mx-auto">
        <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">03</div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-rohan-white/10 pb-8 gap-8">
          <h2 className="text-3xl md:text-5xl font-display tracking-wider">PROJECTS</h2>
          
          <div className="flex flex-wrap gap-4">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[10px] tracking-widest uppercase font-semibold pb-1 border-b-2 transition-colors ${filter === f ? 'border-rohan-red text-rohan-white' : 'border-transparent text-rohan-white/40 hover:text-rohan-white/80'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Grid */}
      {filteredFeaturedProjects.length > 0 && (
        <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-24 mb-32">
          {filteredFeaturedProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col md:flex-row gap-8 md:gap-12 items-start"
          >
            {/* Project Image/Visual placeholder */}
            <div className="w-full md:w-3/5 aspect-video bg-rohan-deep border border-rohan-white/10 overflow-hidden relative group">
              {project.image ? (
                <>
                  <div className="absolute inset-0 bg-rohan-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-rohan-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-rohan-white/5 font-display text-7xl tracking-widest uppercase transform -rotate-12 scale-150 transition-transform duration-700 group-hover:scale-100">
                    {project.title}
                  </div>
                </>
              )}
            </div>

            {/* Project Info */}
            <div className="w-full md:w-2/5 flex flex-col h-full justify-between py-4">
              <div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl font-display text-rohan-red leading-none">{project.number}</span>
                  <h3 className="text-2xl md:text-3xl font-display leading-tight">{project.title}</h3>
                </div>
                
                <p className="text-xs tracking-widest uppercase text-rohan-red mb-6 font-bold">{project.category}</p>
                <p className="text-sm font-light text-rohan-white/70 leading-relaxed mb-8">
                  {project.shortDescription}
                </p>
                
                <div className="mb-8">
                  <p className="text-[10px] tracking-widest uppercase text-rohan-white/50 mb-3 border-b border-rohan-white/10 pb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-2 py-1 bg-rohan-white/5 text-rohan-white/80 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-rohan-white/10 pt-6 mt-8">
                <span className="text-xs tracking-widest uppercase text-rohan-white/40">{project.status}</span>
                <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase hover:text-rohan-red transition-colors group-hover:translate-x-2 transform duration-300">
                  View Case Study <span className="text-rohan-red">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      )}

      {/* All Projects */}
      {filteredOtherProjects.length > 0 && (
        <div id="all-projects" className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="border-b border-rohan-white/10 pb-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-display tracking-wider text-rohan-white/50">MORE PROJECTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOtherProjects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id} className="relative overflow-hidden border border-rohan-white/10 bg-rohan-deep hover:border-rohan-red/50 transition-colors group flex flex-col justify-between min-h-[300px]">
              {/* Image Background */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-rohan-black/80 group-hover:bg-rohan-black/60 transition-colors duration-500 z-10" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
                </div>
              )}
              
              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-3xl font-display text-rohan-red">{project.number}</span>
                    <span className="text-[10px] tracking-widest uppercase text-rohan-white/40">{project.status}</span>
                  </div>
                  <h3 className="text-xl font-display leading-tight mb-3 group-hover:text-rohan-red transition-colors">{project.title}</h3>
                  <p className="text-xs text-rohan-white/60 line-clamp-3">{project.shortDescription}</p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-rohan-white/10">
                   <p className="text-[10px] tracking-widest text-rohan-white/40 mb-2 truncate group-hover:text-rohan-white/80 transition-colors">{project.tech.join(' • ')}</p>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      )}
    </section>
  );
}
