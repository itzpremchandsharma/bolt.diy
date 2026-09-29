import { useState } from 'react';
import LandingHero from '~/components/LandingHero';
import AuthModal from '~/components/AuthModal';
import PromptStudio from '~/components/PromptStudio';
import PricingPaywall from '~/components/PricingPaywall';
import WorkspaceDashboard from '~/components/WorkspaceDashboard';

export default function Index() {
  const [currentStep, setCurrentStep] = useState('landing'); // 'landing' | 'auth' | 'prompt' | 'pricing' | 'dashboard'
  const [emailData, setEmailData] = useState('');
  const [promptData, setPromptData] = useState('');
  const [selectedPlanData, setSelectedPlanData] = useState('Pro');

  return (
    <div className="min-h-screen bg-[#020408] text-gray-100 flex flex-col font-sans select-none overflow-x-hidden">
      {currentStep === 'landing' && (
        <LandingHero 
          onGetStarted={() => setCurrentStep('auth')} 
          onPricing={() => setCurrentStep('pricing')} 
        />
      )}

      {currentStep === 'auth' && (
        <AuthModal 
          onBack={() => setCurrentStep('landing')} 
          onSuccess={(email) => {
            setEmailData(email);
            setCurrentStep('prompt');
          }} 
        />
      )}

      {currentStep === 'prompt' && (
        <PromptStudio 
          userEmail={emailData} 
          onGenerate={(prompt) => {
            setPromptData(prompt);
            setCurrentStep('pricing');
          }} 
          onBack={() => setCurrentStep('auth')} 
        />
      )}

      {currentStep === 'pricing' && (
        <PricingPaywall 
          userEmail={emailData} 
          promptText={promptData} 
          onSelectPlan={(plan) => {
            setSelectedPlanData(plan);
            setCurrentStep('dashboard');
          }} 
          onBack={() => setCurrentStep('prompt')} 
        />
      )}

      {currentStep === 'dashboard' && (
        <WorkspaceDashboard 
          userEmail={emailData} 
          promptText={promptData} 
          selectedPlan={selectedPlanData} 
          onBack={() => setCurrentStep('landing')} 
        />
      )}
    </div>
  );
}
