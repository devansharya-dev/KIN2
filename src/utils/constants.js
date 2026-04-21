// src/constants/scrollytelling.js

export const TOTAL_FRAMES = 210;
export const FRAME_PREFIX = '/sequence/ezgif-frame-';
export const SCROLL_HEIGHT = '800vh'; 

export const BEATS = [
  {
    id: 1,
    scrollStart: 0.0,
    scrollEnd: 0.2,
    title: 'PURE\nREFRESHMENT.', // Break line for better visual weight
    subtitle: 'Functional soda crafted for the modern ritual.',
    metric: '01 // ORIGIN', // Metric instead of Accent
  },
  {
    id: 2,
    scrollStart: 0.25,
    scrollEnd: 0.45,
    title: 'INTENTIONAL\nFLOW.',
    subtitle: 'A handheld ritual designed for mental clarity.',
    metric: '02 // HUMAN',
  },
  {
    id: 3,
    scrollStart: 0.55,
    scrollEnd: 0.75,
    title: 'BOTANICAL\nCORE.',
    subtitle: 'Infused with Reishi Mushrooms & Ginger Root.',
    metric: '03 // ELEMENTS',
  },
  {
    id: 4,
    scrollStart: 0.85,
    scrollEnd: 1.0,
    title: 'ELEVATE\nDAILY.',
    subtitle: 'Experience the evolution of social drinking.',
    metric: '04 // FINAL',
  },
];

export const pad = (num, size = 3) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};