import { ShelfData } from './types';

// Map Coordinate System: 0-100% X, 0-100% Y
// Based on map image dimensions: 2759px (W) x 1985px (H)

export const SHELF_DATA: ShelfData[] = [
  // --- Lower Reading Room ---
  
  {
    id: 'lrr-1',
    label: 'A-HB137',
    section: 'Lower Reading Room',
    coordinates: { x: 72.74, y: 35.72 }
  },
  {
    id: 'lrr-2',
    label: 'HB139-HC79',
    section: 'Lower Reading Room',
    coordinates: { x: 72.74, y: 43.88 }
  },
  {
    id: 'lrr-3',
    label: 'HC102-HD30.55',
    section: 'Lower Reading Room',
    coordinates: { x: 72.74, y: 61.91 }
  },
  {
    id: 'lrr-4',
    label: 'HD31-HD45',
    section: 'Lower Reading Room',
    coordinates: { x: 82.28, y: 92.04 }
  },
  {
    id: 'lrr-5',
    label: 'HD51-HD58.7',
    section: 'Lower Reading Room',
    coordinates: { x: 66.33, y: 92.04 }
  },
  {
    id: 'lrr-6',
    label: 'HD58.8-HD60',
    section: 'Lower Reading Room',
    coordinates: { x: 50.38, y: 92.04 }
  },
  {
    id: 'lrr-7',
    label: 'HD61-HD70',
    section: 'Lower Reading Room',
    coordinates: { x: 34.07, y: 92.04 }
  },
  {
    id: 'lrr-8',
    label: 'HD75-HD6955',
    section: 'Lower Reading Room',
    coordinates: { x: 18.05, y: 92.04 }
  },
  {
    id: 'lrr-9',
    label: 'HD6961-HF5459',
    section: 'Lower Reading Room',
    coordinates: { x: 27.26, y: 44.84 }
  },
  {
    id: 'lrr-10',
    label: 'HF5476-HG3881',
    section: 'Lower Reading Room',
    coordinates: { x: 27.26, y: 34.86 }
  },
  {
    id: 'lrr-11',
    label: 'HG4011-HG4028',
    section: 'Lower Reading Room',
    coordinates: { x: 29.50, y: 34.86 }
  },
  {
    id: 'lrr-12',
    label: 'HG4061-HM511',
    section: 'Lower Reading Room',
    coordinates: { x: 29.39, y: 44.94 }
  },
  {
    id: 'lrr-13',
    label: 'HM535-PE1115',
    section: 'Lower Reading Room',
    coordinates: { x: 35.70, y: 34.86 }
  },
  {
    id: 'lrr-14',
    label: 'PE1408-ZA',
    section: 'Lower Reading Room',
    coordinates: { x: 35.70, y: 44.94 }
  },

  // --- Annexe (Right Side) ---
  
  {
    id: 'ann-1',
    label: 'A-HB133',
    section: 'Annexe',
    coordinates: { x: 17.32, y: 34.91 }
  },
  {
    id: 'ann-2',
    label: 'HB135-HD30.55',
    section: 'Annexe',
    coordinates: { x: 17.32, y: 44.89 }
  },
  {
    id: 'ann-3',
    label: 'HD31-HD58.82',
    section: 'Annexe',
    coordinates: { x: 14.10, y: 55.82 }
  },
  {
    id: 'ann-4',
    label: 'HD58.87-HD4901',
    section: 'Annexe',
    coordinates: { x: 8.30, y: 55.82 }
  },
  {
    id: 'ann-5',
    label: 'HD4903-HF5413',
    section: 'Annexe',
    coordinates: { x: 5.22, y: 54.06 }
  },
  {
    id: 'ann-6',
    label: 'HF5415-HG1601',
    section: 'Annexe',
    coordinates: { x: 5.22, y: 45.19 }
  },
  {
    id: 'ann-7',
    label: 'HG1615-JZ',
    section: 'Annexe',
    coordinates: { x: 5.22, y: 36.27 }
  },
  {
    id: 'ann-8',
    label: 'K-ZA',
    section: 'Annexe',
    coordinates: { x: 5.22, y: 27.61 }
  },
];
