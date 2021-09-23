import { ProdutoCor } from "./produto-cor.model";

export interface ProdutoCorPage {
  content: ProdutoCor[],
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
