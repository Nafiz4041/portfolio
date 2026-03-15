const About = () => {
  return (
    <div className="py-28 px-6 md:px-12 bg-white/[0.01] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="reveal mb-14">
          <div className="sec-label">01 — Profile</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">The Vision</h2>
          <div className="w-11 h-0.5 bg-blue-600 rounded" />
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main bio */}
          <div className="lg:col-span-2 glass rounded-[2rem] p-8 md:p-10 reveal">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-white/75">
              A <strong className="text-white font-semibold">Computer Science Engineer</strong> by education and a{' '}
              <strong className="text-white font-semibold">Growth Strategist</strong> by trade. I bridge complex tech teams with high-value project acquisition. Currently scaling operations at{' '}
              <span className="text-blue-400 font-semibold">Betopia Group</span>.
            </p>
          </div>

          {/* Currently */}
          <div className="glass glass-blue rounded-[2rem] p-8 flex flex-col justify-between reveal" style={{ transitionDelay: '100ms' }}>
            <div>
              <div className="sec-label mb-3">Currently</div>
              <p className="text-white/75 text-sm leading-relaxed">Scaling Betopia Group through strategic Upwork project acquisition and CRM pipeline optimization.</p>
            </div>
            <div className="mt-5 flex items-center gap-2 text-green-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-green-400 block animate-pulse" />
              Open to new opportunities
            </div>
          </div>

          {/* Stat */}
          <div className="glass rounded-[2rem] p-8 flex flex-col justify-between reveal" style={{ transitionDelay: '50ms' }}>
            <p className="text-5xl font-bold text-blue-400 italic">50+</p>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mt-2">Monthly Leads Orchestrated</p>
          </div>

          <div className="glass rounded-[2rem] p-8 flex flex-col justify-between reveal" style={{ transitionDelay: '150ms' }}>
            <div className="flex gap-1.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500" /><div className="w-2 h-2 rounded-full bg-blue-400/50" /><div className="w-2 h-2 rounded-full bg-blue-400/20" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">HubSpot CRM Automation Pro</p>
          </div>

          <div className="glass rounded-[2rem] p-8 flex flex-col justify-between reveal" style={{ transitionDelay: '180ms' }}>
            <p className="text-4xl font-bold text-white">3.23</p>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mt-2">Engineering CGPA Merit</p>
          </div>

          {/* Hybrid advantage */}
          <div className="lg:col-span-3 glass rounded-[2rem] p-8 md:p-10 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: '01', sub: 'Technical Core', title: 'BSc Computer Science', body: 'Armed with a CSE degree from Daffodil International University — I understand architecture, Flutter/Dart logic, and operational constraints, not just business talk.' },
                { num: '02', sub: 'Growth Engine', title: 'Business Development', body: 'Focused on turning Upwork account health into high-velocity project streams, building frictionless sales funnels, and coordinating cross-functional teams at scale.' },
                { num: '03', sub: 'Leadership Roots', title: 'Community & Strategy', body: 'From General Secretary of the Science Club to leading Quiz Olympiads — my foundation is built on organizing people and ideas into impactful, measurable initiatives.' },
              ].map((item) => (
                <div key={item.num} className="group">
                  <div className="sec-label mb-2">{item.num} / {item.sub}</div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
