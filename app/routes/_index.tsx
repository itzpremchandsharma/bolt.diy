import { useState } from 'react';

export default function Index() {
  const [step, setStep] = useState('landing'); // 'landing' | 'auth' | 'prompt' | 'dashboard'
  const [email, setEmail] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loadingText, setLoadingText] = useState('');
  const [activeTab, setActiveTab] = useState('preview');
  const [chatLog, setChatLog] = useState([
    { sender: 'Vortex AI', text: 'Virtual WebContainer environment initialized. Ready for full-stack app generation.' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('कृपया ईमेल दर्ज करें या Google/GitHub से साइन-अप करें।');
      return;
    }
    setStep('prompt');
  };

  const startGeneration = () => {
    if (!prompt.trim()) {
      alert('भाई, पहले अपना ऐप या वेबसाइट का आइडिया तो लिखो!');
      return;
    }
    setStep('dashboard');
    setLoadingText('Analyzing prompt & compiling WebContainers...');
    setTimeout(() => setLoadingText('Generating React frontend & backend schema...'), 1000);
    setTimeout(() => setLoadingText('Deploying live preview...'), 2000);
    setTimeout(() => setLoadingText(''), 3000);
  };

  const sendChatMessage = () => {
    if (!userInput.trim()) return;
    const msg = userInput;
    setChatLog(prev => [...prev, { sender: 'You', text: msg }]);
    setUserInput('');
    setTimeout(() => {
      setChatLog(prev => [...prev, { sender: 'Vortex AI', text: 'Applying real-time code updates and refreshing virtual runtime...' }]);
    }, 1000);
  };

  return (
    <div className="bg-[#030508] text-gray-100 min-h-screen flex flex-col font-sans select-none overflow-x-hidden selection:bg-orange-500 selection:text-white">
      
      {/* 1. ULTIMATE LANDING PAGE (Replit & Emergent Style) */}
      {step === 'landing' && (
        <div className="flex-1 flex flex-col justify-between">
          <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-xl bg-black/40 sticky top-0 z-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-black text-black text-sm shadow-lg shadow-orange-500/20">V</div>
              <span className="font-extrabold text-lg tracking-wider text-white">VORTEX <span className="text-xs text-orange-400 font-normal border-l border-gray-700 pl-2.5">Web & Apps AI</span></span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setStep('auth')} className="text-xs text-gray-300 hover:text-white transition font-medium cursor-pointer">Sign In</button>
              <button onClick={() => setStep('auth')} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white text-xs px-5 py-2.5 rounded-xl font-bold transition shadow-lg shadow-orange-500/25 cursor-pointer">
                Get Started Free
              </button>
            </div>
          </header>

          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 relative overflow-hidden">
            {/* Glowing Background Effect */}
            <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -top-20"></div>

            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-4 py-1.5 rounded-full font-semibold mb-6 shadow-inner">
              <i className="fa-solid fa-bolt text-orange-400"></i> Next-Gen Autonomous App Builder
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.1]">
              Where ideas become <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">reality.</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
              बनाओ अपनी खुद की वेबसाइट और मोबाइल ऐप सेकंडों में। बिना किसी कोडिंग के, सीधे वर्चुअल ब्राउज़र रनटाइम और AI एजेंट्स के साथ।
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
              <button onClick={() => setStep('auth')} className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-2xl font-extrabold text-sm transition shadow-2xl cursor-pointer flex items-center justify-center gap-3">
                <span>Start Building Now</span> <i className="fa-solid fa-arrow-right text-orange-600"></i>
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-32 text-center">
              <p className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-8">Trusted by elite developers & startups globally</p>
              <div className="flex flex-wrap justify-center items-center gap-12 text-gray-500 font-extrabold text-sm opacity-70">
                <span><i className="fa-brands fa-google"></i> GOOGLE</span>
                <span><i className="fa-brands fa-microsoft"></i> MICROSOFT</span>
                <span><i className="fa-brands fa-paypal"></i> PAYPAL</span>
                <span><i className="fa-brands fa-duolingo"></i> DUOLINGO</span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 2. AUTHENTICATION (Real Functional Form + Social Buttons) */}
      {step === 'auth' && (
        <div className="flex-1 flex items-center justify-center p-6 relative">
          <div className="absolute w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="bg-[#0c1017] border border-white/10 w-full max-w-md rounded-3xl p-8 space-y-6 shadow-2xl relative backdrop-blur-2xl">
            <button onClick={() => setStep('landing')} className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer"><i className="fa-solid fa-xmark text-lg"></i></button>
            
            <div className="text-center space-y-2">
              <div className="inline-flex w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 items-center justify-center font-bold mb-1"><i className="fa-solid fa-lock text-sm"></i></div>
              <h2 className="text-2xl font-black text-white">Vortex Workspace</h2>
              <p className="text-xs text-gray-400">Sign in securely to launch your private AI builder</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-2">
              <div>
                <label className="text-[11px] text-gray-400 block mb-1.5 font-bold uppercase tracking-wider">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#030508] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white py-3.5 rounded-xl text-xs font-bold transition shadow-lg shadow-orange-500/20 cursor-pointer">
                Continue with Email <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </form>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-[10px] uppercase font-bold tracking-widest">Or social login</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setStep('prompt')} className="bg-[#030508] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2.5 cursor-pointer shadow-sm">
                <i className="fa-brands fa-google text-red-500 text-sm"></i> Google
              </button>
              <button onClick={() => setStep('prompt')} className="bg-[#030508] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2.5 cursor-pointer shadow-sm">
                <i className="fa-brands fa-github text-sm"></i> GitHub
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. PROMPT CREATION PAGE */}
      {step === 'prompt' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
          <div className="max-w-2xl w-full text-center space-y-6">
            <span className="text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">Step 2 of 2</span>
            <h1 className="text-3xl md:text-5xl font-black text-white">What will you build today?</h1>
            <p className="text-xs md:text-sm text-gray-400">Describe your app idea in detail. Our E-3 AI Agent will instantly build the frontend, backend, and database.</p>

            <div className="bg-[#0c1017] border border-white/10 rounded-3xl p-6 shadow-2xl text-left space-y-4 backdrop-blur-xl">
              <textarea 
                rows={4} 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Build a complete crypto trading dashboard with live charts, user authentication, and stripe payments..." 
                className="w-full bg-transparent text-sm focus:outline-none resize-none text-gray-200 placeholder-gray-600 leading-relaxed"
              />
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> WebContainers Active
                </span>
                <button 
                  onClick={startGeneration}
                  className="bg-white text-black hover:bg-gray-100 px-7 py-3 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Generate App Now</span> <i className="fa-solid fa-sparkles text-orange-600"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN SPLIT-SCREEN DASHBOARD (Live Preview & Code Runtime) */}
      {step === 'dashboard' && (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-screen">
          
          {/* Left Side: Live Preview / Code Workspace */}
          <div className="flex-1 flex flex-col bg-[#030508] border-r border-white/5 relative">
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0c1017]">
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('preview')} 
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition flex items-center gap-2 ${activeTab === 'preview' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fa-solid fa-globe"></i> Live Preview
                </button>
                <button 
                  onClick={() => setActiveTab('code')} 
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition flex items-center gap-2 ${activeTab === 'code' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fa-solid fa-code"></i> Code Files
                </button>
              </div>
              <button onClick={() => alert('App successfully published to Cloudflare production!')} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-emerald-500/20 transition flex items-center gap-2">
                <i className="fa-solid fa-rocket"></i> Publish Live
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 bg-black/40 overflow-auto relative">
              {loadingText && (
                <div className="absolute inset-0 bg-[#030508]/90 backdrop-blur-md z-20 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-bold text-white tracking-wide">{loadingText}</p>
                </div>
              )}

              {activeTab === 'preview' ? (
                <div className="w-full max-w-4xl h-[560px] bg-white text-gray-900 rounded-2xl shadow-2xl flex flex-col p-6 justify-between overflow-hidden">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-black text-orange-600 text-xs uppercase tracking-wider">Virtual Runtime Environment</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] px-3 py-1 rounded-full font-extrabold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Running Live
                      </span>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl mb-4">
                      <h3 className="font-black text-base text-gray-900">AI Generated Application</h3>
                      <p className="text-xs text-gray-500 mt-1">Prompt: "{prompt}"</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl">
                        <p className="text-[11px] text-gray-500 font-extrabold uppercase">Active Users</p>
                        <p className="text-2xl font-black text-orange-600 mt-1">2,840</p>
                      </div>
                      <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                        <p className="text-[11px] text-gray-500 font-extrabold uppercase">Total Revenue</p>
                        <p className="text-2xl font-black text-emerald-600 mt-1">₹1,42,500</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-center text-gray-400 font-medium">Powered by Vortex WebContainers & Cloudflare Engine</p>
                </div>
              ) : (
                <div className="w-full max-w-4xl h-[560px] bg-[#0c1017] border border-white/10 text-gray-300 rounded-2xl p-5 font-mono text-xs overflow-auto shadow-2xl">
                  <p className="text-orange-400">// app.tsx - Compiled via WebContainers</p>
                  <p className="text-gray-500 mt-2">import React from 'react';</p>
                  <p className="text-gray-500">import &#123; Dashboard, Analytics &#125; from '@vortex/engine';</p>
                  <p className="text-gray-300 mt-3">export default function MainApp() &#123;</p>
                  <p className="pl-4 text-gray-400">return (</p>
                  <p className="pl-8 text-emerald-400">&lt;div className="min-h-screen bg-slate-950 text-white p-8"&gt;</p>
                  <p className="pl-12 text-gray-300">&lt;h1 className="text-3xl font-black"&gt;{prompt || 'Generated SaaS'}&lt;/h1&gt;</p>
                  <p className="pl-12 text-gray-400">&lt;Analytics live=&#123;true&#125; /&gt;</p>
                  <p className="pl-8 text-emerald-400">&lt;/div&gt;</p>
                  <p className="pl-4 text-gray-400">);</p>
                  <p className="text-gray-500">&#125;</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: AI Assistant & Voice Console */}
          <div className="w-full md:w-96 bg-[#0c1017] border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-between h-[48vh] md:h-full">
            <div className="h-14 border-b border-white/5 flex items-center px-6 text-xs font-black text-white tracking-wider">
              <span><i className="fa-solid fa-robot text-orange-500 mr-2"></i> E-3 AI AGENT CONSOLE</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatLog.map((item, idx) => (
                <div key={idx} className={`p-3.5 rounded-2xl text-xs max-w-[90%] leading-relaxed ${item.sender === 'You' ? 'ml-auto bg-orange-600 text-white font-medium' : 'bg-[#030508] border border-white/10 text-gray-200'}`}>
                  {item.sender !== 'You' && <p className="text-orange-400 font-bold mb-1">{item.sender}</p>}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#030508] border-t border-white/5 space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 px-1 font-semibold">
                <button onClick={() => alert('Voice assistant listening...')} className="hover:text-orange-400 cursor-pointer flex items-center gap-1"><i className="fa-solid fa-microphone text-orange-500"></i> Voice Prompt</button>
                <span>•</span>
                <span>Type chat instructions</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Ask AI to change layout, add buttons..." 
                  className="flex-1 bg-[#0c1017] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
                <button onClick={sendChatMessage} className="bg-orange-500 text-white px-4 py-2.5 rounded-xl text-xs cursor-pointer hover:bg-orange-600 transition shadow-md">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
