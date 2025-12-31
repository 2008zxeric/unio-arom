
import React from 'react';
import { ArrowLeft, ShoppingBag, CheckCircle2, Droplets, MapPin, Wind } from 'lucide-react';
import { ScentItem, ViewState } from '../types';
import { ASSETS } from '../constants';

const ProductDetail: React.FC<{ 
  item: ScentItem, 
  setView: (v: ViewState) => void, 
  previousView: ViewState 
}> = ({ item, setView, previousView }) => {
  return (
    <div className="pt-32 pb-64 px-8 md:px-20 min-h-screen bg-white animate-in fade-in duration-1000">
      <button 
        onClick={() => setView(previousView)} 
        className="fixed top-24 md:top-36 left-6 md:left-20 z-[400] flex items-center gap-4 text-black/40 hover:text-[#D75437] transition-all uppercase tracking-[1em] font-bold text-[10px] md:text-xs group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> BACK
      </button>

      <div className="max-w-7xl mx-auto mt-12 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-40 items-start">
          {/* Visual Display */}
          <div className="space-y-12 lg:sticky lg:top-48">
            <div className="aspect-[3/4] rounded-[0.5rem] overflow-hidden shadow-sm border border-black/5 bg-[#F9FAFB] group">
              <img 
                src={item.hero} 
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 img-fade-in" 
                alt={item.herb} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = ASSETS.heroFallback;
                }}
              />
            </div>
            {/* Metadata Grid (Journal Inspired) */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-black/5">
              <div className="text-center space-y-2">
                <MapPin size={16} className="mx-auto opacity-20" />
                <span className="text-[8px] tracking-[0.2em] uppercase opacity-40 block">Origin</span>
                <span className="text-xs font-serif-zh font-bold">{item.location || 'GLOBAL'}</span>
              </div>
              <div className="text-center space-y-2 border-x border-black/5">
                <Wind size={16} className="mx-auto opacity-20" />
                <span className="text-[8px] tracking-[0.2em] uppercase opacity-40 block">Intensity</span>
                <span className="text-xs font-serif-zh font-bold">MED-HIGH</span>
              </div>
              <div className="text-center space-y-2">
                <Droplets size={16} className="mx-auto opacity-20" />
                <span className="text-[8px] tracking-[0.2em] uppercase opacity-40 block">Extract</span>
                <span className="text-xs font-serif-zh font-bold">{item.category === 'yuan' ? 'Steam Distilled' : 'Matrix Blend'}</span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="space-y-24 py-4">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[12px] md:text-[14px] tracking-[0.8em] uppercase text-[#D75437] font-bold block">{item.herbEn}</span>
                <h2 className="text-4xl md:text-8xl font-serif-zh font-light tracking-[0.1em] text-black leading-tight">{item.herb}</h2>
              </div>
              <p className="text-xl md:text-2xl font-serif-zh opacity-60 italic leading-relaxed border-l-4 border-black/5 pl-8 py-2">
                “{item.shortDesc}”
              </p>
            </div>

            {/* Scent Narrative */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-[0.6em] uppercase font-extrabold text-black/20 flex items-center gap-4">
                  Olfactory Narrative <div className="flex-1 h-px bg-black/5" />
                </h4>
                <p className="text-lg md:text-2xl font-serif-zh text-black/80 leading-loose tracking-wide text-justify indent-10">
                  {item.narrative}
                </p>
              </div>

              {/* Therapeutic Profile */}
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-[0.6em] uppercase font-extrabold text-black/20 flex items-center gap-4">
                  Therapeutic Profile <div className="flex-1 h-px bg-black/5" />
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.benefits.map(b => (
                    <div key={b} className="flex items-center gap-4 p-4 rounded-lg bg-[#F9FAFB] border border-black/5">
                      <CheckCircle2 size={16} className="text-[#D75437] flex-shrink-0" />
                      <span className="text-sm md:text-base font-serif-zh font-bold text-black/70">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GC/MS Section (Trust Building) */}
            <div className="p-8 bg-[#F9FAFB] border border-black/5 rounded-lg flex gap-8 items-center">
              <div className="w-20 h-20 bg-white rounded shadow-inner p-2 border border-black/5 flex-shrink-0">
                <img src={ASSETS.gcmsPlaceholder} className="w-full h-full object-contain opacity-40 grayscale" alt="GCMS" />
              </div>
              <div className="space-y-1">
                <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">Purity Verification</h5>
                <p className="text-xs font-serif-zh opacity-50 leading-relaxed">
                  Batch #UA-{new Date().getFullYear()}-{item.id.slice(0, 2).toUpperCase()} <br/>
                  通过气相色谱质谱联用测试，确保 100% 纯天然且符合活性分子比例。
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-black/5">
              <button 
                className="w-full py-10 md:py-14 bg-[#1a1a1a] text-white rounded-full text-sm md:text-lg tracking-[1.5em] uppercase font-bold btn-rednote shadow-xl flex items-center justify-center gap-6"
                onClick={() => window.open('https://www.xiaohongshu.com/', '_blank')}
              >
                <ShoppingBag size={20} /> SHOP ON REDNOTE
              </button>
              <p className="text-center mt-6 text-[8px] opacity-20 tracking-[0.4em] uppercase font-bold">Limited Seasonal Harvest • Sustainable Sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
