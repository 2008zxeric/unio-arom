
import React, { useState, useEffect } from 'react';
import { 
  Home, Map as MapIcon, Box, Activity, Search,
  Compass, ArrowRight, ArrowLeft, Leaf, Wind, Layers
} from 'lucide-react';
import { ViewState, Category } from './types';
import { DATABASE } from './constants';
import HomeView from './components/HomeView';
import CollectionsView from './components/CollectionsView';
import AtlasView from './components/AtlasView';
import OracleView from './components/OracleView';
import ProductDetail from './components/ProductDetail';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [prevView, setPrevView] = useState<ViewState>('home');
  const [filter, setFilter] = useState<Category>('yuan');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const navigateToView = (v: ViewState, cat?: Category) => {
    setPrevView(view);
    if (cat) setFilter(cat);
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (id: string) => {
    setPrevView(view);
    setSelectedId(id);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-[#F5F5F5] selection:bg-[#D75437] selection:text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full px-8 md:px-20 py-8 md:py-12 flex justify-between items-center z-[500] pointer-events-none">
        <div 
          className="text-2xl md:text-5xl font-cinzel tracking-[0.6em] pointer-events-auto cursor-pointer text-[#1a1a1a] font-bold flex flex-col items-start" 
          onClick={() => navigateToView('home')}
        >
          <span className="font-serif-zh font-light text-[#2C3E28] tracking-[0.8em]">元香</span>
          <span className="text-[8px] md:text-[10px] opacity-30 mt-2 font-sans font-medium uppercase tracking-[0.5em]">Unio Aroma Archive</span>
        </div>
        <div className="pointer-events-auto flex items-center gap-12">
           <button 
             onClick={() => navigateToView('oracle')} 
             className="text-[12px] md:text-[16px] tracking-[0.8em] uppercase font-bold text-[#1a1a1a] hover:text-[#D75437] transition-colors flex items-center gap-4"
           >
             <Activity size={20} /> <span className="hidden sm:inline">问诊</span>
           </button>
           <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center text-[#1a1a1a] cursor-pointer hover:bg-black hover:text-white transition-all shadow-xl">
             <Search size={22} />
           </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 min-h-screen">
        {view === 'home' && <HomeView setView={navigateToView} setFilter={setFilter} />}
        {view === 'collections' && <CollectionsView filter={filter} setFilter={setFilter} onSelect={handleSelectProduct} setView={navigateToView} />}
        {view === 'atlas' && <AtlasView setView={navigateToView} onSelect={handleSelectProduct} />}
        {view === 'oracle' && <OracleView setView={navigateToView} />}
        {view === 'product' && selectedId && <ProductDetail item={DATABASE[selectedId]} setView={navigateToView} previousView={prevView} />}
      </main>

      {/* Bottom Navigator (Sticky) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[600] pointer-events-none w-full max-w-lg px-6">
        <div className="pointer-events-auto flex items-center justify-between glass p-2 md:p-3 rounded-full border border-black/10 shadow-2xl">
          <button 
            onClick={() => setView('home')} 
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${view === 'home' ? 'bg-[#1a1a1a] text-white shadow-lg' : 'text-black/40 hover:text-black'}`}
          >
            <Home size={22} />
          </button>
          <button 
            onClick={() => setView('atlas')} 
            className={`flex items-center gap-3 px-6 py-3 rounded-full text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-bold transition-all ${view === 'atlas' ? 'text-[#D75437] bg-black/5' : 'text-black/40 hover:text-black'}`}
          >
            <MapIcon size={18} /><span className="hidden sm:inline">寻迹</span>
          </button>
          <button 
            onClick={() => setView('collections')} 
            className={`flex items-center gap-3 px-6 py-3 rounded-full text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-bold transition-all ${view === 'collections' ? 'text-[#D75437] bg-black/5' : 'text-black/40 hover:text-black'}`}
          >
            <Box size={18} /><span className="hidden sm:inline">系列</span>
          </button>
          <button 
            onClick={() => setView('oracle')} 
            className={`flex items-center gap-3 px-6 py-3 rounded-full text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-bold transition-all ${view === 'oracle' ? 'text-[#D75437] bg-black/5' : 'text-black/40 hover:text-black'}`}
          >
            <Activity size={18} /><span className="hidden sm:inline">问诊</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-40 md:py-60 border-t border-black/5 text-center relative z-10 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto space-y-20 px-8">
          <div className="text-4xl md:text-[12rem] font-cinzel tracking-[1.5em] text-[#1a1a1a] opacity-5 select-none leading-none">UNIO AROMA</div>
          <div className="space-y-4">
            <p className="text-[10px] md:text-[14px] tracking-[3em] uppercase opacity-20 font-bold">© 2025 元香 | 采集自然之声</p>
            <p className="text-[8px] md:text-[10px] tracking-[1em] uppercase opacity-10">Sense the unseen coordinates</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
