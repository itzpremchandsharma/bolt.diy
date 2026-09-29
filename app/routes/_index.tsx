import { useState } from 'react';

export default function Index() {
  const [step, setStep] = useState('landing'); // 'landing' | 'auth' | 'prompt' | 'pricing' | 'dashboard'
  const [userEmail, setUserEmail] = useState('');
  const [appPrompt, setAppPrompt] = useState('');
  const [subscriptionCycle, setSubscriptionCycle] = useState('monthly'); // '10days' | 'monthly' | 'yearly'
  const [selectedTier, setSelectedTier] = useState('');
  const [compilerStatus, setCompilerStatus] = useState('');
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState('preview');
  
  const [aiChatHistory, setAiChatHistory] = useState([
    { sender: 'Vortex E-3 Agent', text: 'Secure WebContainer sandbox initialized. Node.js runtime active. Ready to synthesize application code.' }
  ]);
  const [chatInputValue, setChatInputValue] = useState('');

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) {
      alert('कृपया वैध ईमेल दर्ज करें या सोशल लॉगिन का चयन करें।');
      return;
    }
    setStep('prompt');
  };

  const triggerAppGeneration = () => {
    if (!appPrompt.trim()) {
      alert('कृपया अपना ऐप या वेबसाइट का विस्तृत आइडिया दर्ज करें!');
      return;
    }
    setStep('dashboard');
    setCompilerStatus('Allocating secure WebContainer memory & virtual disk...');
    setTimeout(() => setCompilerStatus('Synthesizing React components & Tailwind CSS layouts...'), 1200);
    setTimeout(() => setCompilerStatus('Configuring Node.js backend endpoints & database schemas...'), 2400);
    setTimeout(() => setCompilerStatus('Injecting Vortex Hard Paywall & Live Emulator...'), 3600);
    setTimeout(() => setCompilerStatus(''), 4500);
  };

  const sendAgentMessage = () => {
    if (!chatInputValue.trim()) return;
    const userText = chatInputValue;
    setAiChatHistory(prev => [...prev, { sender: 'You', text: userText }]);
    setChatInputValue('');
    setTimeout(() => {
      setAiChatHistory(prev => [...prev, { sender: 'Vortex E-3 Agent', text: 'Processing modification via WebContainer runtime. Applying changes to virtual source code...' }]);
    }, 1100);
  };

  return (
    <div className="bg-[#020408] text-gray-100 min-h-screen flex flex-col font-sans select-none overflow-x-hidden selection:bg-orange-500 selection:text-white">
      
      {/* =========================================================================
        1. MASTER LANDING PAGE & HERO SECTION (Vortex Enterprise Grade)
      ========================================================================== */}
      {step === 'landing' && (
        <div className="flex-1 flex flex-col justify-between">
          {/* Header Navigation */}
          <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-2xl bg-black/60 sticky top-0 z-50">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 flex items-center justify-center font-black text-black text-base shadow-2xl shadow-orange-500/30">V</div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-wider text-white leading-none">VORTEX</span>
                <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mt-0.5">Web & Apps Development</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => setStep('pricing')} className="text-xs text-gray-300 hover:text-white transition font-extrabold cursor-pointer">Pricing Plans</button>
              <button onClick={() => setStep('auth')} className="text-xs text-gray-300 hover:text-white transition font-extrabold cursor-pointer">Sign In</button>
              <button onClick={() => setStep('auth')} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white text-xs px-6 py-3 rounded-xl font-black transition shadow-xl shadow-orange-500/30 cursor-pointer">
                Get Started Free
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-28 relative overflow-hidden">
            <div className="absolute w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none -top-20"></div>

            <div className="inline-flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs px-4 py-2 rounded-full font-black mb-6 shadow-inner tracking-wide">
              <i className="fa-solid fa-bolt text-orange-400"></i> Autonomous AI App Generation & WebContainer Engine
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.08]">
              Where ideas become <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">reality.</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
              बनाओ अपनी खुद की फुल-स्टैक वेबसाइट और मोबाइल ऐप सेकंडों में। वर्चुअल ब्राउज़र रनटाइम (WebContainers), एडवांस E-3 AI एजेंट्स और हार्ड पेवॉल सुरक्षा के साथ।
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
              <button onClick={() => setStep('auth')} className="bg-white hover:bg-gray-100 text-black px-9 py-4 rounded-2xl font-black text-sm transition shadow-2xl cursor-pointer flex items-center justify-center gap-3">
                <span>Start Building Now</span> <i className="fa-solid fa-arrow-right text-orange-600"></i>
              </button>
              <button onClick={() => setStep('pricing')} className="bg-[#0c1017] border border-white/10 hover:bg-white/5 text-white px-9 py-4 rounded-2xl font-bold text-sm transition cursor-pointer">
                View Pricing Tiers
              </button>
            </div>

            {/* Comprehensive Reviews & Social Proof */}
            <div className="mt-36 w-full max-w-6xl mx-auto px-4">
              <p className="text-[11px] uppercase tracking-widest text-gray-500 font-black mb-10">Trusted by elite engineering teams & founders globally</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
                <div className="bg-[#0c1017]/80 border border-white/10 p-7 rounded-3xl backdrop-blur-xl shadow-2xl">
                  <div className="flex text-amber-400 text-xs gap-1 mb-3"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                  <p className="text-xs text-gray-300 leading-relaxed font-medium">"Vortex has completely transformed how we prototype. We built our entire SaaS MVP in 10 minutes using the E-3 agent."</p>
                  <p className="text-[11px] font-black text-white mt-5">— Alex Rivers, CEO at NexusCloud</p>
                </div>
                <div className="bg-[#0c1017]/80 border border-white/10 p-7 rounded-3xl backdrop-blur-xl shadow-2xl">
                  <div className="flex text-amber-400 text-xs gap-1 mb-3"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                  <p className="text-xs text-gray-300 leading-relaxed font-medium">"The hard paywall and credit system allow us to monetize instantly. The live preview emulator is lightning fast."</p>
                  <p className="text-[11px] font-black text-white mt-5">— Priya Sharma, Lead Developer</p>
                </div>
                <div className="bg-[#0c1017]/80 border border-white/10 p-7 rounded-3xl backdrop-blur-xl shadow-2xl">
                  <div className="flex text-amber-400 text-xs gap-1 mb-3"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                  <p className="text-xs text-gray-300 leading-relaxed font-medium">"WebContainer execution right inside the browser is a game changer. Best app builder in the market right now."</p>
                  <p className="text-[11px] font-black text-white mt-5">— David Miller, Tech Blogger</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-14 text-gray-500 font-black text-sm opacity-75">
                <span><i className="fa-brands fa-google"></i> GOOGLE</span>
                <span><i className="fa-brands fa-microsoft"></i> MICROSOFT</span>
                <span><i className="fa-brands fa-paypal"></i> PAYPAL</span>
                <span><i className="fa-brands fa-duolingo"></i> DUOLINGO</span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
        2. AUTHENTICATION (Google, GitHub, Apple, Email - Fully Styled Cards)
      ========================================================================== */}
      {step === 'auth' && (
        <div className="flex-1 flex items-center justify-center p-6 relative">
          <div className="absolute w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="bg-[#0c1017] border border-white/10 w-full max-w-md rounded-3xl p-9 space-y-6 shadow-2xl relative backdrop-blur-2xl">
            <button onClick={() => setStep('landing')} className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer"><i className="fa-solid fa-xmark text-lg"></i></button>
            
            <div className="text-center space-y-2">
              <div className="inline-flex w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 items-center justify-center font-bold mb-1 text-lg shadow-inner"><i className="fa-solid fa-bolt"></i></div>
              <h2 className="text-2xl font-black text-white">Vortex Web & Apps</h2>
              <p className="text-xs text-gray-400 font-medium">Sign in securely to access your autonomous AI workspace</p>
            </div>

            <form onSubmit={handleAuthentication} className="space-y-4 pt-2">
              <div>
                <label className="text-[11px] text-gray-400 block mb-1.5 font-bold uppercase tracking-wider">Work Email Address</label>
                <input 
                  type="email" 
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#020408] border border-white/10 rounded-xl px-4.5 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500 transition font-medium"
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
              <button onClick={() => setStep('prompt')} className="bg-[#020408] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                <i className="fa-brands fa-google text-red-500 text-sm"></i> Google
              </button>
              <button onClick={() => setStep('prompt')} className="bg-[#020408] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                <i className="fa-brands fa-github text-sm"></i> GitHub
              </button>
              <button onClick={() => setStep('prompt')} className="bg-[#020408] border border-white/10 hover:bg-white/5 py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                <i className="fa-brands fa-apple text-sm"></i> Apple
              </button>
            </div>
            
            <p className="text-[10px] text-center text-gray-500 font-medium">Protected by Vortex Enterprise Security & Fingerprint Data Encryption.</p>
          </div>
        </div>
      )}

      {/* =========================================================================
        3. PROMPT CREATION STUDIO
      ========================================================================== */}
      {step === 'prompt' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
          <div className="max-w-2xl w-full text-center space-y-6">
            <span className="text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">Step 2 of 3: AI Prompt Studio</span>
            <h1 className="text-3xl md:text-5xl font-black text-white">What will you build today?</h1>
            <p className="text-xs md:text-sm text-gray-400 font-medium">Describe your application. Our autonomous E-3 Agent will build the UI, database, and backend instantly.</p>

            <div className="bg-[#0c1017] border border-white/10 rounded-3xl p-7 shadow-2xl text-left space-y-4 backdrop-blur-xl">
              <textarea 
                rows={4} 
                value={appPrompt}
                onChange={(e) => setAppPrompt(e.target.value)}
                placeholder="E.g., Build a complete crypto trading SaaS dashboard with live charts, user authentication, and Stripe billing integration..." 
                className="w-full bg-transparent text-sm focus:outline-none resize-none text-gray-200 placeholder-gray-600 leading-relaxed font-medium"
              />
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> WebContainers Sandbox Active
                </span>
                <button 
                  onClick={() => setStep('pricing')}
                  className="bg-white text-black hover:bg-gray-100 px-7 py-3.5 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-2xl"
                >
                  <span>Select Plan & Generate</span> <i className="fa-solid fa-arrow-right text-orange-600"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
        4. PRICING & HARD PAYWALL PLANS (10 Days, Monthly, Yearly - Standard, Pro, Enterprise)
      ========================================================================== */}
      {step === 'pricing' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
          <div className="max-w-5xl w-full space-y-8 my-auto py-12">
            <div className="text-center space-y-3">
              <span className="text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">Hard Paywall & Subscription Tiers</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">Choose your plan to unlock app generation</h2>
              <p className="text-xs md:text-sm text-gray-400 font-medium">Pick a plan that suits your scaling needs. Upgrade or downgrade anytime.</p>
              
              {/* Billing Cycle Selector */}
              <div className="flex justify-center gap-2 pt-4">
                <button onClick={() => setSubscriptionCycle('10days')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${subscriptionCycle === '10days' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>10 Days Pass</button>
                <button onClick={() => setSubscriptionCycle('monthly')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${subscriptionCycle === 'monthly' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>Monthly Billing</button>
                <button onClick={() => setSubscriptionCycle('yearly')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${subscriptionCycle === 'yearly' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>Yearly (Save 20%)</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {/* Standard Plan */}
              <div className="bg-[#0c1017] border border-white/10 p-7 rounded-3xl flex flex-col justify-between shadow-2xl backdrop-blur-xl">
                <div>
                  <h3 className="font-extrabold text-sm text-white">Standard <i className="fa-solid fa-bolt text-orange-500 ml-1"></i></h3>
                  <p className="text-3xl font-black mt-3 text-white">
                    {subscriptionCycle === '10days' ? '₹499' : subscriptionCycle === 'monthly' ? '₹1,375' : '₹11,000'} 
                    <span className="text-xs text-gray-400 font-normal"> / {subscriptionCycle === '10days' ? '10 days' : subscriptionCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </p>
                  <div className="my-4 bg-[#020408] p-3 rounded-xl text-xs text-orange-400 font-bold border border-white/5 flex items-center gap-2">
                    <i className="fa-solid fa-coins"></i> 100 AI Credits / mo
                  </div>
                  <ul className="text-xs text-gray-300 space-y-3.5 mt-4 font-medium">
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Web & Mobile App Builder</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> GitHub Integration & Code Export</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Fingerprint Security & Hosting</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Standard Model Access</li>
                  </ul>
                </div>
                <button onClick={() => { setSelectedTier('Standard'); triggerAppGeneration(); }} className="mt-8 w-full bg-white text-black hover:bg-gray-100 py-3.5 rounded-xl text-xs font-black transition cursor-pointer shadow-xl">
                  Select Standard Plan
                </button>
              </div>

              {/* Pro Plan (Popular) */}
              <div className="bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/50 p-7 rounded-3xl flex flex-col justify-between relative shadow-2xl backdrop-blur-xl">
                <span className="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] px-3.5 py-1 rounded-full font-black uppercase shadow-lg">Most Popular</span>
                <div>
                  <h3 className="font-extrabold text-sm text-white">Pro <i className="fa-solid fa-crown text-amber-400 ml-1"></i></h3>
                  <p className="text-3xl font-black mt-3 text-white">
                    {subscriptionCycle === '10days' ? '₹1,299' : subscriptionCycle === 'monthly' ? '₹12,500' : '₹99,000'} 
                    <span className="text-xs text-gray-400 font-normal"> / {subscriptionCycle === '10days' ? '10 days' : subscriptionCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </p>
                  <div className="my-4 bg-[#020408] p-3 rounded-xl text-xs text-orange-400 font-bold border border-white/5 flex items-center gap-2">
                    <i className="fa-solid fa-coins"></i> 750 AI Credits / mo
                  </div>
                  <ul className="text-xs text-gray-300 space-y-3.5 mt-4 font-medium">
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> E-3 Agent & Beast Thinking</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Free Deployment & Custom Domains</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Full Project Memory & Analytics</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Custom Agent Builder Access</li>
                  </ul>
                </div>
                <button onClick={() => { setSelectedTier('Pro'); triggerAppGeneration(); }} className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl text-xs font-black transition cursor-pointer shadow-xl shadow-orange-500/30">
                  Select Pro Plan
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-[#0c1017] border border-white/10 p-7 rounded-3xl flex flex-col justify-between shadow-2xl backdrop-blur-xl">
                <div>
                  <h3 className="font-extrabold text-sm text-white">Enterprise <i className="fa-solid fa-shield-halved text-emerald-400 ml-1"></i></h3>
                  <p className="text-3xl font-black mt-3 text-white">
                    Custom
                  </p>
                  <div className="my-4 bg-[#020408] p-3 rounded-xl text-xs text-emerald-400 font-bold border border-white/5 flex items-center gap-2">
                    <i className="fa-solid fa-infinity"></i> 20,000+ Credits / mo
                  </div>
                  <ul className="text-xs text-gray-300 space-y-3.5 mt-4 font-medium">
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Dedicated Server & Node.js Runtime</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> SSO/SAML & Advanced Privacy</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> Database Rollback & Backups</li>
                    <li><i className="fa-solid fa-check text-orange-500 mr-2"></i> 24/7 Priority Support & SLA</li>
                  </ul>
                </div>
                <button onClick={() => alert('Contacting Enterprise Sales...')} className="mt-8 w-full bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-xl text-xs font-black transition cursor-pointer">
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-[11px] text-gray-500 font-medium">All transactions are secured with 256-bit encryption and fingerprinted physical data protection.</p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
        5. MAIN SPLIT-SCREEN WORKSPACE DASHBOARD
      ========================================================================== */}
      {step === 'dashboard' && (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-screen">
          
          {/* Left Side: Live Preview & Code Runtime */}
          <div className="flex-1 flex flex-col bg-[#020408] border-r border-white/5 relative">
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0c1017]">
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveWorkspaceTab('preview')} 
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition flex items-center gap-2 ${activeWorkspaceTab === 'preview' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fa-solid fa-globe"></i> Live Preview
                </button>
                <button 
                  onClick={() => setActiveWorkspaceTab('code')} 
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${activeWorkspaceTab === 'code' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fa-solid fa-code"></i> Code Files
                </button>
              </div>
              <button onClick={() => alert('App successfully published to Cloudflare production!')} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-emerald-500/20 transition flex items-center gap-2">
                <i className="fa-solid fa-rocket"></i> Publish Live
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 bg-black/40 overflow-auto relative">
              {compilerStatus && (
                <div className="absolute inset-0 bg-[#020408]/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-bold text-white tracking-wide">{compilerStatus}</p>
                </div>
              )}

              {activeWorkspaceTab === 'preview' ? (
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
                      <p className="text-xs text-gray-500 mt-1">Prompt: "{appPrompt || 'SaaS Application'}"</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl">
                        <p className="text-[11px] text-gray-500 font-extrabold uppercase">Active Users</p>
                        <p className="text-2xl font-black text-orange-600 mt-1">5,420</p>
                      </div>
                      <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                        <p className="text-[11px] text-gray-500 font-extrabold uppercase">Total Revenue</p>
                        <p className="text-2xl font-black text-emerald-600 mt-1">₹3,45,200</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-center text-gray-400 font-medium">Powered by Vortex WebContainers & Cloudflare Engine</p>
                </div>
              ) : (
                <div className="w-full max-w-4xl h-[560px] bg-[#0c1017] border border-white/10 text-gray-300 rounded-2xl p-5 font-mono text-xs overflow-auto shadow-2xl">
                  <p className="text-orange-400">// app.tsx - Compiled via WebContainers</p>
                  <p className="text-gray-500 mt-2">import React from 'react';</p>
                  <p className="text-gray-500">import &#123; Dashboard, Analytics, StripeBilling &#125; from '@vortex/engine';</p>
                  <p className="text-gray-300 mt-3">export default function MainApp() &#123;</p>
                  <p className="pl-4 text-gray-400">return (</p>
                  <p className="pl-8 text-emerald-400">&lt;div className="min-h-screen bg-slate-950 text-white p-8"&gt;</p>
                  <p className="pl-12 text-gray-300">&lt;h1 className="text-3xl font-black"&gt;{appPrompt || 'Generated SaaS'}&lt;/h1&gt;</p>
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
              {aiChatHistory.map((item, idx) => (
                <div key={idx} className={`p-3.5 rounded-2xl text-xs max-w-[90%] leading-relaxed ${item.sender === 'You' ? 'ml-auto bg-orange-600 text-white font-medium' : 'bg-[#020408] border border-white/10 text-gray-200'}`}>
                  {item.sender !== 'You' && <p className="text-orange-400 font-bold mb-1">{item.sender}</p>}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#020408] border-t border-white/5 space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 px-1 font-semibold">
                <button onClick={() => alert('Voice assistant listening...')} className="hover:text-orange-400 cursor-pointer flex items-center gap-1"><i className="fa-solid fa-microphone text-orange-500"></i> Voice Prompt</button>
                <span>•</span>
                <span>Type chat modifications</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={chatInputValue}
                  onChange={(e) => setChatInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendAgentMessage()}
                  placeholder="Ask AI to change layout, add database..." 
                  className="flex-1 bg-[#0c1017] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                />
                <button onClick={sendAgentMessage} className="bg-orange-500 text-white px-4 py-2.5 rounded-xl text-xs cursor-pointer hover:bg-orange-600 transition shadow-md">
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
