import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../styles/theme.css";

export const skeleton = recipe({
  base: style({
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    backgroundColor: vars.colors.neutral[100],
  }),
  variants: {
    variant: {
      circle: { borderRadius: "50%" },
      rect: { borderRadius: 12 },
      image: { aspectRatio: "1/1", borderRadius: 24 },
    },
  },
  defaultVariants: {
    variant: "rect",
  },
});
