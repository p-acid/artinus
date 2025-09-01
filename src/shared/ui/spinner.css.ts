import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../styles/theme.css";

const mulShdSpin = keyframes({
  "0%, 100%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[100]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[200]},
      2.5em 0em 0 0em ${vars.colors.neutral[200]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[200]},
      0em 2.5em 0 0em ${vars.colors.neutral[200]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[200]},
      -2.6em 0em 0 0em ${vars.colors.neutral[500]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[700]}
    `,
  },
  "12.5%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[700]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[100]},
      2.5em 0em 0 0em ${vars.colors.neutral[200]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[200]},
      0em 2.5em 0 0em ${vars.colors.neutral[200]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[200]},
      -2.6em 0em 0 0em ${vars.colors.neutral[200]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[500]}
    `,
  },
  "25%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[500]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[700]},
      2.5em 0em 0 0em ${vars.colors.neutral[100]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[200]},
      0em 2.5em 0 0em ${vars.colors.neutral[200]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[200]},
      -2.6em 0em 0 0em ${vars.colors.neutral[200]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[200]}
    `,
  },
  "37.5%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[200]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[500]},
      2.5em 0em 0 0em ${vars.colors.neutral[700]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[100]},
      0em 2.5em 0 0em ${vars.colors.neutral[200]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[200]},
      -2.6em 0em 0 0em ${vars.colors.neutral[200]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[200]}
    `,
  },
  "50%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[200]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[200]},
      2.5em 0em 0 0em ${vars.colors.neutral[500]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[700]},
      0em 2.5em 0 0em ${vars.colors.neutral[100]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[200]},
      -2.6em 0em 0 0em ${vars.colors.neutral[200]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[200]}
    `,
  },
  "62.5%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[200]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[200]},
      2.5em 0em 0 0em ${vars.colors.neutral[200]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[500]},
      0em 2.5em 0 0em ${vars.colors.neutral[700]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[100]},
      -2.6em 0em 0 0em ${vars.colors.neutral[200]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[200]}
    `,
  },
  "75%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[200]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[200]},
      2.5em 0em 0 0em ${vars.colors.neutral[200]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[200]},
      0em 2.5em 0 0em ${vars.colors.neutral[500]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[700]},
      -2.6em 0em 0 0em ${vars.colors.neutral[100]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[200]}
    `,
  },
  "87.5%": {
    boxShadow: `
      0em -2.6em 0 0em ${vars.colors.neutral[200]},
      1.8em -1.8em 0 0em ${vars.colors.neutral[200]},
      2.5em 0em 0 0em ${vars.colors.neutral[200]},
      1.75em 1.75em 0 0em ${vars.colors.neutral[200]},
      0em 2.5em 0 0em ${vars.colors.neutral[200]},
      -1.8em 1.8em 0 0em ${vars.colors.neutral[500]},
      -2.6em 0em 0 0em ${vars.colors.neutral[700]},
      -1.8em -1.8em 0 0em ${vars.colors.neutral[100]}
    `,
  },
});

export const loader = style({
  fontSize: "10px",
  width: "1em",
  height: "1em",
  borderRadius: "50%",
  position: "relative",
  textIndent: "-9999em",
  animation: `${mulShdSpin} 1.1s infinite ease`,
  transform: "translateZ(0)",
});
