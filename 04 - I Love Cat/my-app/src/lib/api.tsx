import axios from 'axios'

type Breed = {
  id: string
}

type Cat = {
  id: string
  url: string
  width: number
  height: number
  breeds: Array<Breed>
}

const END_POINT = 'https://api.thecatapi.com/v1'

export const getBreedsByKeyword = async (keyword: string): Promise<Breed[]> => {
  const { data } = await axios(`${END_POINT}/breeds/search?q=${keyword}`)
  return data
}

export const getCatsByKeyword = async (keyword: string): Promise<Cat[]> => {
  const breeds: Breed[] = await getBreedsByKeyword(keyword)
  const requests = breeds.map(
    (breed: Breed): Promise<any> =>
      axios(`${END_POINT}/images/search?limit=20&breed_ids=${breed.id}`).then((result) => result.data)
  )
  const cats = await Promise.all(requests)
  return Array.prototype.concat.apply([], cats)
}
