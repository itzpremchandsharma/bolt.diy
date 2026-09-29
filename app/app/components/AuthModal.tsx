import { useState } from 'react';

export default function AuthModal({ onBack, onSuccess }) {
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) {
      alert('कृपया वैध ईमेल दर्ज करें!');
      return;
    }
    onSuccess(emailInput);
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#020408] text-gray-100 min-h-screen">
      {/* Top Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-2xl bg-black/60 sticky top-0 z-50">
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={onBack}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 flex items-center justify-center font-black text-black text-base shadow-2xl shadow-orange-500/30">V</div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-wider text-white leading-none">VORTEX</span>
            <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mt-0.5">Web & Apps Development</span>
          </div>
        </div>
        <button onClick={onBack} className="text-xs text-gray-400 hover:text-white transition font-bold flex items-center gap-1.5 cursor-pointer">
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </button>
      </header>

      {/* Auth Box Container */}
      <section className="flex-1 flex items-center justify-center p-6 relative">
        <div className="absolute w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="bg-[#0c1017] border border-white/10 w-full max-w-md rounded-3xl p-9 space-y-6 shadow-2xl relative backdrop-blur-2xl">
          <div className="text-center space-y-2">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-orange-500/20 text-orange-400 items-center justify-center font-bold mb-1 text-xl shadow-inner">
              <i className="fa-solid fa-lock"></i>
            </div>
            <h2 className="text-2xl font-black text-white">Vortex Workspace</h2>
            <p className="text-xs text-gray-400 font-medium">Sign in securely to access your autonomous AI app builder</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="text-[11px] text-gray-400 block mb-1.5 font-bold uppercase tracking-wider">Work Email Address</label>
              <input 
                type="email" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-[#020408] border border-white/10 rounded-xl px-4.5 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500 transition font-medium shadow-inner"
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white py-3.5 rounded-xl text-xs font-bold transition shadow-lg shadow-orange-500/25 cursor-pointer">
              Continue with Email <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </form>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-[10px] uppercase font-black tracking-widest">Or social login</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <button onClick={() => onSuccess('google-user@vortex.ai')} className="bg-[#020408] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
              <i className="fa-brands fa-google text-red-500 text-sm"></i> Google
            </button>
            <button onClick={() => onSuccess('github-user@vortex.ai')} className="bg-[#020408] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
              <i className="fa-brands fa-github text-sm"></i> GitHub
            </button>
            <button onClick={() => onSuccess('apple-user@vortex.ai')} className="bg-[#020408] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
              <i className="fa-brands fa-apple text-sm"></i> Apple
            </button>
          </div>
          
          <p className="text-[10px] text-center text-gray-500 font-medium">Protected by Vortex Enterprise Fingerprint & Data Encryption Security.</p>
        </div>
      </section>
    </div>
  );
}
