export interface IItemsMockResponses {
  id: string
  name: string
  date: string
  quantity?: number
}

export interface IMockResponses {
  id: string
  name: string
  icon: string
  items: IItemsMockResponses[]
}
