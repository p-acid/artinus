import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  rowGap: 40,
  columnGap: 16,

  "@media": {
    "(max-width: 1000px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
    "(max-width: 800px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "(max-width: 400px)": {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  },
});
