import React, { useEffect, useState, useRef } from "react";
import { ShelfData } from "../types";

interface LibraryMapProps {
  selectedShelves: ShelfData[];
}

export const LibraryMap: React.FC<LibraryMapProps> = ({ selectedShelves }) => {
  const [flashingIds, setFlashingIds] = useState<Set<string>>(new Set());
  const prevSelectedRef = useRef<Set<string>>(new Set());

  const showAnnexeArrow = selectedShelves.some((s) => s.section === "Annexe");

  // Handle flashing timer for newly selected items
  useEffect(() => {
    const currentIds = new Set(selectedShelves.map((s) => s.id));
    const newIds = selectedShelves
      .filter((s) => !prevSelectedRef.current.has(s.id))
      .map((s) => s.id);

    if (newIds.length > 0) {
      setFlashingIds((prev) => {
        const next = new Set(prev);
        newIds.forEach((id) => next.add(id));
        return next;
      });

      newIds.forEach((id) => {
        setTimeout(() => {
          setFlashingIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
        }, 7500);
      });
    }

    prevSelectedRef.current = currentIds;
  }, [selectedShelves]);

  return (
    <div className="relative w-full h-full bg-white border-2 border-gray-800 p-1 select-none overflow-hidden">
      <style>{`
        @keyframes subtle-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .animate-subtle-flash {
          animation: subtle-pulse 2s ease-in-out infinite;
        }
      `}</style>
      <svg
        viewBox="0 0 1000 750"
        className="w-full h-full object-contain"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background floor plan */}
        <image href="/map.jpg" x="0" y="0" width="1000" height="750" />

        {/* Annexe arrow indicator */}
        {showAnnexeArrow && (
          <g transform="translate(220, 408)">
            <path
              d="M 60 -5 L 60 5 L 0 5 L 0 10 L -25 0 L 0 -10 L 0 -5 Z"
              fill="#9abab8"
              stroke="#166534"
              strokeWidth="2"
            />
          <text
            x="70"
            y="0"
            fontSize="14"
            fontWeight="bold"
            fill="#002147"
            textAnchor="start"
            dominantBaseline="middle"
          >
            Annexe
          </text>
          </g>
        )}

        {/* "YOU ARE HERE" Marker - Centered Horizontally */}
        {/* Moved left (470 -> 460) and down (612 -> 616) */}
        <g transform="translate(460, 616)">
          {/* Long Thin Rectangle (Desk/Counter) */}
          {/* Moved 3px UP (-50 -> -53) and 10px RIGHT (-55 -> -45) */}
          <rect
            x="-45"
            y="-53"
            width="80"
            height="8"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />

          {/* Push Pin Icon (Tip at 0,0) */}
          <path
            d="M 0 0 L -12 -28 A 12 12 0 1 1 12 -28 L 0 0 Z"
            fill="#c02653"
            stroke="#7f1d1d"
            strokeWidth="1"
            filter="drop-shadow(2px 4px 2px rgba(0,0,0,0.3))"
          />
          <circle cx="0" cy="-28" r="5" fill="#7f1d1d" />

          {/* Text - Moved closer to pin (25 -> 15) */}
          <text
            y="15"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="black"
            style={{ textShadow: "1px 1px 0px white" }}
          >
            YOU ARE HERE
          </text>
        </g>

        {/* Selected Shelf Markers (Dots) */}
        {selectedShelves.map((shelf) => {
          // Dynamic width calculation: 8px per char + 10px base padding. Min width 90.
          const labelWidth = Math.max(90, shelf.label.length * 8 + 10);
          const rectX = -labelWidth / 2;
          const baseX = shelf.coordinates.x * 10;
          const baseY = shelf.coordinates.y * 7.5;

          return (
            <g key={shelf.id} transform={`translate(${baseX}, ${baseY})`}>
              {/* Subtle Flashing Animation - Custom Keyframe */}
              {flashingIds.has(shelf.id) && (
                <circle
                  r="14"
                  fill="#c02653"
                  className="animate-subtle-flash"
                />
              )}

              {/* Solid Dot Marker */}
              <circle
                r="9"
                fill="#c02653"
                stroke="white"
                strokeWidth="2"
                filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.3))"
              />

              {/* Floating Label - Reduced gap (-18 -> -14) */}
              <g transform="translate(0, -14)">
                <rect
                  x={rectX}
                  y="-20"
                  width={labelWidth}
                  height="24"
                  rx="4"
                  fill="rgba(0, 33, 71, 0.9)"
                  stroke="white"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="-4"
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  {shelf.label}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
