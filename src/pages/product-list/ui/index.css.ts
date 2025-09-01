import { style } from "@vanilla-extract/css";

import { mediaQuery } from "@/shared/styles/breakpoints.css";
import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  paddingBlock: 40,
  "@media": {
    [mediaQuery.mobile]: {
      paddingBlock: 20,
      paddingInline: 20,
    },
  },
});

export const title = style({
  color: vars.colors.neutral[900],
  ...typography.heading_1,
});
