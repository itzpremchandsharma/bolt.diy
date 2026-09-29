import { useState } from 'react';

export default function PricingPaywall({ userEmail, promptText, onSelectPlan, onBack }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // '10days' | 'monthly' | 'yearly'

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
        <button onClick={onBack} className="text-xs text-gray-400 hover:text-white transition font-bold flex items-center gap-1.5 cursor-pointer">
          <i className="fa-solid fa-arrow-left"></i> Back to Studio
        </button>
      </header>

      {/* Pricing Section */}
      <section className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto relative">
        <div className="absolute w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="max-w-5xl w-full space-y-8 my-auto py-12 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 shadow-inner">
              Hard Paywall & Subscription Tiers
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Choose your plan to unlock app generation</h2>
            <p className="text-xs md:text-sm text-gray-400 font-medium">Idea: "{promptText}" — Pick a plan to build and deploy this app instantly.</p>
            
            {/* Billing Cycle Selector */}
            <div className="flex justify-center gap-2 pt-4">
              <button onClick={() => setBillingCycle('10days')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${billingCycle === '10days' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>10 Days Pass</button>
              <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${billingCycle === 'monthly' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>Monthly Billing</button>
              <button onClick={() => setBillingCycle('yearly')} className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition ${billingCycle === 'yearly' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-[#0c1017] text-gray-400 border border-white/10'}`}>Yearly (Save 20%)</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Standard Plan */}
            <div className="bg-[#0c1017] border border-white/10 p-7 rounded-3xl flex flex-col justify-between shadow-2xl backdrop-blur-xl">
              <div>
                <h3 className="font-extrabold text-sm text-white">Standard <i className="fa-solid fa-bolt text-orange-500 ml-1"></i></h3>
                <p className="text-3xl font-black mt-3 text-white">
                  {billingCycle === '10days' ? '₹499' : billingCycle === 'monthly' ? '₹1,375' : '₹11,000'} 
                  <span className="text-xs text-gray-400 font-normal"> / {billingCycle === '10days' ? '10 days' : billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
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
              <button onClick={() => onSelectPlan('Standard')} className="mt-8 w-full bg-white text-black hover:bg-gray-100 py-3.5 rounded-xl text-xs font-black transition cursor-pointer shadow-xl">
                Select Standard Plan
              </button>
            </div>

            {/* Pro Plan (Popular) */}
            <div className="bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/50 p-7 rounded-3xl flex flex-col justify-between relative shadow-2xl backdrop-blur-xl">
              <span className="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] px-3.5 py-1 rounded-full font-black uppercase shadow-lg">Most Popular</span>
              <div>
                <h3 className="font-extrabold text-sm text-white">Pro <i className="fa-solid fa-crown text-amber-400 ml-1"></i></h3>
                <p className="text-3xl font-black mt-3 text-white">
                  {billingCycle === '10days' ? '₹1,299' : billingCycle === 'monthly' ? '₹12,500' : '₹99,000'} 
                  <span className="text-xs text-gray-400 font-normal"> / {billingCycle === '10days' ? '10 days' : billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
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
              <button onClick={() => onSelectPlan('Pro')} className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl text-xs font-black transition cursor-pointer shadow-xl shadow-orange-500/30">
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
      </section>
    </div>
  );
}
