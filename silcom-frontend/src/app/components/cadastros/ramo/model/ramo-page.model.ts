import { Ramo } from "./ramo.model";

export interface RamoPage {
  content: Ramo[],
  pageable: any,
  totalElements: number,
  totalPages: number,
  last: boolean,
  numberOfElements: number,
  size: number,
  number: number,
  sort: any,
  first: boolean,
  empty: boolean
}
