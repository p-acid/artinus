import { globalFontFace } from "@vanilla-extract/css";

export const font = "Pretendard";

globalFontFace(font, {
  src: 'url("/fonts/PretendardVariable.ttf") format("ttf")',
});
