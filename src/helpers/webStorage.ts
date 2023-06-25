export const setStorage = (
  key: string,
  data: string,
  toLocalStorage: boolean
) => {
  if (toLocalStorage) {
    localStorage.setItem(key, data);
  } else {
    sessionStorage.setItem(key, data);
  }
};

export const getStorage = (key: string) => {
  let ret = null;
  ret = localStorage.getItem(key);
  if (!ret) {
    ret = sessionStorage.getItem(key);
  }
  return ret;
};
