import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 24,
  background: vars.colors.neutral[100],
  aspectRatio: "1/1",
});
