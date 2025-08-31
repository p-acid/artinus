export const capitalizeWords = (
  str: string | undefined,
): string | undefined => {
  if (!str) return str;
  return str
    .split(" ")
    .map((word) =>
      word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : "",
    )
    .join(" ");
};
