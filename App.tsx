import React, { useState, useRef, useEffect } from "react";
import { SHELF_DATA, TOPIC_DATA } from "./constants";
import { LibraryMap } from "./components/LibraryMap";

export default function App() {
  const [searchMode, setSearchMode] = useState<"shelfmark" | "topic">(
    "shelfmark",
  );
  const [selectedShelfIds, setSelectedShelfIds] = useState<string[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const toggleSearchMode = () => {
    // Clear all selections and timers when switching modes
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current.clear();
    setSelectedShelfIds([]);
    setSearchMode((prev) => (prev === "shelfmark" ? "topic" : "shelfmark"));
  };

  const activeData = searchMode === "topic" ? TOPIC_DATA : SHELF_DATA;

  const toggleShelf = (id: string) => {
    // In topic mode, toggle all entries sharing the same label
    if (searchMode === "topic") {
      const label = activeData.find((s) => s.id === id)?.label;
      const idsForLabel = activeData
        .filter((s) => s.label === label)
        .map((s) => s.id);
      const anySelected = idsForLabel.some((tid) =>
        selectedShelfIds.includes(tid),
      );

      if (anySelected) {
        // Deselect all for this label
        idsForLabel.forEach((tid) => {
          const timer = timersRef.current.get(tid);
          if (timer) {
            clearTimeout(timer);
            timersRef.current.delete(tid);
          }
        });
        setSelectedShelfIds((prev) =>
          prev.filter((sid) => !idsForLabel.includes(sid)),
        );
      } else {
        // Select all for this label
        idsForLabel.forEach((tid) => {
          const existing = timersRef.current.get(tid);
          if (existing) clearTimeout(existing);
          const timer = setTimeout(() => {
            setSelectedShelfIds((current) =>
              current.filter((sid) => sid !== tid),
            );
            timersRef.current.delete(tid);
          }, 5000);
          timersRef.current.set(tid, timer);
        });
        setSelectedShelfIds((prev) => [
          ...prev,
          ...idsForLabel.filter((tid) => !prev.includes(tid)),
        ]);
      }
      return;
    }

    setSelectedShelfIds((prev) => {
      if (prev.includes(id)) {
        // Deselecting: clear the timer if it exists
        const existingTimer = timersRef.current.get(id);
        if (existingTimer) {
          clearTimeout(existingTimer);
          timersRef.current.delete(id);
        }
        return prev.filter((shelfId) => shelfId !== id);
      } else {
        // Selecting: set a timer to auto-remove after 5 seconds
        const existingTimer = timersRef.current.get(id);
        if (existingTimer) {
          clearTimeout(existingTimer);
        }
        const timer = setTimeout(() => {
          setSelectedShelfIds((current) =>
            current.filter((shelfId) => shelfId !== id),
          );
          timersRef.current.delete(id);
        }, 5000);
        timersRef.current.set(id, timer);
        return [...prev, id];
      }
    });
  };

  const selectedShelves = activeData.filter((s) =>
    selectedShelfIds.includes(s.id),
  );

  const lowerReadingRoomItems = activeData.filter(
    (s) => s.section === "Lower Reading Room",
  );
  // For topic mode, deduplicate by label (some topics have multiple positions)
  const uniqueTopicButtons =
    searchMode === "topic"
      ? lowerReadingRoomItems.filter(
          (item, index, arr) =>
            arr.findIndex((s) => s.label === item.label) === index,
        )
      : lowerReadingRoomItems;
  const topicGridRows = Math.ceil(uniqueTopicButtons.length / 2);
  const annexeShelves = SHELF_DATA.filter((s) => s.section === "Annexe");

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
              Select a {searchMode === "topic" ? "topic" : "shelfmark"} from the
              menu on the right-hand side, or&hellip;
            </p>
            <button
              onClick={toggleSearchMode}
              className="mt-4 px-6 py-3 bg-[#002147] text-white font-bold text-lg shadow-md hover:opacity-90 transition-opacity duration-200"
            >
              {searchMode === "shelfmark"
                ? "Search by topic"
                : "Search by shelfmark"}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Controls */}
        <div className="w-full md:w-1/3 bg-[#e0e2e6] border-l-8 border-[#002147]/10 p-6 flex flex-col shadow-inner min-h-[600px]">
          {/* Section 1: Lower Reading Room */}
          <div className={searchMode === "shelfmark" ? "mb-8" : ""}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4 serif text-center border-b-2 border-[#002147]/20 pb-2">
              Lower Reading Room
            </h2>
            <div
              className={`grid gap-2 ${searchMode === "topic" ? "grid-flow-col" : "grid-cols-2 md:grid-cols-3"}`}
              style={searchMode === "topic" ? { gridTemplateRows: `repeat(${topicGridRows}, auto)` } : undefined}
            >
              {uniqueTopicButtons.map((shelf) => {
                const isActive =
                  searchMode === "topic"
                    ? activeData
                        .filter((s) => s.label === shelf.label)
                        .some((s) => selectedShelfIds.includes(s.id))
                    : selectedShelfIds.includes(shelf.id);
                return (
                  <button
                    key={shelf.id}
                    onClick={() => toggleShelf(shelf.id)}
                    className={`
                                py-3 px-1 text-xs sm:text-sm font-bold shadow-sm transition-all duration-200
                                border border-[#002147] leading-tight
                                ${
                                  isActive
                                    ? "bg-[#c02653] text-white border-[#e5a9ba] ring-2 ring-[#e5a9ba] ring-offset-1 scale-105 z-10"
                                    : "bg-[#002147] text-white hover:opacity-90 hover:-translate-y-0.5"
                                }
                            `}
                  >
                    {shelf.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Annexe (shelfmark mode only) */}
          {searchMode === "shelfmark" && (
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
                                ${
                                  selectedShelfIds.includes(shelf.id)
                                    ? "bg-[#c02653] text-white border-[#e5a9ba] ring-2 ring-[#e5a9ba] ring-offset-1 scale-105 z-10"
                                    : "bg-[#002147] text-white hover:opacity-90 hover:-translate-y-0.5"
                                }
                            `}
                  >
                    {shelf.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Decorative Corner Element */}
          <div className="mt-auto pt-12 flex justify-end opacity-40 pointer-events-none">
            <div className="w-0 h-0 border-b-[80px] border-b-[#002147] border-l-[80px] border-l-transparent"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
