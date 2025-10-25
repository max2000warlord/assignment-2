// src/lib/theme-utils.ts
import { CSSProperties } from 'react';

// Synthwave color palette
export const synthwaveColors = {
  cyan: '#00ffff',
  magenta: '#ff00ff',
  yellow: '#ffff00',
  purple: '#bd93f9',
  green: '#50fa7b',
  orange: '#ffb86c',
  red: '#ff5555',
  comment: '#6272a4',
};

// CSS variable references (matching your globals.css)
export const synthwaveCSSVars = {
  neonCyan: 'var(--neon-cyan)',
  neonPink: 'var(--neon-pink)',
  neonPurple: 'var(--neon-purple)',
  neonYellow: 'var(--neon-yellow)',
  neonMagenta: 'var(--neon-magenta)',
};

// Glow effects helpers
export const createGlow = (color: string, intensity: number = 0.6) =>
  `0 0 ${8 * intensity}px rgba(${hexToRgb(color)}, ${intensity})`;

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255, 255, 255';

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ].join(', ');
}

// Synthwave syntax highlighting style with proper typing
export const synthwaveStyle: { [key: string]: CSSProperties } = {
  'code[class*="language-"]': {
    color: synthwaveColors.cyan,
    background: 'transparent',
    textShadow: createGlow(synthwaveColors.cyan, 0.5),
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 4,
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: synthwaveColors.cyan,
    background: 'linear-gradient(135deg, rgba(26, 0, 51, 0.5) 0%, rgba(13, 0, 26, 0.5) 100%)',
    textShadow: createGlow(synthwaveColors.cyan, 0.5),
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: 4,
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  token: {
    color: synthwaveColors.cyan,
  },
  comment: {
    color: synthwaveColors.comment,
    fontStyle: 'italic',
    textShadow: createGlow(synthwaveColors.comment, 0.3),
  },
  prolog: {
    color: synthwaveColors.comment,
  },
  doctype: {
    color: synthwaveColors.magenta,
    textShadow: createGlow(synthwaveColors.magenta, 0.6),
  },
  cdata: {
    color: synthwaveColors.comment,
  },
  punctuation: {
    color: synthwaveColors.cyan,
  },
  property: {
    color: synthwaveColors.magenta,
    textShadow: createGlow(synthwaveColors.magenta, 0.7),
  },
  tag: {
    color: synthwaveColors.magenta,
    textShadow: createGlow(synthwaveColors.magenta, 0.7),
  },
  constant: {
    color: synthwaveColors.purple,
    textShadow: createGlow(synthwaveColors.purple, 0.6),
  },
  symbol: {
    color: synthwaveColors.purple,
    textShadow: createGlow(synthwaveColors.purple, 0.6),
  },
  deleted: {
    color: synthwaveColors.red,
  },
  boolean: {
    color: synthwaveColors.purple,
    textShadow: createGlow(synthwaveColors.purple, 0.6),
  },
  number: {
    color: synthwaveColors.yellow,
    textShadow: createGlow(synthwaveColors.yellow, 0.6),
  },
  selector: {
    color: synthwaveColors.green,
    textShadow: createGlow(synthwaveColors.green, 0.6),
  },
  'attr-name': {
    color: synthwaveColors.green,
    textShadow: createGlow(synthwaveColors.green, 0.6),
  },
  string: {
    color: synthwaveColors.yellow,
    textShadow: createGlow(synthwaveColors.yellow, 0.6),
  },
  char: {
    color: synthwaveColors.yellow,
    textShadow: createGlow(synthwaveColors.yellow, 0.6),
  },
  builtin: {
    color: synthwaveColors.cyan,
    textShadow: createGlow(synthwaveColors.cyan, 0.6),
  },
  inserted: {
    color: synthwaveColors.green,
  },
  variable: {
    color: synthwaveColors.cyan,
  },
  operator: {
    color: synthwaveColors.magenta,
    textShadow: createGlow(synthwaveColors.magenta, 0.5),
  },
  entity: {
    color: synthwaveColors.orange,
    cursor: 'help',
    textShadow: createGlow(synthwaveColors.orange, 0.5),
  },
  url: {
    color: synthwaveColors.cyan,
  },
  keyword: {
    color: synthwaveColors.magenta,
    textShadow: createGlow(synthwaveColors.magenta, 0.7),
    fontWeight: 'bold',
  },
  'attr-value': {
    color: synthwaveColors.yellow,
    textShadow: createGlow(synthwaveColors.yellow, 0.6),
  },
  function: {
    color: synthwaveColors.cyan,
    textShadow: createGlow(synthwaveColors.cyan, 0.7),
  },
  class: {
    color: synthwaveColors.cyan,
    textShadow: createGlow(synthwaveColors.cyan, 0.6),
  },
  regex: {
    color: synthwaveColors.orange,
    textShadow: createGlow(synthwaveColors.orange, 0.5),
  },
  important: {
    color: synthwaveColors.magenta,
    fontWeight: 'bold',
    textShadow: createGlow(synthwaveColors.magenta, 0.8),
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};
