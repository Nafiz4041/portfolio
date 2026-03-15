const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">N</div>
        <p className="text-white/25 text-xs font-medium uppercase tracking-widest">© 2025 MD. Mohaiminul Islam Nafiz</p>
      </div>
      <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/25">
        <a href="https://github.com/Nafiz4041" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
        <a href="https://mohaiminulislam.netlify.app" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Portfolio</a>
        <a href="mailto:mohaiminnafiz13@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
        <a href="#home" className="hover:text-blue-400 transition-colors">↑ Top</a>
      </div>
    </footer>
  );
};

export default Footer;
