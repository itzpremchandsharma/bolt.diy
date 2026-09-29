import { useState } from 'react';

export default function PromptStudio({ userEmail, onGenerate, onBack }) {
  const [promptText, setPromptText] = useState('');

  const handleTrigger = () => {
    if (!promptText.trim()) {
      alert('कृपया अपना ऐप या वेबसाइट का आइडिया दर्ज करें!');
      return;
    }
    onGenerate(promptText);
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#020408] text-gray-100 min-h-screen">
      {/* Top Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-2xl bg-black/60 sticky top-0 z-50">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 flex items-center justify-center font-black text-black text-base shadow-2xl shadow-orange-500/30">V</div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-wider text-white leading-none">VORTEX</span>
            <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mt-0.5">Web & Apps Development</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400 font-medium hidden sm:inline">Signed in as: <strong className="text-white">{userEmail}</strong></span>
          <button onClick={onBack} className="text-xs text-gray-400 hover:text-white transition font-bold cursor-pointer">Sign Out</button>
        </div>
      </header>

      {/* Prompt Studio Main Content */}
      <section className="flex-1 flex flex-col items-center justify-center p-6 relative">
        <div className="absolute w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-2xl w-full text-center space-y-6 relative z-10">
          <span className="text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 shadow-inner">
            <i className="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Step 2 of 3: AI Prompt Studio
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">What will you build today?</h1>
          <p className="text-xs md:text-sm text-gray-400 font-medium">Describe your application or website in detail. Our autonomous E-3 Agent will build the frontend, backend, and database instantly.</p>

          <div className="bg-[#0c1017] border border-white/10 rounded-3xl p-7 shadow-2xl text-left space-y-4 backdrop-blur-xl">
            <textarea 
              rows={4} 
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="E.g., Build a complete SaaS dashboard with user authentication, real-time analytics, and Stripe billing integration..." 
              className="w-full bg-transparent text-sm focus:outline-none resize-none text-gray-200 placeholder-gray-600 leading-relaxed font-medium"
            />
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> WebContainers Sandbox Ready
              </span>
              <button 
                onClick={handleTrigger}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white px-7 py-3.5 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-xl shadow-orange-500/25"
              >
                <span>Proceed to Pricing & Paywall</span> <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
