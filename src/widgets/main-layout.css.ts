import { style } from "@vanilla-extract/css";

import { breakpoints } from "@/shared/styles/breakpoints.css";

export const container = style({
  maxWidth: 1400,
  marginInline: "auto",
  paddingInline: 0,

  "@media": {
    [`(min-width: ${breakpoints.mobile}px)`]: {
      paddingInline: 20,
    },
    "(min-width: 760px)": {
      paddingInline: 40,
    },
    "(min-width: 1000px)": {
      paddingInline: 64,
    },
  },
});
