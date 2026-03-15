const experiences = [
  {
    period: 'June 2025 — Present',
    role: 'Business Development Executive',
    company: 'Betopia Group',
    badge: 'Current',
    badgeClass: 'bg-green-500/10 border border-green-500/30 text-green-400',
    points: [
      'Managed Upwork profiles ensuring peak account health, compliance, and maximum visibility.',
      'Coordinated between sales, operations, and business development teams for streamlined workflow.',
      'Researched market opportunities and proposed data-backed strategies for sustainable growth.',
      'Provided actionable insights on seller performance metrics and skill development planning.',
    ],
    dotColor: 'rgba(59,130,246,1)',
  },
  {
    period: 'January 2025 — April 2025',
    role: 'Business Development Intern',
    company: 'Tent Communications',
    badge: 'Internship',
    badgeClass: 'bg-blue-500/10 border border-blue-500/25 text-blue-400',
    points: [
      'Generated qualified leads via LinkedIn outreach, email campaigns, and deep-dive research.',
      'Conducted cold calls and successfully scheduled discovery meetings with prospective clients.',
      'Managed HubSpot CRM with accurate, up-to-date records of all client interactions.',
      'Created compelling proposals and presentations; performed market research for growth.',
    ],
    dotColor: 'rgba(34,211,238,0.8)',
  },
  {
    period: 'July 2020 — December 2021',
    role: 'Operations & Accounts Coordinator',
    company: 'Daily Trading Corporation',
    badge: 'Full-time',
    badgeClass: 'bg-white/5 border border-white/10 text-white/40',
    points: [
      'Streamlined communication channels between staff and senior management.',
      'Managed accounts, financial tracking, and ensured timely accurate reporting.',
      'Coordinated with external partners; ensured compliance and optimized workflows.',
    ],
    dotColor: 'rgba(59,130,246,0.6)',
  },
];

const Experience = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="watermark" style={{ bottom: 0, right: 0, transform: 'translateX(20%)' }}>CAREER</div>
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-28">
        <div className="reveal text-center mb-14">
          <div className="sec-label flex justify-center">02 — Work History</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Career Orbit</h2>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <div key={i} className="tl-item reveal" style={{ transitionDelay: `${i * 100}ms`, paddingBottom: i === experiences.length - 1 ? 0 : undefined }}>
              <div className="tl-dot" />
              <div className="glass rounded-2xl p-7 hover:border-blue-500/40 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <div className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1">{exp.period}</div>
                    <div className="text-2xl font-bold">{exp.role}</div>
                    <div className="text-sm text-white/45 font-medium mt-0.5">{exp.company}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${exp.badgeClass}`}>{exp.badge}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
