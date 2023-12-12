export const setDataToLS = (key: string, value: number | string) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getDataFromLS = (key: string) => localStorage.getItem(key);

export const removeDataFromLS = (...args: string[]) =>
  args.forEach((i) => localStorage.removeItem(i));
