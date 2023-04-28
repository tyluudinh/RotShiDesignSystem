import { breakpoints, mediaQueries, vars } from "@rotshi/ui";

export default {
  siteWidth: 1200,
  breakpoints: Object.values(breakpoints).map((bp) => `${bp}px`),
  mediaQueries,
};
