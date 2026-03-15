const skillCards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#60a5fa" viewBox="0 0 24 24" strokeWidth={2}><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    iconBg: 'bg-blue-600/20',
    title: 'Business & Ops',
    items: ['Business Development', 'Client Acquisition', 'Lead Generation', 'Market Research', 'Sales Coordination'],
    dotColor: 'bg-blue-500',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#22d3ee" viewBox="0 0 24 24" strokeWidth={2}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>
    ),
    iconBg: 'bg-cyan-600/20',
    title: 'Strategic Tools',
    items: ['HubSpot CRM', 'ClickUp & Trello', 'MS Office Suite', 'Digital Marketing', 'Upwork Management'],
    dotColor: 'bg-cyan-500',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#818cf8" viewBox="0 0 24 24" strokeWidth={2}><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    iconBg: 'bg-indigo-600/20',
    title: 'Tech Literacy',
    items: ['Flutter & Dart', 'Clean Architecture', 'SEO (Basic)', 'Proposal Writing', 'Global Scaling'],
    dotColor: 'bg-indigo-400',
  },
];

const softSkills = ['Leadership', 'Communication', 'Decision-Making', 'Risk Mitigation', 'Workflow Optimization', 'Interpersonal Skills', 'Fast Learner', 'Team Collaboration', 'Cold Outreach', 'Client Relations', 'Multitasking', 'Profit-Focused Thinking'];

const Skills = () => {
  return (
    <div className="py-28 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1 reveal">
            <div className="sec-label">03 — Competencies</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">Expertise<br />Stack</h2>
            <p className="text-white/40 text-sm leading-relaxed">The tools and methodologies I use to drive exponential business growth.</p>
          </div>
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-5">
              {skillCards.map((card, i) => (
                <div key={i} className="glass rounded-3xl p-7 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-600/5 transition-all group reveal" style={{ transitionDelay: `${(i + 1) * 50}ms` }}>
                  <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h4 className="text-base font-bold mb-4">{card.title}</h4>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/45">
                        <span className={`w-1 h-1 rounded-full ${card.dotColor} block`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Soft skills */}
              <div className="md:col-span-3 glass rounded-3xl p-7 reveal" style={{ transitionDelay: '200ms' }}>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 font-mono mb-4">Soft Skills &amp; Attributes</div>
                <div>
                  {softSkills.map((s) => (
                    <span key={s} className="tag-pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
