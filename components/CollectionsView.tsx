
import React, { useMemo } from 'react';
import { CornerDownRight } from 'lucide-react';
import { ViewState, Category } from '../types';
import { DATABASE, ASSETS } from '../constants';

const CollectionsView: React.FC<{ 
  filter: Category, 
  setFilter: (f: Category) => void, 
  onSelect: (id: string) => void, 
  setView: (v: ViewState) => void 
}> = ({ filter, setFilter, onSelect, setView }) => {
  const items = useMemo(() => Object.values(DATABASE).filter(d => d.category === filter), [filter]);

  const themes = {
    yuan: { 
      bg: 'bg-white', 
      label: '元 · 植物灵魂', 
      desc: '追溯植物最纯粹的震动频率', 
      grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
    },
    he: { 
      bg: 'bg-[#F9FAFB]', 
      label: '和 · 宁静处方', 
      desc: '基于神经科学的情绪平衡处方', 
      grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
    },
    jing: { 
      bg: 'bg-white', 
      label: '境 · 器物材质', 
      desc: '气味与材质在呼吸间的物理延伸', 
      grid: 'grid-cols-1 md:grid-cols-3' 
    }
  };

  const currentTheme = themes[filter];

  return (
    <div className={`pt-48 pb-64 min-h-screen transition-all duration-1000 ${currentTheme.bg}`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 space-y-32">
        {/* Editorial Header (Journal Style) */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-black/5 pb-12">
          <div className="space-y-6 text-left max-w-2xl">
            <div className="flex gap-4">
              {(['yuan', 'he', 'jing'] as Category[]).map(c => (
                <button 
                  key={c} 
                  onClick={() => setFilter(c)}
                  className={`text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-bold transition-all px-4 py-2 rounded-full border ${filter === c ? 'bg-black text-white border-black' : 'border-black/10 text-black/40 hover:border-black/40'}`}
                >
                  {c === 'yuan' ? 'Yuan' : c === 'he' ? 'He' : 'Jing'}
                </button>
              ))}
            </div>
            <h2 className="text-4xl md:text-7xl font-serif-zh font-light tracking-[0.2em] text-[#1a1a1a]">{currentTheme.label}</h2>
            <p className="text-lg md:text-xl font-serif-zh opacity-40 italic tracking-widest">“{currentTheme.desc}”</p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-[10px] tracking-[0.6em] uppercase opacity-20 block mb-2">ARCHIVE CATEGORY</span>
            <span className="text-sm font-mono opacity-40">VOL. 2025-SCENT-ARCHIVE</span>
          </div>
        </div>

        {/* Editorial Grid (Lora4j Style) */}
        <div className={`grid ${currentTheme.grid} gap-x-12 gap-y-24 md:gap-y-32`}>
          {items.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer flex flex-col space-y-8" 
              onClick={() => onSelect(item.id)}
            >
              <div className="aspect-[4/5] rounded-[0.5rem] md:rounded-[1rem] overflow-hidden shadow-sm relative border border-black/5 bg-[#FDFDFD]">
                <img 
                  src={item.hero} 
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110 img-fade-in" 
                  alt={item.herb} 
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = ASSETS.heroFallback;
                  }}
                />
                {item.isPopular && (
                  <div className="absolute top-4 left-4 bg-[#D75437] text-white text-[8px] tracking-[0.3em] uppercase font-bold px-3 py-1 rounded shadow-lg z-10">Popular</div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-end border-b border-black/5 pb-2">
                    <h4 className="text-2xl md:text-3xl font-serif-zh tracking-widest text-[#1a1a1a]">{item.herb}</h4>
                    <span className="text-[10px] opacity-20 font-mono tracking-tighter">UA-{item.id.toUpperCase().slice(0, 4)}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold opacity-30">{item.herbEn}</p>
                    <div className="flex gap-1">
                      <div className={`w-2 h-2 rounded-full ${filter === 'yuan' ? 'bg-[#2C3E28]' : filter === 'he' ? 'bg-[#1C39BB]' : 'bg-black'} opacity-40`} />
                    </div>
                  </div>
                </div>
                
                <p className="text-sm md:text-base font-serif-zh opacity-60 line-clamp-2 leading-relaxed h-12">
                  {item.shortDesc}
                </p>
                
                <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                   <CornerDownRight size={14} className="text-[#D75437]" />
                   <span className="text-[10px] tracking-[0.4em] uppercase font-extrabold text-[#D75437]">Discovery Note</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsView;
