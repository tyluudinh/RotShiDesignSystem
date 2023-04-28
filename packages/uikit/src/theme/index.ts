import { vars } from '@rotshi/ui'
import { MediaQueries, Breakpoint } from './types'

export interface RotShiTheme {
  colors: typeof vars.colors,
  siteWidth: number
  isDark: boolean
  breakpoints: Breakpoint,
  mediaQueries: MediaQueries
}

export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";
export * from "./types";