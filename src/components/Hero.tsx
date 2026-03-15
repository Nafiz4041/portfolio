const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="watermark" style={{ bottom: 0, left: 0 }}>NAFIZ</div>
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 md:px-12 pt-28 pb-16 min-h-screen">

        {/* Left */}
        <div className="space-y-7 relative z-10">
          <div className="reveal inline-flex items-center gap-3 px-4 py-2 rounded-full glass glass-blue text-blue-400 text-[10px] font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot block" />
            Available for Opportunities · Dhaka, BD
          </div>

          <h1 className="reveal text-[clamp(2.8rem,6vw,5.2rem)] font-bold leading-[1.05] tracking-tight" style={{ transitionDelay: '100ms' }}>
            Md. Mohaiminul<br />
            <span className="grad-blue" style={{ textShadow: '0 0 40px rgba(59,130,246,.25)' }}>Islam Nafiz</span>
          </h1>

          <p className="reveal text-white/50 text-base md:text-lg font-light leading-relaxed max-w-lg" style={{ transitionDelay: '200ms' }}>
            <strong className="text-white font-semibold">Business Development Executive</strong> · Upwork Growth Strategist · Tech Enthusiast.<br />
            Helping tech teams acquire clients, scale operations, and grow on platforms like Upwork.
          </p>

          <div className="reveal flex flex-wrap gap-3" style={{ transitionDelay: '300ms' }}>
            <a href="#skills" className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-2xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
              View Portfolio →
            </a>
            <a href="#contact" className="px-6 py-3 glass text-white text-sm font-bold rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-0.5">
              Contact Me
            </a>
          </div>

          <div className="reveal grid grid-cols-3 gap-4 pt-2" style={{ transitionDelay: '400ms' }}>
            {[
              { num: '4+', label: 'Yrs Experience', color: 'text-blue-400' },
              { num: '3', label: 'Companies', color: 'text-cyan-400' },
              { num: '3.23', label: 'CGPA', color: 'text-white' },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center hover:glass-blue transition-all">
                <p className={`text-2xl font-bold ${s.color}`}>{s.num}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div className="reveal flex justify-center lg:justify-end" style={{ transitionDelay: '150ms' }}>
          <div className="relative">
            {/* Spinning rings */}
            <div className="animate-spin-slow absolute inset-[-20px] rounded-full border border-dashed border-blue-600/20" />
            <div className="animate-spin-slow-reverse absolute inset-[-40px] rounded-full border border-dashed border-purple-600/10" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-blue-600/15 blur-2xl" />
            {/* Card */}
            <div className="relative glass glow-box rounded-3xl overflow-hidden animate-float w-72 md:w-80" style={{ aspectRatio: '3/4' }}>
              <img src="/images/profile.jpg" alt="Nafiz" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3">
                <p className="text-xs font-bold text-white">MD. Mohaiminul Islam Nafiz</p>
                <span className="text-[10px] text-blue-400 uppercase tracking-widest">Business Dev. Executive</span>
              </div>
            </div>
            {/* Floating tags */}
            <div className="absolute -top-4 -right-4 glass glass-blue px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider text-blue-300 animate-float-delay">
              🚀 Lead Gen Expert
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider text-white/70 animate-float">
              📊 Upwork Strategy
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="col-span-full flex flex-col items-center gap-2 text-white/20 reveal">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
