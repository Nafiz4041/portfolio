const Education = () => {
  return (
    <div className="py-28 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-12">

        {/* Education */}
        <div className="reveal">
          <div className="sec-label">05 — Academics</div>
          <h2 className="text-4xl font-bold mb-10 border-l-4 border-blue-600 pl-5 tracking-tight leading-tight">Academic<br />Foundation</h2>
          <div className="flex flex-col gap-5">
            <div className="glass rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <div className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1">2021 – 2024</div>
              <div className="text-lg font-bold mb-1">BSc in Computer Science & Engineering</div>
              <div className="text-sm text-white/35 mb-3">Daffodil International University</div>
              <span className="font-mono text-[10px] font-bold uppercase text-blue-400 tracking-widest">CGPA: 3.23</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { year: '2018–2020', deg: 'H.S.C', inst: 'Nawab Habibullah Model School & College', gpa: 'GPA: 4.58' },
                { year: '2016–2018', deg: 'S.S.C', inst: 'Nawab Habibullah Model School & College', gpa: 'GPA: 4.56' },
              ].map((e) => (
                <div key={e.deg} className="glass rounded-2xl p-5 hover:border-white/20 transition-all">
                  <div className="font-mono text-[10px] text-white/30 uppercase mb-1">{e.year}</div>
                  <div className="font-bold">{e.deg}</div>
                  <div className="text-xs text-white/35 mt-1 mb-3">{e.inst}</div>
                  <span className="font-mono text-[10px] font-bold uppercase text-blue-400 tracking-widest">{e.gpa}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="reveal" style={{ transitionDelay: '100ms' }}>
          <div className="sec-label">06 — Activities</div>
          <h2 className="text-4xl font-bold mb-10 border-l-4 border-cyan-500 pl-5 tracking-tight leading-tight">Leadership<br />Roles</h2>
          <div className="glass rounded-3xl p-8 relative overflow-hidden h-auto flex flex-col justify-between">
            <div className="absolute -right-8 -top-8 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
            <div>
              <div className="sec-label text-cyan-400 mb-1">General Secretary</div>
              <h3 className="text-2xl font-bold mb-1">College Science Club</h3>
              <p className="font-mono text-[10px] text-blue-400/70 uppercase tracking-widest mb-5">2019 – 2020 · Nawab Habibullah Model School & College</p>
              <p className="text-sm text-white/50 leading-relaxed">
                Spearheaded club initiatives and organized major events including a city-wide{' '}
                <strong className="text-white">Quiz Olympiad</strong> to foster scientific curiosity and student engagement across campus.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mt-6">
              {['Event Organization', 'Team Leadership', 'Community Impact'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
