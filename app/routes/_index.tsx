import { useState } from 'react';

export default function Index() {
  const [platform, setPlatform] = useState('Web app');
  const [prompt, setPrompt] = useState('');
  const [showPricing, setShowPricing] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Vortex AI Agent', text: 'App structure generated successfully. You can now test it in the live emulator or customize further.' }
  ]);
  const [workspaceInput, setWorkspaceInput] = useState('');

  const handlePromptSubmit = () => {
    if (!prompt.trim()) {
      alert('Please enter your app idea first!');
      return;
    }
    // Prompt submit होते ही Emergent स्टाइल हार्ड पेवॉल सामने आ जाएगा
    setShowPricing(true);
  };

  const unlockWorkspace = () => {
    setShowPricing(false);
    setIsUnlocked(true);
  };

  const sendWorkspaceMessage = () => {
    if (!workspaceInput.trim()) return;
    const newMsg = workspaceInput.trim();
    setChatMessages(prev => [...prev, { sender: 'You', text: newMsg }]);
    setWorkspaceInput('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'Vortex AI Agent', text: 'Applying changes and updating live emulator...' }]);
    }, 1000);
  };

  return (
    <div className="bg-[#0b0d13] text-gray-100 h-screen flex flex-col overflow-hidden font-sans select-none">
      
      {/* Step 1: Onboarding / Landing Page (Emergent & Replit Style) */}
      {!isUnlocked && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-y-auto">
          <div className="absolute top-6 left-6 flex items-center gap-2 text-orange-500 font-bold text-xl">
            <i className="fa-solid fa-bolt"></i> Vortex
          </div>
          <div className="absolute top-6 right-6">
            <button 
              onClick={() => setShowPricing(true)} 
              className="bg-[#222634] hover:bg-gray-800 text-xs px-4 py-2 rounded-full font-medium transition border border-orange-500/30 text-orange-400 flex items-center gap-1.5 cursor-pointer"
            >
              <i className="fa-solid fa-crown"></i> Upgrade Plan
            </button>
          </div>

          <div className="max-w-xl w-full text-center space-y-6 my-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Where ideas become reality</h1>
            <p className="text-sm text-gray-400">Describe your app idea, choose your platform, and let AI build it instantly.</p>

            {/* Platform Selector */}
            <div className="flex justify-center gap-2 text-xs">
              <button 
                onClick={() => setPlatform('Web app')} 
                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer border ${platform === 'Web app' ? 'bg-[#222634] border-orange-500 text-white' : 'bg-[#222634] border-transparent text-gray-400 hover:text-white'}`}
              >
                Web app
              </button>
              <button 
                onClick={() => setPlatform('Mobile app')} 
                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer border ${platform === 'Mobile app' ? 'bg-[#222634] border-orange-500 text-white' : 'bg-[#222634] border-transparent text-gray-400 hover:text-white'}`}
              >
                Mobile app
              </button>
              <button 
                onClick={() => setPlatform('Web + Mobile')} 
                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer border ${platform === 'Web + Mobile' ? 'bg-[#222634] border-orange-500 text-white' : 'bg-[#222634] border-transparent text-gray-400 hover:text-white'}`}
              >
                Web + Mobile
              </button>
            </div>

            {/* Prompt Box */}
            <div className="bg-[#13161f] border border-[#222634] rounded-2xl p-3 shadow-2xl text-left space-y-3">
              <textarea 
                rows={3} 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Build a SaaS app for..." 
                className="w-full bg-transparent text-sm focus:outline-none resize-none text-gray-200 placeholder-gray-500"
              />
              <div className="flex items-center justify-between pt-2 border-t border-[#222634]">
                <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded font-medium flex items-center gap-1">
                  <i className="fa-solid fa-robot"></i> E-3 Agent
                </span>
                <button 
                  onClick={handlePromptSubmit} 
                  className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <span>Generate App</span> <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Main Workspace (Unlocked after choosing plan/credit) */}
      {isUnlocked && (
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-[#13161f] border-r border-[#222634] hidden md:flex flex-col justify-between select-none">
            <div className="p-3 space-y-1">
              <div className="text-orange-500 font-bold text-md px-2 py-2 flex items-center gap-2">
                <i className="fa-solid fa-bolt"></i> Vortex Workspace
              </div>
              <div className="pt-4 pb-1 text-xs text-gray-500 uppercase font-semibold px-2">Navigation</div>
              <a href="#" className="block px-3 py-1.5 rounded text-sm text-gray-300 hover:bg-[#222634] transition">Library</a>
              <a href="#" className="block px-3 py-1.5 rounded text-sm text-gray-300 hover:bg-[#222634] transition">Code Files</a>
              <a href="#" className="block px-3 py-1.5 rounded text-sm text-gray-300 hover:bg-[#222634] transition">Security</a>
            </div>
            <div className="p-3 border-t border-[#222634]">
              <button onClick={() => setShowPricing(true)} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 rounded font-medium transition cursor-pointer">
                Manage Credits
              </button>
            </div>
          </aside>

          {/* Chat Console */}
          <main className="flex-1 flex flex-col bg-[#0b0d13] border-r border-[#222634]">
            <div className="h-12 border-b border-[#222634] flex items-center px-4 text-xs font-medium text-gray-300">
              <span>Project Session: Active</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`p-3 rounded-xl max-w-lg ${msg.sender === 'You' ? 'ml-auto bg-orange-600 text-white' : 'bg-[#13161f] border border-[#222634]'}`}>
                  {msg.sender !== 'You' && <p className="text-orange-400 font-medium text-xs">{msg.sender}</p>}
                  <p className="text-xs text-gray-300 mt-1">{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="p-3 bg-[#13161f] border-t border-[#222634] flex gap-2">
              <input 
                type="text" 
                value={workspaceInput}
                onChange={(e) => setWorkspaceInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendWorkspaceMessage()}
                placeholder="Ask to modify UI, add buttons..." 
                className="flex-1 bg-[#0b0d13] border border-[#222634] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-orange-500 text-gray-200"
              />
              <button onClick={sendWorkspaceMessage} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-medium cursor-pointer">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </main>

          {/* Live Emulator */}
          <div className="w-[400px] bg-[#13161f] hidden lg:flex flex-col select-none">
            <div className="h-12 border-b border-[#222634] flex items-center justify-between px-3 text-xs text-gray-400">
              <span>Live Emulator</span>
              <span className="text-emerald-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Running</span>
            </div>
            <div className="flex-1 p-4 flex items-center justify-center bg-black/30">
              <div className="w-[300px] h-[540px] bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-4 justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-orange-600 text-xs">Live App Preview</span>
                    <span className="text-[10px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-bold">Interactive</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-xl mb-3">
                    <p className="text-xs font-bold text-gray-800">Your App Dashboard</p>
                    <p className="text-[11px] text-gray-500 mt-1">Buttons and components are live and responsive.</p>
                  </div>
                  <button onClick={() => alert('Button clicked successfully inside emulator!')} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 rounded-lg font-medium shadow cursor-pointer">
                    Click Me
                  </button>
                </div>
                <p className="text-[9px] text-center text-gray-400">Secured & Powered by Vortex</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing / Hard Paywall Modal (Emergent Style) */}
      {showPricing && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#13161f] border border-[#222634] w-full max-w-3xl rounded-3xl p-6 relative my-auto">
            <button onClick={() => setShowPricing(false)} className="absolute top-5 right-5 text-gray-400 hover:text-white cursor-pointer">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
            <h2 className="text-xl font-extrabold text-center text-white">Choose your plan</h2>
            <p className="text-xs text-gray-400 text-center mt-1">Pick a plan that best suits you. Upgrade or downgrade at any time.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {/* Standard Plan */}
              <div className="border border-[#222634] p-5 rounded-2xl bg-[#0b0d13] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm text-white">Standard <i className="fa-solid fa-bolt text-orange-500"></i></h3>
                    <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-bold">Save ₹3,298</span>
                  </div>
                  <p className="text-2xl font-extrabold mt-3 text-white">₹1,375 <span className="text-xs text-gray-400 font-normal">/ mo</span></p>
                  <div className="my-3 bg-[#13161f] p-2 rounded-lg text-xs text-orange-400 font-medium">
                    <i className="fa-solid fa-coins"></i> 100 credits / mo
                  </div>
                  <ul className="text-xs text-gray-300 space-y-2 mt-3">
                    <li><i className="fa-solid fa-check text-orange-500"></i> Mobile & Web App Development</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> Private project hosting</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> GitHub integration</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> Unlimited Model & tool access</li>
                  </ul>
                </div>
                <button onClick={unlockWorkspace} className="mt-6 w-full bg-white text-black hover:bg-gray-200 py-2.5 rounded-xl text-xs font-bold transition shadow cursor-pointer">
                  Upgrade Standard
                </button>
              </div>

              {/* Pro Plan */}
              <div className="border border-orange-500/50 p-5 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent flex flex-col justify-between relative">
                <span className="absolute -top-3 right-5 bg-orange-500 text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase shadow">Popular</span>
                <div>
                  <h3 className="font-bold text-sm text-white">Pro <i className="fa-solid fa-crown text-amber-400"></i></h3>
                  <p className="text-2xl font-extrabold mt-3 text-white">₹12,500 <span className="text-xs text-gray-400 font-normal">/ mo</span></p>
                  <div className="my-3 bg-[#13161f] p-2 rounded-lg text-xs text-orange-400 font-medium">
                    <i className="fa-solid fa-coins"></i> 750 credits / mo
                  </div>
                  <ul className="text-xs text-gray-300 space-y-2 mt-3">
                    <li><i className="fa-solid fa-check text-orange-500"></i> E-3 Agent & Best Thinking</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> Free deployment & Custom Domain</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> Full project memory & Analytics</li>
                    <li><i className="fa-solid fa-check text-orange-500"></i> Ability to build Custom Agents</li>
                  </ul>
                </div>
                <button onClick={unlockWorkspace} className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl text-xs font-bold transition shadow-lg cursor-pointer">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
