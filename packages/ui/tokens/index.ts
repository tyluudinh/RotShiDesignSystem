import { darkColors, lightColors } from './colors'

export const shadows = {
  xsm: '0px 1px 2px rgba(16, 24, 40, 0.04)',
  sm: '0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1)',
  md: '0px 2px 4px -2px rgba(16, 24, 40, 0.1), 0px 4px 6px -1px rgba(16, 24, 40, 0.1)',
  lg: '0px 4px 6px -4px rgba(16, 24, 40, 0.1), 0px 10px 15px -3px rgba(16, 24, 40, 0.1)',
  xl: '0px 8px 10px -6px rgba(16, 24, 40, 0.1), 0px 20px 25px -5px rgba(16, 24, 40, 0.1)',
  xxl: '0px 25px 50px -12px rgba(16, 24, 40, 0.25)',
  hover: '0px 2px 4px -2px rgba(16, 24, 40, 0.05), 0px 4px 6px -1px rgba(16, 24, 40, 0.03)',
  soft: '0px 0px 1px rgba(113, 128, 150, 0.04), 0px 4px 8px rgba(113, 128, 150, 0.08)',
}

export const tokens = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  fonts: {
    normal: "'Inter', sans-serif",
    mono: 'SFMono, ui-monospace, monospace',
  },
  space: {
    '0px': '0px',
    '1rem': '1rem',
    '1px': '1px',
    '2px': '2px',
    '6px': '6px',
    '4px': '4px',
    '8px': '8px',
    '12px': '12px',
    '14px': '14px',
    '16px': '16px',
    '20px': '20px',
    '24px': '24px',
    '32px': '32px',
    '48px': '48px',
    '56px': '56px',
    '64px': '64px',
  },
  borderWidths: {
    '0': '0px',
    '1': '1px',
    '2': '2px',
  },
  radii: {
    '0': '0px',
    '8px': '8px',
    '12px': '12px',
    '20px': '20px',
    '32px': '32px',
    small: '4px',
    default: '16px',
    card: '24px',
    circle: '50%',
  },
  fontSizes: {
    '10px': '10px',
    '12px': '12px',
    '16px': '16px',
    '14px': '14px',
    '20px': '20px',
    '40px': '40px',
  },
  shadows,
} as const

export type Mode = 'light' | 'dark'
export type Tokens = typeof tokens