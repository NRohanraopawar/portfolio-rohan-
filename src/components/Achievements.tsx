export default function Achievements() {
  const achievements = [
    {
      number: '01',
      title: '2 PRIZES',
      desc: 'College / Local Free Fire Championships'
    },
    {
      number: '02',
      title: '2ND PRIZE',
      desc: 'PU Mini Science Project\nAccident-Control Machine'
    },
    {
      number: '03',
      title: 'TECHNICAL EVENT',
      desc: 'Spector Volunteer'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 border-t border-rohan-white/10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">08</div>
          <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-4">Achievements</div>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {achievements.map((ach) => (
            <div key={ach.number} className="border-t border-rohan-white/20 pt-6">
              <span className="block text-4xl font-display text-rohan-red mb-4">{ach.number}</span>
              <h4 className="text-xl font-display tracking-wide mb-2">{ach.title}</h4>
              <p className="text-sm font-light text-rohan-white/60 whitespace-pre-line leading-relaxed">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
