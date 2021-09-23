import { ProdutoComplemento } from "./produto-complemento.model";

export interface ProdutoComplementoPage {
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
