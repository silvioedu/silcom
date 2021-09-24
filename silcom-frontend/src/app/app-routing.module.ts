import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'cadastros/ramos',
    loadChildren: () => import('./components/cadastros/ramo/ramo.module').then(m => m.RamoModule)
  },
  {
    path: 'cadastros/produtos',
    loadChildren: () => import('./components/cadastros/produto/produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: 'cadastros/produtos/complementos',
    loadChildren: () => import('./components/cadastros/produto/produto-complemento/produto-complemento.module').then(m => m.ProdutoComplementoModule)
  },
  {
    path: 'cadastros/produtos/cores',
    loadChildren: () => import('./components/cadastros/produto/produto-cor/produto-cor.module').then(m => m.ProdutoCorModule)
  },
  {
    path: 'cadastros/produtos/detalhes',
    loadChildren: () => import('./components/cadastros/produto/produto-detalhe/produto-detalhe.module').then(m => m.ProdutoDetalheModule)
  },
  {
    path: 'cadastros/produtos/fabricantes',
    loadChildren: () => import('./components/cadastros/produto/produto-fabricante/produto-fabricante.module').then(m => m.ProdutoFabricanteModule)
  },
  {
    path: 'cadastros/produtos/tipos',
    loadChildren: () => import('./components/cadastros/produto/produto-tipo/produto-tipo.module').then(m => m.ProdutoTipoModule)
  },
  {
    path: 'cadastros/contatos-tipos',
    loadChildren: () => import('./components/cadastros/contato-tipo/contato-tipo.module').then(m => m.ContatoTipoModule)
  },
  {
    path: 'cadastros/documentos-tipos',
    loadChildren: () => import('./components/cadastros/documento-tipo/documento-tipo.module').then(m => m.DocumentoTipoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
