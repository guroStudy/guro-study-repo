export interface Breed {
  id: string
}

export type Cat = {
  id: string
  url: string
  width: number
  height: number
  breeds: Array<Breed>
}
