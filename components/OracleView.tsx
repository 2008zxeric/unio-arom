
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Droplets, Activity } from 'lucide-react';
import { ViewState, ChatMessage } from '../types';
import { getOracleResponse } from '../services/gemini';

const OracleView: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '欢迎来到感官祭坛。我是这里的祭司，请告诉我，此时此刻，你内心的杂音是什么？是焦灼的火焰，还是无尽的迷雾？' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input; 
    setInput('');
    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    const reply = await getOracleResponse(newMessages);
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col pt-32 pb-48 px-4 md:px-20 bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl overflow-hidden border border-black/5 relative">
        {/* Oracle Header */}
        <div className="p-8 md:p-12 border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Activity className="text-[#D75437]" size={24} />
            <h3 className="text-2xl md:text-4xl font-serif-zh font-bold tracking-widest text-black">感官祭坛</h3>
          </div>
          <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold opacity-30">AI Aromatherapist Consultant</span>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 scrollbar-hide">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] ${
                  m.role === 'user' 
                  ? 'bg-[#1a1a1a] text-white rounded-tr-none shadow-xl' 
                  : 'bg-[#F5F5F5] text-black rounded-tl-none font-serif-zh leading-relaxed tracking-wide shadow-sm'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-black/30 animate-pulse italic flex items-center gap-4">
              <Droplets size={20} className="animate-bounce" /> 
              <span className="font-serif-zh tracking-widest">正在萃取自然意象...</span>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 md:p-12 bg-[#F5F5F5]/30 border-t border-black/5">
          <div className="max-w-3xl mx-auto flex gap-4 md:gap-6 bg-white p-2 md:p-4 rounded-full shadow-xl border border-black/5">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
              placeholder="描述你当下的情绪，例如：'最近总是失眠...'" 
              className="flex-1 px-8 md:px-12 outline-none text-sm md:text-lg bg-transparent font-serif-zh" 
            />
            <button 
              onClick={handleSend} 
              className="w-12 h-12 md:w-16 md:h-16 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-[#D75437] transition-all"
            >
              <ArrowRight size={28} />
            </button>
          </div>
          <p className="text-center mt-6 text-[8px] md:text-[10px] opacity-30 uppercase tracking-[0.2em]">Note: AI consultation is for lifestyle guidance only, not a medical diagnosis.</p>
        </div>
      </div>
    </div>
  );
};

export default OracleView;
