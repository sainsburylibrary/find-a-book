export interface ShelfData {
  id: string;
  label: string;
  section: 'Lower Reading Room' | 'Annexe';
  coordinates: {
    x: number; // Percentage 0-100 relative to map width
    y: number; // Percentage 0-100 relative to map height
  };
}

export interface MapMarkerProps {
  x: number;
  y: number;
  active: boolean;
  label?: string;
}
