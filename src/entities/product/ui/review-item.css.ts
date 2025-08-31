import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  paddingBlock: 32,
  borderBottom: `1px solid ${vars.colors.neutral[200]}`,
  selectors: {
    "&:last-of-type": {
      border: "none",
    },
  },
});

export const reviewerWrapper = style({
  display: "flex",
  justifyContent: "space-between",
});

export const reviewerName = style({
  color: vars.colors.neutral[900],
  ...typography.body_1_semibold,
});

export const reviewerEmail = style({
  color: vars.colors.neutral[700],
  ...typography.body_2_regular,
});

export const date = style({
  marginBottom: 8,
  color: vars.colors.neutral[700],
  ...typography.body_2_regular,
});

export const comment = style({
  color: vars.colors.neutral[900],
  ...typography.body_2_regular,
});
