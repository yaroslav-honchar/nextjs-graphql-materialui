interface IEntitiesList<Results> {
  page: number
  results: Results[]
  total_pages: number
  total_results: number
}

type EntitiesListPickType<Results, PickKeys extends keyof IEntitiesList<Results>> = Pick<
  IEntitiesList<Results>,
  PickKeys
>

export type { IEntitiesList, EntitiesListPickType }
