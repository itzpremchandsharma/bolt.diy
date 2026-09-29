export default function LandingHero({ onGetStarted, onPricing }) {
  return (
    <div className="flex-1 flex flex-col justify-between bg-[#020408] text-gray-100 selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-2xl bg-black/60 sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 flex items-center justify-center font-black text-black text-base shadow-2xl shadow-orange-500/30">V</div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-wider text-white leading-none">VORTEX</span>
            <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mt-0.5">Web & Apps Development</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={onPricing} className="text-xs text-gray-300 hover:text-white transition font-extrabold cursor-pointer">Pricing Plans</button>
          <button onClick={onGetStarted} className="text-xs text-gray-300 hover:text-white transition font-extrabold cursor-pointer">Sign In</button>
          <button onClick={onGetStarted} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white text-xs px-6 py-3 rounded-xl font-black transition shadow-xl shadow-orange-500/30 cursor-pointer">
            Get Started Free
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-28 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none -top-20"></div>

        <div className="inline-flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs px-4.5 py-2 rounded-full font-black mb-6 shadow-inner tracking-wide">
          <i className="fa-solid fa-bolt text-orange-400"></i> Autonomous AI App Generation & WebContainer Engine
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.08]">
          Where ideas become <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">reality.</span>
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
          बनाओ अपनी खुद की फुल-स्टैक वेबसाइट और मोबाइल ऐप सेकंडों में। वर्चुअल ब्राउज़र रनटाइम (WebContainers), एडवांस E-3 AI एजेंट्स और हार्ड पेवॉल सुरक्षा के साथ।
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <button onClick={onGetStarted} className="bg-white hover:bg-gray-100 text-black px-9 py-4 rounded-2xl font-black text-sm transition shadow-2xl cursor-pointer flex items-center justify-center gap-3">
            <span>Start Building Now</span> <i className="fa-solid fa-arrow-right text-orange-600"></i>
          </button>
          <button onClick={onPricing} className="bg-[#0c1017] border border-white/10 hover:bg-white/5 text-white px-9 py-4 rounded-2xl font-bold text-sm transition cursor-pointer">
            View Pricing Tiers
          </button>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-28 text-left">
          <div className="bg-[#0c1017]/90 border border-white/10 p-7 rounded-3xl backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-base font-bold mb-4">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <h3 className="text-white font-black text-base mb-2">WebContainers Runtime</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">ब्राउज़र के अंदर ही असली Node.js और वर्चुअल एनवायरमेंट चलाकर तुरंत कोड कंपाइल और रन करें।</p>
          </div>

          <div className="bg-[#0c1017]/90 border border-white/10 p-7 rounded-3xl backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-base font-bold mb-4">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="text-white font-black text-base mb-2">Hard Paywall Security</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">बिना सब्सक्रिप्शन या प्लान खरीदे कोई आगे नहीं बढ़ पाएगा। फालतू ट्रैफिक बाहर और सिर्फ सीरियस बायर अंदर।</p>
          </div>

          <div className="bg-[#0c1017]/90 border border-white/10 p-7 rounded-3xl backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-base font-bold mb-4">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3 className="text-white font-black text-base mb-2">E-3 Autonomous Agents</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">आपका एक प्रॉम्ट और एआई खुद फ्रंटएंड, बैकएंड और डेटाबेस का पूरा ढांचा सेकंडों में तैयार कर देगा।</p>
          </div>
        </div>
      </section>
    </div>
  );
}
