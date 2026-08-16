export default function EducationSkills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-t border-rohan-white/10 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Education Column */}
        <div className="lg:w-1/2">
          <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">05</div>
          <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-12">Education</div>
          
          <div className="p-8 border border-rohan-white/10 bg-rohan-deep">
            <h4 className="text-3xl font-display text-rohan-red mb-2">BCA</h4>
            <p className="text-sm font-semibold tracking-wider text-rohan-white mb-6 uppercase">Bachelor of Computer Applications</p>
            
            <div className="space-y-4 text-sm font-light text-rohan-white/70">
              <p>Acharya Institute of Graduate Studies</p>
              <p>Bangalore City University</p>
              <div className="flex justify-between items-center pt-4 border-t border-rohan-white/10 mt-6">
                <span className="text-xs tracking-widest uppercase font-semibold text-rohan-white">5TH SEMESTER</span>
                <div className="text-right">
                  <span className="block text-[10px] tracking-widest uppercase text-rohan-white/40">Expected Graduation</span>
                  <span className="text-lg font-display tracking-wider text-rohan-red">2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Column */}
        <div className="lg:w-1/2">
          <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">06</div>
          <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-12">Technical Skills</div>
          
          <div className="space-y-8">
            <SkillGroup title="Frontend" skills={['HTML', 'CSS', 'JavaScript', 'React']} />
            <SkillGroup title="Backend" skills={['Python', 'Flask']} />
            <SkillGroup title="Programming" skills={['Python', 'Java', 'JavaScript']} />
            <SkillGroup title="Database" skills={['MySQL']} />
            <SkillGroup title="AI / ML" skills={['Python', 'Pandas', 'Scikit-learn', 'NLP', 'LLMs', 'RAG', 'Computer Vision']} />
            <SkillGroup title="Tools / Design" skills={['Git', 'GitHub', 'Figma', 'Photoshop']} />
            
            <div className="pt-6 border-t border-rohan-white/10 mt-8">
              <span className="text-xs tracking-widest uppercase text-rohan-white/40 mr-4">Current General Level:</span>
              <span className="text-sm tracking-widest uppercase font-semibold text-rohan-red">Intermediate</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div>
      <h5 className="text-[10px] tracking-widest uppercase font-semibold text-rohan-white/40 mb-3">{title}</h5>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1.5 border border-rohan-white/10 text-xs font-medium tracking-wide uppercase hover:border-rohan-red hover:text-rohan-red transition-colors bg-rohan-deep">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
