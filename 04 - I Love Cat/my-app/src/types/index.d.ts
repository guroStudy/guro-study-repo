declare type Breed = {
  id: string;
  name: string;
  origin: string;
  description: string;
};

declare type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[];
};

declare type ModalInfoType = {
  isOpen: boolean;
  position: DOMRect;
  cat: Cat;
};
