import { ProdutoDetalhe } from "./produto-detalhe.model";

export interface ProdutoDetalhePage {
  content: ProdutoDetalhe[],
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
