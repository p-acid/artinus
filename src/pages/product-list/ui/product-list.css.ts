import { style } from "@vanilla-extract/css";

import { mediaQuery } from "@/shared/styles/breakpoints.css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  rowGap: 24,
  columnGap: 16,

  "@media": {
    "(max-width: 800px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [mediaQuery.mobile]: {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  },
});
