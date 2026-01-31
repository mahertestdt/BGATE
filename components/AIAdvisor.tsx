
import React, { useState, useRef, useEffect } from 'react';
import { getSolutionRecommendation } from '../services/geminiService';
import { Message } from '../types';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasKey, setHasKey] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Salam! I am your B-Gate Solution Advisor. How can I help with your industrial needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkEnvironment = async () => {
      // Check for aistudio multiple times in case of delayed injection.
      // We rely on type assertion to avoid conflicts with pre-existing global type declarations.
      let checks = 0;
      const interval = setInterval(async () => {
        checks++;
        const aistudio = (window as any).aistudio;
        if (aistudio && typeof aistudio.hasSelectedApiKey === 'function') {
          const selected = await aistudio.hasSelectedApiKey();
          setHasKey(selected);
          clearInterval(interval);
        } else if (checks > 10) {
          // If not found after some time, assume we are not in AI Studio environment
          // or a key is already provided in process.env.API_KEY
          setHasKey(true); 
          clearInterval(interval);
        }
      }, 500);

      return () => clearInterval(interval);
    };
    checkEnvironment();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleConnect = async () => {
    const aistudio = (window as any).aistudio;
    if (aistudio && typeof aistudio.openSelectKey === 'function') {
      try {
        await aistudio.openSelectKey();
        // GUIDELINE: Assume success after triggering the dialog to avoid race conditions.
        setHasKey(true);
      } catch (err) {
        console.error("Failed to open key selection:", err);
        alert("Could not open the key selection dialog. Please check if popups are blocked.");
      }
    } else {
      alert("AI Studio connection utility not found. If you are testing locally, please ensure process.env.API_KEY is set.");
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getSolutionRecommendation(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      let errorMsg = "I'm sorry, I encountered an error connecting to the AI service.";
      
      if (error.message === "API_KEY_MISSING" || error.message === "API_KEY_INVALID") {
        setHasKey(false);
        errorMsg = "An API key is required to use the AI Advisor. Please click the 'Connect' button below to select your key.";
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-600 text-white shadow-2xl flex items-center justify-center transform transition hover:scale-110 active:scale-95 z-50 relative"
        aria-label="Toggle AI Advisor"
      >
        {isOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-robot text-2xl"></i>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-96 h-[500px] max-h-[70vh] glass-effect rounded-3xl shadow-2xl border border-white/40 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white shrink-0">
            <h4 className="font-bold flex items-center gap-2">
              <i className="fa-solid fa-shield-virus"></i> B-Gate AI Advisor
            </h4>
            <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Industrial Excellence Expert</p>
          </div>

          {/* Key Selection Overlay or Chat Content */}
          {hasKey === false ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 bg-white">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
                <i className="fa-solid fa-key text-2xl"></i>
              </div>
              <h5 className="font-bold text-slate-900 text-lg">AI Connectivity Required</h5>
              <p className="text-sm text-slate-500">
                To enable the intelligent advisor, please select a valid API key from your paid Google Cloud project.
              </p>
              <button 
                onClick={handleConnect}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Connect to AI Studio
              </button>
              <div className="text-[10px] text-slate-400">
                <p>Note: A paid project with billing enabled is required.</p>
                <a 
                  href="https://ai.google.dev/gemini-api/docs/billing" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Billing Documentation
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-100 bg-white shrink-0">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about BMS, Fire Safety..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAdvisor;
