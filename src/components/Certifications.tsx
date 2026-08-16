export default function Certifications() {
  const certs = [
    {
      brand: 'IBM',
      title: 'Python for Data Science',
      number: '01'
    },
    {
      brand: 'DELOITTE',
      title: 'Cybersecurity',
      number: '02'
    },
    {
      brand: 'RED HAT',
      title: 'Linux Fundamentals',
      number: '03'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 border-t border-rohan-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-6xl md:text-8xl font-display text-rohan-red mb-2 leading-none">07</div>
        <div className="text-xs tracking-widest uppercase font-semibold text-rohan-white/50 mb-12">Certifications</div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div key={cert.number} className="p-8 border border-rohan-white/10 bg-rohan-deep flex flex-col justify-between aspect-square group hover:border-rohan-red/50 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-4xl font-display text-rohan-white/20 group-hover:text-rohan-red transition-colors">{cert.number}</span>
                <span className="text-xs tracking-widest uppercase font-bold text-rohan-red">{cert.brand}</span>
              </div>
              <div>
                <h4 className="text-2xl font-display leading-tight">{cert.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
