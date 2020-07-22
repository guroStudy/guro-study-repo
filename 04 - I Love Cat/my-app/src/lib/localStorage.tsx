export const getCatsFromStorage = () => {
  const cats = localStorage.getItem('cats')

  if (cats) {
    return JSON.parse(cats)
  } else {
    return []
  }
}

export const setCatsToStorage = (cats: any[]) => {
  localStorage.setItem('cats', JSON.stringify(cats))
}
