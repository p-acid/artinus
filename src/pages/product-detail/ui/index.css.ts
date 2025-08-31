import { globalStyle, style } from "@vanilla-extract/css";

import { mediaQuery } from "@/shared/styles/breakpoints.css";

export const container = style({
  position: "relative",
  display: "flex",
  gap: 40,
  paddingBottom: 20,
  "@media": {
    [mediaQuery.mobile]: {
      flexDirection: "column-reverse",
    },
  },
});

globalStyle(`html:has(${container})`, {
  scrollPaddingTop: 56,
});
