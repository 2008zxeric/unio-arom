
import React from 'react';
import { Compass } from 'lucide-react';
import { ViewState } from '../types';
import { DATABASE } from '../constants';

const AtlasView: React.FC<{ setView: (v: ViewState) => void, onSelect: (id: string) => void }> = ({ setView, onSelect }) => {
  const points = Object.values(DATABASE).filter(d => d.x !== undefined && d.y !== undefined);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-48 pb-64 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <Compass className="mx-auto text-[#D75437]" size={40} />
          <h2 className="text-3xl md:text-7xl font-cinzel tracking-[0.5em] font-light">ATLAS</h2>
          <p className="text-sm md:text-xl font-serif-zh opacity-40 tracking-widest uppercase">全球寻迹地图 | 原产地追溯</p>
        </div>

        {/* Interactive Map Area (Simplified with stylized background) */}
        <div className="relative w-full aspect-[21/9] bg-white/5 rounded-[2rem] md:rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl group flex items-center justify-center">
          {/* Faux Stylized Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <h3 className="text-[5rem] md:text-[15rem] font-cinzel opacity-5 select-none tracking-[1em] absolute">HARMONY</h3>
          
          {points.map(p => (
            <button 
              key={p.id} 
              onClick={() => onSelect(p.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/point z-20"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <div className="relative">
                {/* Ping Animation */}
                <div className="absolute inset-0 w-4 h-4 md:w-8 md:h-8 -m-2 rounded-full bg-[#D75437]/40 animate-ping" />
                {/* Dot */}
                <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-[#D75437] shadow-[0_0_20px_rgba(215,84,55,0.6)] group-hover/point:scale-125 transition-transform" />
                
                {/* Label (Visible on Hover) */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-xl opacity-0 translate-y-4 group-hover/point:opacity-100 group-hover/point:translate-y-0 transition-all shadow-2xl whitespace-nowrap pointer-events-none border border-black/5 z-50">
                  <span className="text-[8px] md:text-[10px] text-[#D75437] font-bold tracking-[0.4em] block mb-1 uppercase">{p.location}</span>
                  <span className="text-sm md:text-lg font-serif-zh font-bold tracking-widest">{p.herb}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
          <div className="space-y-4 p-8 bg-white/5 rounded-3xl border border-white/5">
             <h4 className="text-[#D75437] font-bold tracking-[0.5em] text-xs">GLOBAL SOURCING</h4>
             <p className="opacity-60 text-sm font-serif-zh leading-relaxed">我们不使用大规模种植的工业原料。每一个坐标点，都是由品牌的寻香师亲自踏足，考察土壤成分与气候条件。</p>
          </div>
          <div className="space-y-4 p-8 bg-white/5 rounded-3xl border border-white/5">
             <h4 className="text-[#D75437] font-bold tracking-[0.5em] text-xs">DISTILLATION ART</h4>
             <p className="opacity-60 text-sm font-serif-zh leading-relaxed">在原产地建立合作工坊，采用传统的低温慢速蒸馏工艺，锁住植物最脆弱的香气分子。</p>
          </div>
          <div className="space-y-4 p-8 bg-white/5 rounded-3xl border border-white/5">
             <h4 className="text-[#D75437] font-bold tracking-[0.5em] text-xs">ETHICAL TRADE</h4>
             <p className="opacity-60 text-sm font-serif-zh leading-relaxed">支持当地的可持续采摘社区，每一滴宁静的背后，都是对大地的回馈与尊重。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasView;
