export default function Experience() {
  const experiences = [
    {
      company: 'MICROSOFT',
      role: 'Event Management',
      duration: '24 hours'
    },
    {
      company: 'TCS',
      role: 'Technical Consultation & Distribution of Medals',
      duration: '24 hours'
    },
    {
      company: 'TESCO',
      role: 'Whole Event Management & Data Handling',
      duration: '24 hours'
    },
    {
      company: 'ADOBE',
      role: 'Data Handling',
      duration: '24 hours'
    },
    {
      company: 'DELL',
      role: 'Volunteer — Recruitment of Final Semester Students',
      duration: '24 hours'
    },
    {
      company: 'SPECTOR',
      role: 'Technical Event Volunteer',
      duration: ''
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 border-t border-rohan-white/10 relative">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">04</div>
          <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-4">Experience</div>
          <p className="text-[10px] tracking-widest uppercase text-rohan-white/40">
            Freelance / Event / Volunteer
          </p>
        </div>
        
        <div className="md:w-2/3">
          <div className="space-y-8 border-l border-rohan-white/10 pl-8 ml-2 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 border border-rohan-red bg-rohan-black rounded-full group-hover:bg-rohan-red transition-colors" />
                
                <h4 className="text-xl font-display tracking-wide mb-1">{exp.company}</h4>
                <p className="text-sm font-medium text-rohan-white/80 mb-2">{exp.role}</p>
                {exp.duration && (
                  <p className="text-xs tracking-widest uppercase text-rohan-red/80 font-semibold">{exp.duration}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
