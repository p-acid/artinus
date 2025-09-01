import { style } from "@vanilla-extract/css";

import { mediaQuery } from "@/shared/styles/breakpoints.css";
import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const container = style({
  flex: 1,
  paddingTop: 20,
  "@media": {
    [mediaQuery.mobile]: {
      paddingTop: 0,
    },
  },
});

export const skeletonContainer = style([
  container,
  {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
]);

export const thumbnail = style({
  marginBottom: 36,

  "@media": {
    [mediaQuery.mobile]: {
      display: "none",
    },
  },
});

export const subtitle = style({
  color: vars.colors.neutral[900],
  ...typography.heading_4,
});

export const productImage = style({
  borderRadius: 0,
});

export const imagesWrapper = style({
  marginBottom: 48,
});

export const reviewList = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  "@media": {
    [mediaQuery.mobile]: {
      paddingInline: 20,
    },
  },
});
