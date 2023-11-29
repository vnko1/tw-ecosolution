export const setDataToLS = (key: string, value: number) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getDataFromLS = (key: string): string | null =>
  localStorage.getItem(key);
