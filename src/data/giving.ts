export interface IGiving {
  Id: number;
  Giving: number;
  BestGift: number;
  BuildingFund: number;
  ChildrensMinistry: number;
  Dance: number;
  EntryDate: string;
  FEBC700: number;
  Firstname: string;
  FlowerOrPlants: number;
  Lastname: string;
  Meralco: number;
  Music: number;
  GiftForPastor: number;
  GiftForBrother: number;
  Others: string;
  Tithe: number;
  Total: number;
  Youth: number;
  Gender: string | null;
}

export interface IOfferingFormState {
  id: number | null;
  giving: number;
  bestGift: number;
  buildingFund: number;
  childrensMinistry: number;
  dance: number;
  fEBC700: number;
  flowerOrPlants: number;
  meralco: number;
  music: number;
  giftForPastor: number;
  giftForBrother: number;
  others: string;
  tithe: number;
  total: number;
  youth: number;
  firstname: string | null;
  lastname: string | null;
  gender: string | null;
}
