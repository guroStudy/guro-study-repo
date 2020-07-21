const headers = new Headers({
  'x-api-key': '42ee7a31-570a-4eac-a9eb-29a298ed0acf',
});

export const getCatImgAll = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10`, {
      headers,
    }).then((response) => resolve(response.json()));
  });
};

export const getBreedByName = (keyword) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${keyword}`, {
      headers,
    }).then((response) => resolve(response.json()));
  });
};

export const getCatByBreed = (breed) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breed_id=${breed}&limit=10`,
      {
        headers,
      }
    ).then((response) => resolve(response.json()));
  });
};
