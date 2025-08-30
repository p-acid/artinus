import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const box1 = style({
  color: vars.colors.black,
  background: vars.colors.primary[100],
  ...typography.body_1_bold,
});

export const box2 = style({
  color: vars.colors.black,
  background: vars.colors.primary[200],
  ...typography.body_1_regular,
});

export const box3 = style({
  color: vars.colors.black,
  background: vars.colors.primary[300],
  ...typography.body_2_bold,
});

export const box4 = style({
  color: vars.colors.black,
  background: vars.colors.primary[400],
  ...typography.body_2_regular,
});

export const box5 = style({
  color: vars.colors.white,
  background: vars.colors.primary[500],
  ...typography.detail_bold,
});

export const box6 = style({
  color: vars.colors.white,
  background: vars.colors.primary[600],
  ...typography.detail_regular,
});

export const box7 = style({
  color: vars.colors.white,
  background: vars.colors.primary[700],
  ...typography.heading_1,
});

export const box8 = style({
  color: vars.colors.white,
  background: vars.colors.primary[800],
  ...typography.heading_2,
});

export const box9 = style({
  color: vars.colors.white,
  background: vars.colors.primary[900],
  ...typography.heading_3,
});

export const box11 = style({
  color: vars.colors.black,
  background: vars.colors.secondary[100],
  ...typography.body_1_bold,
});

export const box12 = style({
  color: vars.colors.black,
  background: vars.colors.secondary[200],
  ...typography.body_1_regular,
});

export const box13 = style({
  color: vars.colors.black,
  background: vars.colors.secondary[300],
  ...typography.body_2_bold,
});

export const box14 = style({
  color: vars.colors.black,
  background: vars.colors.secondary[400],
  ...typography.body_2_regular,
});

export const box15 = style({
  color: vars.colors.black,
  background: vars.colors.secondary[500],
  ...typography.detail_bold,
});

export const box16 = style({
  color: vars.colors.black,
  background: vars.colors.secondary[600],
  ...typography.detail_regular,
});

export const box17 = style({
  color: vars.colors.white,
  background: vars.colors.secondary[700],
  ...typography.heading_1,
});

export const box18 = style({
  color: vars.colors.white,
  background: vars.colors.secondary[800],
  ...typography.heading_2,
});

export const box19 = style({
  color: vars.colors.white,
  background: vars.colors.secondary[900],
  ...typography.heading_3,
});

export const box21 = style({
  color: vars.colors.black,
  background: vars.colors.neutral[100],
  ...typography.body_1_bold,
});

export const box22 = style({
  color: vars.colors.black,
  background: vars.colors.neutral[200],
  ...typography.body_1_regular,
});

export const box23 = style({
  color: vars.colors.black,
  background: vars.colors.neutral[300],
  ...typography.body_2_bold,
});

export const box24 = style({
  color: vars.colors.black,
  background: vars.colors.neutral[400],
  ...typography.body_2_regular,
});

export const box25 = style({
  color: vars.colors.black,
  background: vars.colors.neutral[500],
  ...typography.detail_bold,
});

export const box26 = style({
  color: vars.colors.black,
  background: vars.colors.neutral[600],
  ...typography.detail_regular,
});

export const box27 = style({
  color: vars.colors.white,
  background: vars.colors.neutral[700],
  ...typography.heading_1,
});

export const box28 = style({
  color: vars.colors.white,
  background: vars.colors.neutral[800],
  ...typography.heading_2,
});

export const box29 = style({
  color: vars.colors.white,
  background: vars.colors.neutral[900],
  ...typography.heading_3,
});
