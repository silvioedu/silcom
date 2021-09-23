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
    path: 'cadastros/produtos/fabricantes',
    loadChildren: () => import('./components/cadastros/produto/produto-fabricante/produto-fabricante.module').then(m => m.ProdutoFabricanteModule)
  },
  {
    path: 'cadastros/produtos/tipos',
    loadChildren: () => import('./components/cadastros/produto/produto-tipo/produto-tipo.module').then(m => m.ProdutoTipoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
