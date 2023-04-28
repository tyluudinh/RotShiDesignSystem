import { vars } from "@rotshi/ui/css/vars.css";

export type Breakpoint = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export type Spacing = number[];

export type Colors = typeof vars.colors;