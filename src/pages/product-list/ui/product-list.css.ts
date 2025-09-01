import { style } from "@vanilla-extract/css";

import { vars } from "@/shared/styles/theme.css";
import { typography } from "@/shared/styles/typography.css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  rowGap: 40,
  columnGap: 16,

  "@media": {
    "(max-width: 1000px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
    "(max-width: 800px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "(max-width: 400px)": {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  },
});

export const loadingSpinner = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 64,
  height: "80vh",
  color: vars.colors.neutral[700],
  ...typography.body_1_semibold,
});

export const loadMoreSpinner = style({
  display: "flex",
  justifyContent: "center",
  paddingBlock: 40,
});
