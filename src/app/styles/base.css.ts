import { globalStyle } from "@vanilla-extract/css";

import { font } from "./font.css";
import * as layers from "./layers.css";

globalStyle("html", {
  "@layer": {
    [layers.base]: {
      fontFamily: font,
    },
  },
});
