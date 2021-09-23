import { ProdutoComplemento } from "./produto-complemento.model";

export interface ProdutoTipoPage {
  content: ProdutoComplemento[],
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
