import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const container = style({
  position: "sticky",
  top: 0,
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  height: 56,
  borderBottom: `1px solid ${vars.colors.neutral[200]}`,
  background: vars.colors.white,
});

export const link = recipe({
  base: {
    width: "100%",
    textAlign: "center",
    color: vars.colors.neutral[500],
    transition: "0.2s ease",
    ...typography.body_1_regular,
  },
  variants: {
    selected: {
      true: {
        color: vars.colors.neutral[900],
      },
    },
  },
});

export const slider = style({
  position: "absolute",
  bottom: 0,
  height: 2,
  background: vars.colors.neutral[700],
  transition: "0.2s ease",
});
