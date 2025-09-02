import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 32,
  height: "100vh",
});

export const icon = style({
  width: 128,
  height: 128,
  color: vars.colors.neutral[800],
});

export const text = style({
  color: vars.colors.neutral[700],
  ...typography.heading_3,
});
