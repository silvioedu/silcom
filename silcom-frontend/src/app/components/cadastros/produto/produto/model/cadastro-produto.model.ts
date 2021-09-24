import { ProdutoFabricante } from './../../produto-fabricante/model/produto-fabricante.model';
import { ProdutoDetalhe } from './../../produto-detalhe/model/produto-detalhe.model';
import { ProdutoCor } from './../../produto-cor/model/produto-cor.model';
import { ProdutoComplemento } from './../../produto-complemento/model/produto-complemento.model';
import { ProdutoTipo } from '../../produto-tipo/model/produto-tipo.model';

export interface CadastroProduto {
  complementos: ProdutoComplemento[];
  cores: ProdutoCor[];
  detalhes: ProdutoDetalhe[];
  fabricantes: ProdutoFabricante[];
  tipos: ProdutoTipo[];
}
