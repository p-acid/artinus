import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  borderRadius: 20,
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const brand = style({
  color: vars.colors.primary[500],
  ...typography.body_2_regular,
});

export const title = style({
  color: vars.colors.black,
  ...typography.body_1_semibold,
});

export const price = style({
  color: vars.colors.neutral[700],
  ...typography.body_2_regular,
});
