export const lowerCaseKeys = (obj: any): any => {
  if (typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(lowerCaseKeys);
  }
  if (obj === null) {
    return null;
  }
  const entries = Object.entries(obj);
  const mappedEntries = entries.map(
    ([k, v]) =>
      [
        `${k.substr(0, 1).toLowerCase()}${k.substr(1)}`,
        lowerCaseKeys(v),
      ] as const
  );
  return Object.fromEntries(mappedEntries);
};
