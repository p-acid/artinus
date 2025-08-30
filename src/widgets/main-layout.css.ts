import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: 1400,
  marginLeft: "auto",
  marginRight: "auto",
  paddingInline: 20,

  "@media": {
    "(min-width: 760px)": {
      paddingInline: 40,
    },
    "(min-width: 1000px)": {
      paddingInline: 64,
    },
  },
});
