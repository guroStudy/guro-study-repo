export const getCatsFromStorage = (): Cat[] => {
  const cats = localStorage.getItem('cats');

  if (cats) {
    return JSON.parse(cats);
  } else {
    return [];
  }
};

export const setCatsToStorage = (cats: Cat[]) => {
  localStorage.setItem('cats', JSON.stringify(cats));
};
