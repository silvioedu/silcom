import { ProdutoFabricante } from "./produto-fabricante.model";

export interface ProdutoTipoPage {
  content: ProdutoFabricante[],
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
