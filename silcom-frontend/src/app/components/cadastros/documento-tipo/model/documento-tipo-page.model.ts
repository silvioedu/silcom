import { DocumentoTipo } from "./documento-tipo.model";

export interface RamoPage {
  content: DocumentoTipo[],
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
