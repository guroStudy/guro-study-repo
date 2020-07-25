import axios from 'axios';

const END_POINT = 'https://api.thecatapi.com/v1';

export const getBreedsByKeyword = async (keyword: string): Promise<Breed[]> => {
  const { data }: { data: Breed[] } = await axios(`${END_POINT}/breeds/search?q=${keyword}`);
  return data;
};

export const getCatsByKeyword = async (keyword: string): Promise<Cat[]> => {
  const breeds: Breed[] = await getBreedsByKeyword(keyword);
  const requests: Promise<Cat>[] = breeds.map(
    async (breed: Breed): Promise<Cat> => {
      const { data } = await axios(`${END_POINT}/images/search?limit=20&breed_ids=${breed.id}`);
      return data;
    }
  );
  const cats = await Promise.all(requests);
  return Array.prototype.concat.apply([], cats);
};
