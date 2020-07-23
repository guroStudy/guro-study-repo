const headers = new Headers({
  'x-api-key': '42ee7a31-570a-4eac-a9eb-29a298ed0acf',
});

export const getCatImg = () => {
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

export const getCatByBreed = async (keyword) => {
  const breedRes = await getBreedByName(keyword);
  const breed = breedRes[0]['id'];
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${breed}&limit=10`,
    {
      headers,
    }
  );
  const apiData = await response.json();
  return apiData;
};
