import { ShelfData } from "./types";

// Map Coordinate System: 0-100% X, 0-100% Y
// Based on map image dimensions: 2759px (W) x 1985px (H)

export const SHELF_DATA: ShelfData[] = [
  // --- Lower Reading Room ---

  {
    id: "lrr-1",
    label: "A-HB138",
    section: "Lower Reading Room",
    coordinates: { x: 72.74, y: 35.72 },
  },
  {
    id: "lrr-2",
    label: "HB139-HC101",
    section: "Lower Reading Room",
    coordinates: { x: 72.74, y: 43.88 },
  },
  {
    id: "lrr-3",
    label: "HC102-HD30",
    section: "Lower Reading Room",
    coordinates: { x: 72.74, y: 61.91 },
  },
  {
    id: "lrr-4",
    label: "HD31-HD50",
    section: "Lower Reading Room",
    coordinates: { x: 82.28, y: 92.04 },
  },
  {
    id: "lrr-5",
    label: "HD51-HD58.7 N",
    section: "Lower Reading Room",
    coordinates: { x: 66.33, y: 92.04 },
  },
  {
    id: "lrr-6",
    label: "HD58.7 O-HD60",
    section: "Lower Reading Room",
    coordinates: { x: 50.38, y: 92.04 },
  },
  {
    id: "lrr-7",
    label: "HD61-HD74",
    section: "Lower Reading Room",
    coordinates: { x: 34.07, y: 92.04 },
  },
  {
    id: "lrr-8",
    label: "HD75-HD6960",
    section: "Lower Reading Room",
    coordinates: { x: 18.05, y: 92.04 },
  },
  {
    id: "lrr-9",
    label: "HD6961-HF5475",
    section: "Lower Reading Room",
    coordinates: { x: 27.26, y: 44.84 },
  },
  {
    id: "lrr-10",
    label: "HF5476-HG4010",
    section: "Lower Reading Room",
    coordinates: { x: 27.26, y: 34.86 },
  },
  {
    id: "lrr-11",
    label: "HG4011-HG4514",
    section: "Lower Reading Room",
    coordinates: { x: 29.5, y: 34.86 },
  },
  {
    id: "lrr-12",
    label: "HG4515-HM534",
    section: "Lower Reading Room",
    coordinates: { x: 29.39, y: 44.94 },
  },
  {
    id: "lrr-13",
    label: "HM535-PE1407",
    section: "Lower Reading Room",
    coordinates: { x: 35.7, y: 34.86 },
  },
  {
    id: "lrr-14",
    label: "PE1408-Z",
    section: "Lower Reading Room",
    coordinates: { x: 35.7, y: 44.94 },
  },

  // --- Annexe (Right Side) ---

  {
    id: "ann-1",
    label: "A-HB133",
    section: "Annexe",
    coordinates: { x: 17.32, y: 34.91 },
  },
  {
    id: "ann-2",
    label: "HB134-HD30.4",
    section: "Annexe",
    coordinates: { x: 17.32, y: 44.89 },
  },
  {
    id: "ann-3",
    label: "HD30.5-HD58.81",
    section: "Annexe",
    coordinates: { x: 14.1, y: 55.82 },
  },
  {
    id: "ann-4",
    label: "HD58.82-HD4902",
    section: "Annexe",
    coordinates: { x: 8.3, y: 55.82 },
  },
  {
    id: "ann-5",
    label: "HD4903-HF5415.14",
    section: "Annexe",
    coordinates: { x: 5.22, y: 54.06 },
  },
  {
    id: "ann-6",
    label: "HF5415.15-HG1614",
    section: "Annexe",
    coordinates: { x: 5.22, y: 45.19 },
  },
  {
    id: "ann-7",
    label: "HG1615-JZ",
    section: "Annexe",
    coordinates: { x: 5.22, y: 36.27 },
  },
  {
    id: "ann-8",
    label: "K-Z",
    section: "Annexe",
    coordinates: { x: 5.22, y: 27.61 },
  },
];

// --- Topic Data (Search by Topic mode) ---
// All topics are in the Lower Reading Room

export const TOPIC_DATA: ShelfData[] = [
  {
    id: "topic-1",
    label: "Corporate finance",
    section: "Lower Reading Room",
    coordinates: { x: 30.1, y: 33.33 },
  },
  {
    id: "topic-2",
    label: "Corporate responsibility",
    section: "Lower Reading Room",
    coordinates: { x: 50.2, y: 91.33 },
  },
  {
    id: "topic-3",
    label: "Economics",
    section: "Lower Reading Room",
    coordinates: { x: 73.7, y: 42.0 },
  },
  {
    id: "topic-4",
    label: "Financial accounting",
    section: "Lower Reading Room",
    coordinates: { x: 26.33, y: 33.33 },
  },
  {
    id: "topic-5",
    label: "Financial economics",
    section: "Lower Reading Room",
    coordinates: { x: 30.1, y: 42.8 },
  },
  {
    id: "topic-6",
    label: "Law",
    section: "Lower Reading Room",
    coordinates: { x: 34.6, y: 42.8 },
  },
  {
    id: "topic-7",
    label: "Leadership",
    section: "Lower Reading Room",
    coordinates: { x: 66.4, y: 91.33 },
  },
  {
    id: "topic-8",
    label: "M&A",
    section: "Lower Reading Room",
    coordinates: { x: 17.8, y: 91.33 },
  },
  {
    id: "topic-9",
    label: "Major projects",
    section: "Lower Reading Room",
    coordinates: { x: 33.9, y: 91.33 },
  },
  {
    id: "topic-10",
    label: "Marketing",
    section: "Lower Reading Room",
    coordinates: { x: 26.33, y: 42.93 },
  },
  {
    id: "topic-11a",
    label: "Negotiation",
    section: "Lower Reading Room",
    coordinates: { x: 66.4, y: 91.33 },
  },
  {
    id: "topic-11b",
    label: "Negotiation",
    section: "Lower Reading Room",
    coordinates: { x: 73.7, y: 34.13 },
  },
  {
    id: "topic-12",
    label: "Operations management",
    section: "Lower Reading Room",
    coordinates: { x: 34.6, y: 33.33 },
  },
  {
    id: "topic-13a",
    label: "Organisations",
    section: "Lower Reading Room",
    coordinates: { x: 50.2, y: 91.33 },
  },
  {
    id: "topic-13b",
    label: "Organisations",
    section: "Lower Reading Room",
    coordinates: { x: 82.4, y: 91.33 },
  },
  {
    id: "topic-13c",
    label: "Organisations",
    section: "Lower Reading Room",
    coordinates: { x: 66.4, y: 91.33 },
  },
  {
    id: "topic-14",
    label: "Psychology",
    section: "Lower Reading Room",
    coordinates: { x: 73.7, y: 34.13 },
  },
  {
    id: "topic-15",
    label: "Real estate",
    section: "Lower Reading Room",
    coordinates: { x: 17.8, y: 91.33 },
  },
  {
    id: "topic-16a",
    label: "Research methodology",
    section: "Lower Reading Room",
    coordinates: { x: 73.7, y: 34.13 },
  },
  {
    id: "topic-16b",
    label: "Research methodology",
    section: "Lower Reading Room",
    coordinates: { x: 73.7, y: 59.33 },
  },
  {
    id: "topic-17",
    label: "Start-ups",
    section: "Lower Reading Room",
    coordinates: { x: 33.9, y: 91.33 },
  },
  {
    id: "topic-18",
    label: "Strategy",
    section: "Lower Reading Room",
    coordinates: { x: 73.7, y: 59.33 },
  },
];
