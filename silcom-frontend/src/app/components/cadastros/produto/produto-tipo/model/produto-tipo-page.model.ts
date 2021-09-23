import { ProdutoTipo } from "./produto-tipo.model";

export interface ProdutoTipoPage {
  content: ProdutoTipo[],
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
