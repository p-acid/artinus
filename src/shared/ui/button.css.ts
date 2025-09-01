import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

const buttonBase = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 12,
  borderRadius: 6,
  whiteSpace: "nowrap",
  overflow: "hidden",
  ...typography.body_1_regular,
  ":disabled": {
    pointerEvents: "none",
  },
});

export const button = recipe({
  base: buttonBase,
  variants: {
    variant: {
      neutral: {
        border: `1px solid ${vars.colors.neutral[900]}`,
        backgroundColor: vars.colors.neutral[900],
        color: vars.colors.white,
        ":hover": {
          borderColor: vars.colors.neutral[800],
          backgroundColor: vars.colors.neutral[800],
        },
        ":disabled": {
          color: vars.colors.neutral[300],
          borderColor: vars.colors.neutral[700],
          backgroundColor: vars.colors.neutral[700],
        },
      },
    },
    size: {
      sm: {
        height: 32,
        padding: "0 12px",
      },
      md: {
        height: 36,
        padding: "0 16px",
      },
      lg: {
        height: 48,
        padding: "0 16px",
      },
    },
    width: {
      full: { width: "100%" },
      fit: { width: "fit-content", minWidth: "fit-content" },
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "md",
    width: "fit",
  },
});

globalStyle(`${buttonBase} svg`, {
  width: 20,
});
