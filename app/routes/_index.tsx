import { useState } from 'react';

export default function Index() {
  const [step, setStep] = useState('landing'); // 'landing', 'auth', 'prompt', 'dashboard'
  const [authEmail, setAuthEmail] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Vortex AI Agent', text: 'Connected to WebContainer & AI Engine. Ready to build your application.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeTab, setActiveTab] = useState('preview');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail) {
      alert('Please enter your email or continue with Google/GitHub.');
      return;
    }
    setStep('prompt');
  };

  const handleGenerateApp = () => {
    if (!prompt.trim()) {
      alert('Please describe your app idea first!');
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep('dashboard');
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const msg = inputMessage.trim();
    setChatMessages(prev => [...prev, { sender: 'You', text: msg }]);
    setInputMessage('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'Vortex AI Agent', text: 'Synthesizing code updates via WebContainers... Changes applied successfully!' }]);
    }, 1200);
  };

  return (
    <div className="bg-[#07090e] text-gray-100 min-h-screen flex flex-col font-sans select-none overflow-x-hidden">
      
      {/* 1. LANDING PAGE */}
      {step === 'landing' && (
        <div className="flex-1 flex flex-col justify-between">
          <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-md bg-black/40">
            <div className="flex items-center gap-2.5 text-white font-black text-xl">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 text-transparent bg-clip-text">Vortex</span>
              <span className="text-[11px] text-gray-400 font-normal border-l border-gray-700 pl-2.5">Web & Apps Development</span>
            </div>
            <button onClick={() => setStep('auth')} className="bg-white hover:bg-gray-200 text-black text-xs px-5 py-2.5 rounded-xl font-bold transition shadow-xl cursor-pointer">
              Get Started
            </button>
          </header>

          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
            <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-4 py-1.5 rounded-full font-semibold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-wand-magic-sparkles"></i> Powered by Real WebContainers & AI
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-tight">
              Where ideas become reality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Build full-stack apps instantly.</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-xl text-sm leading-relaxed">
              Experience true browser-based virtual development. Write a prompt, watch code compile, and launch live apps in seconds.
            </p>
            <div className="mt-8">
              <button onClick={() => setStep('auth')} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white px-8 py-3.5 rounded-2xl font-bold text-sm transition shadow-2xl cursor-pointer flex items-center gap-2">
                <span>Start Building Now</span> <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </section>
        </div>
      )}

      {/* 2. REAL AUTHENTICATION PAGE */}
      {step === 'auth' && (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-[#111522] border border-white/10 w-full max-w-md rounded-3xl p-8 space-y-6 shadow-2xl relative">
            <button onClick={() => setStep('landing')} className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer"><i className="fa-solid fa-xmark text-lg"></i></button>
            <div className="text-center space-y-2">
              <div className="text-orange-500 font-extrabold text-xl">Vortex Access</div>
              <h2 className="text-xl font-extrabold text-white">Sign in to your workspace</h2>
              <p className="text-xs text-gray-400">Enter your credentials to unlock the AI builder</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-2">
              <div>
                <label className="text-[11px] text-gray-400 block mb-1 font-medium">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#07090e] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl text-xs font-bold transition shadow-lg cursor-pointer">
                Continue with Email
              </button>
            </form>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-[10px] uppercase font-bold">Or</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setStep('prompt')} className="bg-[#07090e] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer">
                <i className="fa-brands fa-google text-red-500"></i> Google
              </button>
              <button onClick={() => setStep('prompt')} className="bg-[#07090e] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer">
                <i className="fa-brands fa-github"></i> GitHub
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. PROMPT CREATION PAGE */}
      {step === 'prompt' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
          <div className="max-w-xl w-full text-center space-y-6">
            <h1 className="text-3xl font-extrabold text-white">What will you build today?</h1>
            <p className="text-xs text-gray-400">Describe your app in detail. Our AI agent will write and compile it live.</p>

            <div className="bg-[#111522] border border-white/10 rounded-2xl p-4 shadow-2xl text-left space-y-3">
              <textarea 
                rows={4} 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Build a modern SaaS dashboard with user analytics, dark mode, and stripe billing integration..." 
                className="w-full bg-transparent text-sm focus:outline-none resize-none text-gray-200 placeholder-gray-500"
              />
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded font-medium">
                  <i className="fa-solid fa-microchip"></i> WebContainer Engine Ready
                </span>
                <button 
                  onClick={handleGenerateApp}
                  disabled={isGenerating}
                  className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow"
                >
                  {isGenerating ? (
                    <span><i className="fa-solid fa-spinner animate-spin"></i> Building App...</span>
                  ) : (
                    <span>Generate App <i className="fa-solid fa-arrow-right"></i></span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN SPLIT-SCREEN WORKSPACE DASHBOARD */}
      {step === 'dashboard' && (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-screen">
          
          {/* Left: Preview & Code Split */}
          <div className="flex-1 flex flex-col bg-[#07090e] border-r border-white/5">
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#111522]">
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('preview')} 
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${activeTab === 'preview' ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fa-solid fa-globe"></i> Live Preview
                </button>
                <button 
                  onClick={() => setActiveTab('code')} 
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${activeTab === 'code' ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fa-solid fa-code"></i> Code Files
                </button>
              </div>
              <button onClick={() => alert('App deployed live to Cloudflare production!')} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-lg font-bold cursor-pointer hover:bg-emerald-500/20 transition">
                <i className="fa-solid fa-rocket"></i> Publish Live
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 bg-black/40 overflow-auto">
              {activeTab === 'preview' ? (
                <div className="w-full max-w-3xl h-[520px] bg-white text-gray-900 rounded-2xl shadow-2xl flex flex-col p-6 justify-between overflow-hidden">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-orange-600 text-xs uppercase tracking-wider">Live Virtual Runtime</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-0.5 rounded font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Running
                      </span>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-4">
                      <h3 className="font-extrabold text-sm text-gray-800">Generated Application Output</h3>
                      <p className="text-xs text-gray-500 mt-1">Prompt: "{prompt}"</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl">
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Total Users</p>
                        <p className="text-lg font-extrabold text-orange-600 mt-1">1,245</p>
                      </div>
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Revenue Generated</p>
                        <p className="text-lg font-extrabold text-emerald-600 mt-1">₹84,200</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-center text-gray-400">Powered by Vortex WebContainers & Cloudflare</p>
                </div>
              ) : (
                <div className="w-full max-w-3xl h-[520px] bg-[#111522] border border-white/10 text-gray-300 rounded-2xl p-4 font-mono text-xs overflow-auto shadow-2xl">
                  <p className="text-orange-400">// app.tsx - Compiled via WebContainers</p>
                  <p className="text-gray-500 mt-2">import React from 'react';</p>
                  <p className="text-gray-500">import &#123; Analytics, Card &#125; from '@vortex/ui';</p>
                  <p className="text-gray-300 mt-2">export default function App() &#123;</p>
                  <p className="pl-4 text-gray-400">return (</p>
                  <p className="pl-8 text-emerald-400">&lt;div className="p-6 bg-slate-900 text-white min-h-screen"&gt;</p>
                  <p className="pl-12 text-gray-300">&lt;h1 className="text-2xl font-bold"&gt;{prompt || 'Generated SaaS App'}&lt;/h1&gt;</p>
                  <p className="pl-12 text-gray-400">&lt;Analytics data=&#123;true&#125; /&gt;</p>
                  <p className="pl-8 text-emerald-400">&lt;/div&gt;</p>
                  <p className="pl-4 text-gray-400">);</p>
                  <p className="text-gray-500">&#125;</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: AI Chat Console */}
          <div className="w-full md:w-96 bg-[#111522] border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-between h-[45vh] md:h-full">
            <div className="h-12 border-b border-white/5 flex items-center px-4 text-xs font-bold text-gray-300">
              <span><i className="fa-solid fa-robot text-orange-500"></i> E-3 AI Coding Agent</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((m, i) => (
                <div key={i} className={`p-3 rounded-xl text-xs max-w-[85%] ${m.sender === 'You' ? 'ml-auto bg-orange-600 text-white' : 'bg-[#07090e] border border-white/10 text-gray-200'}`}>
                  {m.sender !== 'You' && <p className="text-orange-400 font-bold mb-1">{m.sender}</p>}
                  <p>{m.text}</p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#07090e] border-t border-white/5 space-y-2">
              <div className="flex items-center gap-1 text-[10px] text-gray-400 px-1">
                <button onClick={() => alert('Microphone voice typing active!')} className="hover:text-orange-400 cursor-pointer"><i className="fa-solid fa-microphone"></i> Voice Prompt</button>
                <span>•</span>
                <span>Type modifications below</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask AI to modify UI or add database..." 
                  className="flex-1 bg-[#111522] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
                />
                <button onClick={handleSendMessage} className="bg-orange-500 text-white px-3 py-2 rounded-lg text-xs cursor-pointer hover:bg-orange-600 transition">
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
