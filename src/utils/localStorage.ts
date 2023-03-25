const addToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};
export { addToLocalStorage, removeFromLocalStorage, getFromLocalStorage };
