import { useState } from 'react';

export default function Index() {
  const [currentStep, setCurrentStep] = useState('landing');
  const [emailData, setEmailData] = useState('');
  const [promptData, setPromptData] = useState('');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlanData, setSelectedPlanData] = useState('Pro');
  const [activeTab, setActiveTab] = useState('preview');
  const [chatLog, setChatLog] = useState([
    { sender: 'Vortex E-3 Agent', text: 'Secure WebContainer sandbox initialized. Node.js runtime active. Ready to synthesize application code.' }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [compilerStatus, setCompilerStatus] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailData) {
      alert('कृपया वैध ईमेल दर्ज करें!');
      return;
    }
    setCurrentStep('prompt');
  };

  const triggerGeneration = () => {
    if (!promptData.trim()) {
      alert('कृपया अपना ऐप आइडिया दर्ज करें!');
      return;
    }
    setCurrentStep('dashboard');
    setCompilerStatus('Allocating secure WebContainer memory & virtual disk...');
    setTimeout(() => setCompilerStatus('Synthesizing React components & Tailwind CSS layouts...'), 1200);
    setTimeout(() => setCompilerStatus('Configuring Node.js backend endpoints & database schemas...'), 2400);
    setTimeout(() => setCompilerStatus(''), 3600);
  };

  const sendChatMessage = () => {
    if (!inputMsg.trim()) return;
    const msg = inputMsg;
    setChatLog(prev => [...prev, { sender: 'You', text: msg }]);
    setInputMsg('');
    setTimeout(() => {
      setChatLog(prev => [...prev, { sender: 'Vortex E-3 Agent', text: 'Applying real-time modifications to virtual source code and refreshing live preview...' }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#020408] text-gray-100 flex flex-col font-sans select-none overflow-x-hidden selection:bg-orange-500 selection:text-white">
      
      {/* 1. LANDING HERO SECTION */}
      {currentStep === 'landing' && (
        <div className="flex-1 flex flex-col justify-between">
          <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-2xl bg-black/60 sticky top-0 z-50">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 flex items-center justify-center font-black text-black text-base shadow-2xl">V</div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-wider text-white leading-none">VORTEX</span>
                <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mt-0.5">Web & Apps Development</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => setCurrentStep('pricing')} className="text-xs text-gray-300 hover:text-white transition font-extrabold cursor-pointer">Pricing</button>
              <button onClick={() => setCurrentStep('auth')} className="text-xs text-gray-300 hover:text-white transition font-extrabold cursor-pointer">Sign In</button>
              <button onClick={() => setCurrentStep('auth')} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white text-xs px-6 py-3 rounded-xl font-black transition shadow-xl cursor-pointer">
                Get Started Free
              </button>
            </div>
          </header>

          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-28 relative overflow-hidden">
            <div className="absolute w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none -top-20"></div>
            <div className="inline-flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs px-4 py-2 rounded-full font-black mb-6 tracking-wide">
              <span>⚡</span> Autonomous AI App Generation & WebContainer Engine
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.08]">
              Where ideas become <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">reality.</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
              बनाओ अपनी खुद की फुल-स्टैक वेबसाइट और मोबाइल ऐप सेकंडों में। वर्चुअल ब्राउज़र रनटाइम, एडवांस E-3 AI एजेंट्स और हार्ड पेवॉल सुरक्षा के साथ।
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
              <button onClick={() => setCurrentStep('auth')} className="bg-white hover:bg-gray-100 text-black px-9 py-4 rounded-2xl font-black text-sm transition shadow-2xl cursor-pointer flex items-center justify-center gap-3">
                <span>Start Building Now</span> <span>→</span>
              </button>
              <button onClick={() => setCurrentStep('pricing')} className="bg-[#0c1017] border border-white/10 hover:bg-white/5 text-white px-9 py-4 rounded-2xl font-bold text-sm transition cursor-pointer">
                View Pricing Tiers
              </button>
            </div>
          </section>
        </div>
      )}

      {/* 2. AUTHENTICATION */}
      {currentStep === 'auth' && (
        <div className="flex-1 flex items-center justify-center p-6 relative min-h-screen">
          <div className="bg-[#0c1017] border border-white/10 w-full max-w-md rounded-3xl p-9 space-y-6 shadow-2xl relative backdrop-blur-2xl">
            <button onClick={() => setCurrentStep('landing')} className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer font-bold">✕</button>
            <div className="text-center space-y-2">
              <div className="inline-flex w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 items-center justify-center font-bold mb-1 text-lg">⚡</div>
              <h2 className="text-2xl font-black text-white">Vortex Web & Apps</h2>
              <p className="text-xs text-gray-400 font-medium">Sign in securely to access your autonomous AI workspace</p>
            </div>
            <form onSubmit={handleAuth} className="space-y-4 pt-2">
              <div>
                <label className="text-[11px] text-gray-400 block mb-1.5 font-bold uppercase tracking-wider">Work Email Address</label>
                <input 
                  type="email" 
                  required
                  value={emailData}
                  onChange={(e) => setEmailData(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500 transition font-medium"
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white py-3.5 rounded-xl text-xs font-bold transition shadow-lg cursor-pointer">
                Continue with Email →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. PROMPT STUDIO */}
      {currentStep === 'prompt' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative min-h-screen">
          <div className="max-w-2xl w-full text-center space-y-6">
            <span className="text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">Step 2 of 3: AI Prompt Studio</span>
            <h1 className="text-3xl md:text-5xl font-black text-white">What will you build today?</h1>
            <p className="text-xs md:text-sm text-gray-400 font-medium">Describe your application. Our autonomous E-3 Agent will build the UI, database, and backend instantly.</p>
            <div className="bg-[#0c1017] border border-white/10 rounded-3xl p-7 shadow-2xl text-left space-y-4 backdrop-blur-xl">
              <textarea 
                rows={4} 
                value={promptData}
                onChange={(e) => setPromptData(e.target.value)}
                placeholder="E.g., Build a complete crypto trading SaaS dashboard with live charts..." 
                className="w-full bg-transparent text-sm focus:outline-none resize-none text-gray-200 placeholder-gray-600 leading-relaxed font-medium"
              />
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> WebContainers Sandbox Active
                </span>
                <button 
                  onClick={() => setCurrentStep('pricing')}
                  className="bg-white text-black hover:bg-gray-100 px-7 py-3.5 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-2xl"
                >
                  <span>Select Plan & Generate</span> <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. PRICING & PAYWALL */}
      {currentStep === 'pricing' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto min-h-screen">
          <div className="max-w-5xl w-full space-y-8 my-auto py-12">
            <div className="text-center space-y-3">
              <span className="text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">Hard Paywall & Subscription Tiers</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">Choose your plan to unlock app generation</h2>
              <div className="flex justify-center gap-2 pt-4">
                <button onClick={() => setBillingCycle('10days')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${billingCycle === '10days' ? 'bg-orange-500 text-white' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>10 Days Pass</button>
                <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${billingCycle === 'monthly' ? 'bg-orange-500 text-white' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>Monthly Billing</button>
                <button onClick={() => setBillingCycle('yearly')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${billingCycle === 'yearly' ? 'bg-orange-500 text-white' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>Yearly (Save 20%)</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-[#0c1017] border border-white/10 p-7 rounded-3xl flex flex-col justify-between shadow-2xl">
                <div>
                  <h3 className="font-extrabold text-sm text-white">Standard</h3>
                  <p className="text-3xl font-black mt-3 text-white">{billingCycle === '10days' ? '₹499' : billingCycle === 'monthly' ? '₹1,375' : '₹11,000'}</p>
                </div>
                <button onClick={() => { setSelectedPlanData('Standard'); triggerGeneration(); }} className="mt-8 w-full bg-white text-black hover:bg-gray-100 py-3.5 rounded-xl text-xs font-black transition cursor-pointer">Select Standard</button>
              </div>
              <div className="bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/50 p-7 rounded-3xl flex flex-col justify-between relative shadow-2xl">
                <span className="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] px-3.5 py-1 rounded-full font-black uppercase">Most Popular</span>
                <div>
                  <h3 className="font-extrabold text-sm text-white">Pro</h3>
                  <p className="text-3xl font-black mt-3 text-white">{billingCycle === '10days' ? '₹1,299' : billingCycle === 'monthly' ? '₹12,500' : '₹99,000'}</p>
                </div>
                <button onClick={() => { setSelectedPlanData('Pro'); triggerGeneration(); }} className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl text-xs font-black transition cursor-pointer shadow-xl">Select Pro</button>
              </div>
              <div className="bg-[#0c1017] border border-white/10 p-7 rounded-3xl flex flex-col justify-between shadow-2xl">
                <div>
                  <h3 className="font-extrabold text-sm text-white">Enterprise</h3>
                  <p className="text-3xl font-black mt-3 text-white">Custom</p>
                </div>
                <button onClick={() => alert('Contacting Sales...')} className="mt-8 w-full bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-xl text-xs font-black transition cursor-pointer">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. WORKSPACE DASHBOARD */}
      {currentStep === 'dashboard' && (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-screen">
          <div className="flex-1 flex flex-col bg-[#020408] border-r border-white/5 relative">
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0c1017]">
              <div className="flex gap-2">
                <button onClick={() => setActiveTab('preview')} className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${activeTab === 'preview' ? 'bg-orange-500 text-white' : 'text-gray-400'}`}>Live Preview</button>
                <button onClick={() => setActiveTab('code')} className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${activeTab === 'code' ? 'bg-orange-500 text-white' : 'text-gray-400'}`}>Code Files</button>
              </div>
              <button onClick={() => alert('Published live!')} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-4 py-2 rounded-xl font-bold cursor-pointer">Publish Live</button>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 bg-black/40 overflow-auto relative">
              {compilerStatus && (
                <div className="absolute inset-0 bg-[#020408]/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-bold text-white">{compilerStatus}</p>
                </div>
              )}
              {activeTab === 'preview' ? (
                <div className="w-full max-w-4xl h-[560px] bg-white text-gray-900 rounded-2xl shadow-2xl flex flex-col p-6 justify-between">
                  <div>
                    <h3 className="font-black text-orange-600 text-xs uppercase">Virtual Runtime</h3>
                    <p className="text-xs text-gray-500 mt-1">Prompt: "{promptData || 'SaaS Application'}"</p>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-4xl h-[560px] bg-[#0c1017] border border-white/10 text-gray-300 rounded-2xl p-5 font-mono text-xs overflow-auto">
                  <p className="text-orange-400">// app.tsx - WebContainers compiled</p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-96 bg-[#0c1017] border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-between h-[48vh] md:h-full">
            <div className="h-14 border-b border-white/5 flex items-center px-6 text-xs font-black text-white">E-3 AI AGENT CONSOLE</div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatLog.map((item, idx) => (
                <div key={idx} className={`p-3.5 rounded-2xl text-xs max-w-[90%] ${item.sender === 'You' ? 'ml-auto bg-orange-600 text-white' : 'bg-[#020408] border border-white/10 text-gray-200'}`}>
                  {item.sender !== 'You' && <p className="text-orange-400 font-bold mb-1">{item.sender}</p>}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-[#020408] border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                placeholder="Ask AI to modify..." 
                className="flex-1 bg-[#0c1017] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
              />
              <button onClick={sendChatMessage} className="bg-orange-500 text-white px-4 py-2.5 rounded-xl text-xs cursor-pointer hover:bg-orange-600">➤</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

