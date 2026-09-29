import { useState } from 'react';

export default function Index() {
  const [step, setStep] = useState('landing'); // 'landing', 'auth', 'prompt', 'pricing', 'dashboard'
  const [prompt, setPrompt] = useState('');
  const [billingCycle, setBillingCycle] = useState('monthly'); // '10days', 'monthly', 'yearly'
  const [selectedPlan, setSelectedPlan] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Vortex AI Agent', text: 'App architecture generated successfully. You can now test it in the live emulator or customize further.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeTab, setActiveTab] = useState('preview'); // 'preview', 'code'

  const handleGoogleAuth = () => {
    // यहाँ असली Google OAuth लॉगिन ट्रिगर होगा या यूजर सीधे नेक्स्ट स्टेप पर जाएगा
    setStep('prompt');
  };

  const handleGithubAuth = () => {
    setStep('prompt');
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const msg = inputMessage.trim();
    setChatMessages(prev => [...prev, { sender: 'You', text: msg }]);
    setInputMessage('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'Vortex AI Agent', text: 'Updating code and syncing live preview...' }]);
    }, 1000);
  };

  return (
    <div className="bg-[#07090e] text-gray-100 min-h-screen flex flex-col font-sans select-none overflow-x-hidden bg-gradient-to-br from-[#07090e] via-[#0d111a] to-[#05070a]">
      
      {/* 1. LANDING PAGE & HERO SECTION (Emergent & Replit Style) */}
      {step === 'landing' && (
        <div className="flex-1 flex flex-col justify-between">
          <header className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-md bg-black/20">
            <div className="flex items-center gap-2.5 text-white font-black text-xl tracking-wider">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 text-transparent bg-clip-text">Vortex</span> 
              <span className="text-[11px] text-gray-400 font-normal border-l border-gray-700 pl-2.5">Web & Apps Development</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setStep('pricing')} className="text-xs text-gray-300 hover:text-white transition font-medium cursor-pointer">Pricing</button>
              <button onClick={() => setStep('auth')} className="bg-white hover:bg-gray-200 text-black text-xs px-5 py-2.5 rounded-xl font-bold transition shadow-xl cursor-pointer">
                Get Started
              </button>
            </div>
          </header>

          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
            <span className="bg-white/5 border border-white/10 text-orange-400 text-xs px-4 py-1.5 rounded-full font-semibold mb-6 flex items-center gap-2 shadow-inner">
              <i className="fa-solid fa-wand-magic-sparkles"></i> Next-Gen AI App Engine
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-tight">
              Where ideas become reality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Build apps & websites with AI.</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-xl text-sm leading-relaxed">
              Create production-ready web and mobile apps instantly using state-of-the-art AI agents. Zero setup, professional grade.
            </p>

            <div className="mt-8 flex gap-4">
              <button onClick={() => setStep('auth')} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3.5 rounded-2xl font-bold text-sm transition shadow-2xl cursor-pointer flex items-center gap-2">
                <span>Start Building Free</span> <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* Trusted By Companies */}
            <div className="mt-28 text-center">
              <p className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-6">Trusted by innovators worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-10 text-gray-500 font-bold text-sm opacity-80">
                <span><i className="fa-brands fa-google"></i> Google</span>
                <span><i className="fa-brands fa-microsoft"></i> Microsoft</span>
                <span><i className="fa-brands fa-paypal"></i> PayPal</span>
                <span><i className="fa-brands fa-duolingo"></i> Duolingo</span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 2. AUTH / SIGN-UP PAGE (Google & GitHub) */}
      {step === 'auth' && (
        <div className="flex-1 flex items-center justify-center p-6 relative">
          <div className="bg-[#111522]/90 border border-white/10 backdrop-blur-xl w-full max-w-md rounded-3xl p-8 space-y-6 shadow-2xl relative">
            <button onClick={() => setStep('landing')} className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer"><i className="fa-solid fa-xmark text-lg"></i></button>
            <div className="text-center space-y-2">
              <div className="text-orange-500 font-extrabold text-xl">Vortex</div>
              <h2 className="text-xl font-extrabold text-white">Create your account</h2>
              <p className="text-xs text-gray-400">Choose your preferred provider to securely continue</p>
            </div>

            <div className="space-y-3 pt-2">
              <button onClick={handleGoogleAuth} className="w-full bg-[#07090e] border border-white/10 hover:bg-white/5 py-3.5 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-3 cursor-pointer shadow-md">
                <i className="fa-brands fa-google text-red-500 text-base"></i> Continue with Google
              </button>
              <button onClick={handleGithubAuth} className="w-full bg-[#07090e] border border-white/10 hover:bg-white/5 py-3.5 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-3 cursor-pointer shadow-md">
                <i className="fa-brands fa-github text-base"></i> Continue with GitHub
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-500">By continuing, you agree to Vortex Terms of Service & Privacy Policy.</p>
          </div>
        </div>
      )}

      {/* 3. PROMPT PAGE ("What will you build?") */}
      {step === 'prompt' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
          <div className="absolute top-6 left-6 text-orange-500 font-bold text-lg">Vortex</div>
          <div className="max-w-xl w-full text-center space-y-6">
            <h1 className="text-3xl font-extrabold text-white">What will you build?</h1>
            <p className="text-xs text-gray-400">Describe your app idea, and let Vortex AI generate it instantly.</p>

            <div className="bg-[#111522]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-left space-y-3">
              <textarea 
                rows={3} 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Build a SaaS app for e-commerce analytics..." 
                className="w-full bg-transparent text-sm focus:outline-none resize-none text-gray-200 placeholder-gray-500"
              />
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded font-medium"><i className="fa-solid fa-robot"></i> E-3 Agent</span>
                <button 
                  onClick={() => {
                    if(!prompt.trim()) { alert('Please enter your idea first!'); return; }
                    setStep('pricing');
                  }} 
                  className="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow"
                >
                  <span>Generate App</span> <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. PRICING & HARD PAYWALL PAGE (10 Days, Monthly, Yearly) */}
      {step === 'pricing' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
          <div className="max-w-4xl w-full space-y-6 my-auto py-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-black text-white">Choose your plan to start building</h2>
              <p className="text-xs text-gray-400">Unlock full deployment, custom domains, and AI agents instantly.</p>
              
              <div className="flex justify-center gap-2 pt-4">
                <button onClick={() => setBillingCycle('10days')} className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${billingCycle === '10days' ? 'bg-orange-500 text-white' : 'bg-[#111522] text-gray-400 border border-white/10'}`}>10 Days Pass</button>
                <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${billingCycle === 'monthly' ? 'bg-orange-500 text-white' : 'bg-[#111522] text-gray-400 border border-white/10'}`}>Monthly</button>
                <button onClick={() => setBillingCycle('yearly')} className={`px-4 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${billingCycle === 'yearly' ? 'bg-orange-500 text-white' : 'bg-[#111522] text-gray-400 border border-white/10'}`}>Yearly (Save 20%)</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Standard Plan */}
              <div className="bg-[#111522]/90 border border-white/10 p-6 rounded-3xl flex flex-col justify-between shadow-2xl">
                <div>
                  <h3 className="font-bold text-sm text-white">Standard <i className="fa-solid fa-bolt text-orange-500"></i></h3>
                  <p className="text-3xl font-black mt-3 text-white">
                    {billingCycle === '10days' ? '₹499' : billingCycle === 'monthly' ? '₹1,375' : '₹11,000'} 
                    <span className="text-xs text-gray-400 font-normal"> / {billingCycle === '10days' ? '10 days' : billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </p>
                  <ul className="text-xs text-gray-300 space-y-2.5 mt-6">
                    <li><i className="fa-solid fa-check text-orange-500"></i> Web & Mobile App Builder</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> GitHub Integration & Code Export</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> 100 AI Credits included</li>
                  </ul>
                </div>
                <button onClick={() => { setSelectedPlan('Standard'); setStep('dashboard'); }} className="mt-8 w-full bg-white text-black hover:bg-gray-200 py-3 rounded-xl text-xs font-bold transition cursor-pointer shadow">
                  Select Standard Plan
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/50 p-6 rounded-3xl flex flex-col justify-between relative shadow-2xl">
                <span className="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] px-3 py-0.5 rounded-full font-bold uppercase">Best Value</span>
                <div>
                  <h3 className="font-bold text-sm text-white">Pro <i className="fa-solid fa-crown text-amber-400"></i></h3>
                  <p className="text-3xl font-black mt-3 text-white">
                    {billingCycle === '10days' ? '₹1,299' : billingCycle === 'monthly' ? '₹12,500' : '₹99,000'} 
                    <span className="text-xs text-gray-400 font-normal"> / {billingCycle === '10days' ? '10 days' : billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </p>
                  <ul className="text-xs text-gray-300 space-y-2.5 mt-6">
                    <li><i className="fa-solid fa-check text-orange-500"></i> E-3 Agent & Unlimited Thinking</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> Free Deployment & Custom Domains</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> 750 AI Credits & Priority Support</li>
                  </ul>
                </div>
                <button onClick={() => { setSelectedPlan('Pro'); setStep('dashboard'); }} className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-xs font-bold transition cursor-pointer shadow-lg">
                  Select Pro Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. MAIN DASHBOARD (Split-Screen: Preview / Code + Chat Console) */}
      {step === 'dashboard' && (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-screen">
          
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
              <button onClick={() => alert('Deployed successfully to Vortex Live!')} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-lg font-bold cursor-pointer hover:bg-emerald-500/20 transition">
                <i className="fa-solid fa-rocket"></i> Deploy App
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 bg-black/40 overflow-auto">
              {activeTab === 'preview' ? (
                <div className="w-full max-w-2xl h-[500px] bg-white text-gray-900 rounded-2xl shadow-2xl flex flex-col p-6 justify-between overflow-hidden">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-orange-600 text-xs uppercase tracking-wider">Generated Application</span>
                      <span className="bg-orange-100 text-orange-800 text-[10px] px-2 py-0.5 rounded font-bold">Interactive Live</span>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl mb-4">
                      <h3 className="font-extrabold text-sm text-gray-800">Your AI-Built Dashboard</h3>
                      <p className="text-xs text-gray-500 mt-1">Prompt: "{prompt}"</p>
                    </div>
                    <button onClick={() => alert('App button works!')} className="w-full bg-orange-500 text-white text-xs py-2.5 rounded-xl font-bold shadow cursor-pointer">
                      Test Action Button
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-gray-400">Powered & Secured by Vortex Engine</p>
                </div>
              ) : (
                <div className="w-full max-w-2xl h-[500px] bg-[#111522] border border-white/10 text-gray-300 rounded-2xl p-4 font-mono text-xs overflow-auto shadow-2xl">
                  <p className="text-orange-400">// app/routes/generated-app.tsx</p>
                  <p className="text-gray-500 mt-2">export default function GeneratedApp() &#123;</p>
                  <p className="pl-4 text-gray-400">return (</p>
                  <p className="pl-8 text-emerald-400">&lt;div className="p-6 bg-slate-900 text-white"&gt;</p>
                  <p className="pl-12 text-gray-300">&lt;h1&gt;{prompt || 'Your App'}&lt;/h1&gt;</p>
                  <p className="pl-8 text-emerald-400">&lt;/div&gt;</p>
                  <p className="pl-4 text-gray-400">);</p>
                  <p className="text-gray-500">&#125;</p>
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-96 bg-[#111522] border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-between h-[45vh] md:h-full">
            <div className="h-12 border-b border-white/5 flex items-center px-4 text-xs font-bold text-gray-300">
              <span><i className="fa-solid fa-robot text-orange-500"></i> Vortex AI Assistant</span>
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
                <button onClick={() => alert('Voice mode activated!')} className="hover:text-orange-400 cursor-pointer"><i className="fa-solid fa-microphone"></i> Speak Prompt</button>
                <span>•</span>
                <span>Type instructions below</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask AI to modify UI, add buttons..." 
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
