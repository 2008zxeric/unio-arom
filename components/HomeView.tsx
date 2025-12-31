
import React from 'react';
import { ArrowRight, Compass, Leaf } from 'lucide-react';
import { ASSETS } from '../constants';
import { ViewState, Category } from '../types';

const HomeView: React.FC<{ setView: (v: ViewState) => void, setFilter: (f: Category) => void }> = ({ setView, setFilter }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden bg-stone-100">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster={ASSETS.heroFallback}
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center space-y-16 px-6">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-24 duration-1000">
            <h1 className="text-5xl md:text-[12rem] font-serif-zh font-light tracking-widest text-[#2C3E28] leading-tight">從世界盡頭<br/>採集一滴寧靜</h1>
            <p className="text-[10px] md:text-2xl tracking-[1.5em] uppercase opacity-40 font-serif-zh text-[#1a1a1a] font-medium">UNIO AROMA | Original Harmony</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-20">
            <button 
              onClick={() => setView('atlas')} 
              className="px-12 md:px-20 py-6 md:py-8 bg-[#1a1a1a] text-white rounded-full text-xs md:text-sm tracking-[0.8em] uppercase font-bold shadow-2xl hover:bg-[#D75437] transition-all flex items-center justify-center gap-6"
            >
              <Compass size={20} /> 開啟尋跡
            </button>
            <button 
              onClick={() => setView('oracle')} 
              className="px-12 md:px-20 py-6 md:py-8 border-2 border-black/10 backdrop-blur-sm text-[#1a1a1a] rounded-full text-xs md:text-sm tracking-[0.8em] uppercase hover:bg-white transition-all"
            >
              AI 氣味問診
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories (The Journey of Scents) */}
      {[
        { 
          id: 'yuan', 
          label: '元 · 植物靈魂', 
          desc: '追溯植物最純粹的震動頻率。', 
          img: ASSETS.galbanum, 
          theme: 'bg-white text-[#2C3E28]',
          caption: 'BOTANICAL SOUL'
        },
        { 
          id: 'he', 
          label: '和 · 寧靜處方', 
          desc: '基於神經科學的情緒平衡。', 
          img: ASSETS.abyssal, 
          theme: 'bg-[#F0F4F8] text-[#001F3F]',
          caption: 'ATMOSPHERIC PRESCRIBED'
        }
      ].map((cat, idx) => (
        <section key={cat.id} className={`py-40 md:py-60 px-8 md:px-20 ${cat.theme} relative overflow-hidden group`}>
          <div className={`max-w-7xl mx-auto flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 md:gap-32`}>
            <div className="flex-1 space-y-12 text-center lg:text-left">
              <span className="text-[10px] md:text-[14px] tracking-[1em] uppercase font-bold opacity-30 block">{cat.caption}</span>
              <h3 className="text-4xl md:text-8xl font-serif-zh font-light tracking-[0.2em] leading-tight">{cat.label}</h3>
              <p className="text-lg md:text-3xl font-serif-zh opacity-60 leading-relaxed italic">“{cat.desc}”</p>
              <button 
                onClick={() => { setFilter(cat.id as Category); setView('collections'); }} 
                className="mx-auto lg:mx-0 pt-10 flex items-center gap-10 text-[12px] tracking-[0.8em] uppercase font-bold hover:text-[#D75437] transition-all group"
              >
                探索系列 <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
              </button>
            </div>
            <div className="flex-1 w-full aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative border-4 border-black/5 bg-stone-200">
              <img 
                src={cat.img} 
                className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105 img-fade-in" 
                alt={cat.label} 
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = ASSETS.heroFallback;
                }}
              />
            </div>
          </div>
        </section>
      ))}

      {/* Brand Vision Section */}
      <section className="py-40 px-8 text-center bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <Leaf className="mx-auto text-[#D75437]" size={48} />
          <h2 className="text-3xl md:text-6xl font-serif-zh font-light tracking-[0.4em] leading-snug">自然並不喧囂，<br/>只是在等待你傾聽。</h2>
          <p className="text-lg opacity-40 font-serif-zh tracking-widest leading-loose">我們跨越經緯度，在每一個極致的地理坐標點，提取最能觸動靈魂的呼吸。每一瓶 Unio Aroma，都是一份來自世界盡頭的寧靜邀請。</p>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
