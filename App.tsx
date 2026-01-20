import React, { useState, useRef, useEffect } from 'react';
import { SHELF_DATA } from './constants';
import { LibraryMap } from './components/LibraryMap';

export default function App() {
  const [selectedShelfIds, setSelectedShelfIds] = useState<string[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const toggleShelf = (id: string) => {
    setSelectedShelfIds(prev => {
      if (prev.includes(id)) {
        // Deselecting: clear the timer if it exists
        const existingTimer = timersRef.current.get(id);
        if (existingTimer) {
          clearTimeout(existingTimer);
          timersRef.current.delete(id);
        }
        return prev.filter(shelfId => shelfId !== id);
      } else {
        // Selecting: set a timer to auto-remove after 5 seconds
        const existingTimer = timersRef.current.get(id);
        if (existingTimer) {
          clearTimeout(existingTimer);
        }
        const timer = setTimeout(() => {
          setSelectedShelfIds(current => current.filter(shelfId => shelfId !== id));
          timersRef.current.delete(id);
        }, 5000);
        timersRef.current.set(id, timer);
        return [...prev, id];
      }
    });
  };

  const selectedShelves = SHELF_DATA.filter((s) => selectedShelfIds.includes(s.id));

  const lowerReadingRoomShelves = SHELF_DATA.filter(s => s.section === 'Lower Reading Room');
  const annexeShelves = SHELF_DATA.filter(s => s.section === 'Annexe');

  return (
    <div className="flex flex-col min-h-screen bg-[#e5e5e5]">
      
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col md:flex-row w-full max-w-[1600px] mx-auto p-4 md:p-8 gap-8">
        
        {/* LEFT COLUMN: Map View */}
        <div className="flex-grow w-full md:w-2/3 flex flex-col">
            {/* Map Container */}
            <div className="bg-white shadow-xl border border-gray-300 relative aspect-[4/3] w-full">
                <LibraryMap selectedShelves={selectedShelves} />
            </div>

            {/* Title & Instructions (Below Map) */}
            <div className="mt-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#002147] serif tracking-wide">
                    Find a book
                </h1>
                <p className="text-gray-700 text-lg md:text-xl mt-3 font-medium">
                    Select a shelfmark from the menu on the right-hand side.
                </p>
            </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Controls */}
        <div className="w-full md:w-1/3 bg-[#e0e2e6] border-l-8 border-[#002147]/10 p-6 flex flex-col shadow-inner min-h-[600px]">
            
            {/* Section 1: Lower Reading Room */}
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4 serif text-center border-b-2 border-[#002147]/20 pb-2">
                    Lower Reading Room
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {lowerReadingRoomShelves.map((shelf) => (
                        <button
                            key={shelf.id}
                            onClick={() => toggleShelf(shelf.id)}
                            className={`
                                py-3 px-1 text-xs sm:text-sm font-bold shadow-sm transition-all duration-200
                                border border-[#002147] leading-tight
                                ${selectedShelfIds.includes(shelf.id)
                                    ? 'bg-[#c02653] text-white border-[#e5a9ba] ring-2 ring-[#e5a9ba] ring-offset-1 scale-105 z-10' 
                                    : 'bg-[#002147] text-white hover:opacity-90 hover:-translate-y-0.5'}
                            `}
                        >
                            {shelf.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Section 2: Annexe */}
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4 serif text-center border-b-2 border-[#002147]/20 pb-2">
                    Annexe
                </h2>
                <div className="grid grid-cols-2 gap-3 max-w-[80%] mx-auto">
                    {annexeShelves.map((shelf) => (
                        <button
                            key={shelf.id}
                            onClick={() => toggleShelf(shelf.id)}
                            className={`
                                py-3 px-1 text-xs sm:text-sm font-bold shadow-sm transition-all duration-200
                                border border-[#002147]
                                ${selectedShelfIds.includes(shelf.id)
                                    ? 'bg-[#c02653] text-white border-[#e5a9ba] ring-2 ring-[#e5a9ba] ring-offset-1 scale-105 z-10' 
                                    : 'bg-[#002147] text-white hover:opacity-90 hover:-translate-y-0.5'}
                            `}
                        >
                            {shelf.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="mt-auto pt-12 flex justify-end opacity-40 pointer-events-none">
                 <div className="w-0 h-0 border-b-[80px] border-b-[#002147] border-l-[80px] border-l-transparent"></div>
            </div>
        </div>
      </main>
    </div>
  );
}
