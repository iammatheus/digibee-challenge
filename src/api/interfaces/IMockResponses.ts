export interface IItemsMockResponses {
  id: number
  name: string
  date: string
}

export interface IMockResponses {
  id: number
  name: string
  icon: string
  items: IItemsMockResponses[]
}
