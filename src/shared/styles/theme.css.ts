import { createGlobalTheme } from "@vanilla-extract/css";

import { colors } from "./colors.css";

export const vars = createGlobalTheme(":root", {
  colors,
});
