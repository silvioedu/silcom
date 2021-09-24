import { ContatoTipo } from "./contato-tipo.model";

export interface RamoPage {
  content: ContatoTipo[],
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
