import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('text-green-400');

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatusColor('text-red-400');
      setStatus('⚠ Please fill in your name, email, and message.');
      return;
    }
    setStatusColor('text-green-400');
    setStatus("✓ Message sent! I'll get back to you shortly.");
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/4 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-[860px] mx-auto">
        <div className="reveal text-center mb-12">
          <div className="sec-label flex justify-center">07 — Get In Touch</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">Ready to scale?</h2>
          <p className="text-white/45 text-lg max-w-md mx-auto font-light leading-relaxed">
            Let's discuss how I can help your team secure more projects and optimize growth operations.
          </p>
        </div>

        <div className="glass rounded-[2.5rem] p-1.5 border-white/10 reveal">
          <div className="bg-black/50 rounded-[2.2rem] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              {/* Info */}
              <div className="space-y-6">
                {[
                  { label: 'Email', value: 'mohaiminnafiz13@gmail.com', href: 'mailto:mohaiminnafiz13@gmail.com' },
                  { label: 'Phone', value: '01857316721', href: 'tel:+8801857316721' },
                  { label: 'Location', value: 'Uttarkhan, Dhaka, BD' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[10px] text-blue-400 uppercase font-bold tracking-widest font-mono mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-medium hover:text-blue-400 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-lg font-medium">{item.value}</p>
                    )}
                  </div>
                ))}
                <div>
                  <div className="text-[10px] text-blue-400 uppercase font-bold tracking-widest font-mono mb-2">Connect</div>
                  <div className="flex gap-3">
                    <a href="https://github.com/Nafiz4041" target="_blank" rel="noreferrer" className="px-4 py-2 glass rounded-xl text-sm font-medium hover:bg-white/10 transition-all">↗ GitHub</a>
                    <a href="https://mohaiminulislam.netlify.app" target="_blank" rel="noreferrer" className="px-4 py-2 glass rounded-xl text-sm font-medium hover:bg-white/10 transition-all">↗ Portfolio</a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <input className="form-input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className="form-input" type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input className="form-input" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                <textarea className="form-input" placeholder="Your message…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                {status && <p className={`text-sm font-bold font-mono mb-3 ${statusColor}`}>{status}</p>}
              </div>
            </div>
            <button onClick={handleSubmit} className="w-full py-5 bg-white text-black font-bold rounded-2xl text-base hover:bg-blue-500 hover:text-white transition-all hover:shadow-lg hover:shadow-blue-600/30">
              Start a Conversation →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
