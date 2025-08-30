export const breakpoints = {
  mobile: 500,
};

export const mediaQuery = {
  desktop: `screen and (min-width: ${breakpoints.mobile}px)`,
  mobile: `screen and (max-width: ${breakpoints.mobile - 1}px)`,
};
