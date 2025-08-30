export const serializeSearchParams = <T extends Record<string, unknown>>(
  object: T,
) => {
  const queries = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => [key, String(value)]);
  return new URLSearchParams(queries);
};
