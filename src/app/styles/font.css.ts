import { globalFontFace } from "@vanilla-extract/css";

export const font = "Pretendard";

// Regular
globalFontFace(font, {
  src: 'url("/fonts/Pretendard-Regular.woff") format("woff")',
  fontWeight: 400,
  fontStyle: "normal",
  fontDisplay: "swap",
});

// SemiBold
globalFontFace(font, {
  src: 'url("/fonts/Pretendard-SemiBold.woff") format("woff")',
  fontWeight: 700,
  fontStyle: "normal",
  fontDisplay: "swap",
});
