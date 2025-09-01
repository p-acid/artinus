import { style } from "@vanilla-extract/css";

import { mediaQuery } from "@/shared/styles/breakpoints.css";
import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const container = style({
  flex: 0.6,
  position: "sticky",
  top: 0,
  height: "fit-content",
  maxHeight: "100vh",
  paddingTop: 20,
  overflowY: "auto",
  "@media": {
    [mediaQuery.mobile]: {
      position: "relative",
      maxHeight: "none",
      paddingInline: 20,
    },
  },
});

export const thumbnail = style({
  display: "none",
  "@media": {
    [mediaQuery.mobile]: {
      display: "flex",
      marginBottom: 36,
    },
  },
});

export const brandAndCategory = style({
  marginBottom: 16,
  color: vars.colors.neutral[700],
  ...typography.body_2_regular,
});

export const title = style({
  marginBottom: 16,
  color: vars.colors.neutral[900],
  ...typography.heading_2,
});

export const priceWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  marginBottom: 24,
});

export const originalPrice = style({
  color: vars.colors.neutral[600],
  textDecoration: "line-through",
  ...typography.body_2_regular,
});

export const priceLine = style({
  display: "flex",
  gap: 4,
});

export const discountPercentage = style({
  color: vars.colors.error,
  ...typography.heading_3,
});

export const discountedPrice = style({
  color: vars.colors.neutral[900],
  ...typography.heading_3,
});

export const description = style({
  marginBottom: 24,
  color: vars.colors.neutral[700],
  ...typography.body_1_regular,
});

export const divider = style({
  marginBlock: 24,
  width: "100%",
  height: 1,
  background: vars.colors.neutral[200],
});

export const detailField = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8,
  color: vars.colors.neutral[700],
  ...typography.body_2_regular,
});

export const detailIcon = style({
  width: 20,
});

export const warrantyIcon = style([
  detailIcon,
  {
    color: vars.colors.success,
  },
]);

export const tagListWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const tagTitle = style({
  color: vars.colors.neutral[900],
  ...typography.body_1_semibold,
});

export const tagList = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 4,
});

export const tag = style({
  padding: "4px 8px",
  borderRadius: 4,
  background: vars.colors.neutral[200],
  color: vars.colors.neutral[700],
  ...typography.body_2_regular,
});
