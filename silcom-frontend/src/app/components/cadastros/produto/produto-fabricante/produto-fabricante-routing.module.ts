import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFabricanteCreateComponent } from './produto-fabricante-create/produto-fabricante-create.component';
import { ProdutoFabricanteDeleteComponent } from './produto-fabricante-delete/produto-fabricante-delete.component';
import { ProdutoFabricanteReadComponent } from './produto-fabricante-read/produto-fabricante-read.component';
import { ProdutoFabricanteUpdateComponent } from './produto-fabricante-update/produto-fabricante-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoFabricanteReadComponent
  },
  {
    path: 'create',
    component: ProdutoFabricanteCreateComponent
  },
  {
    path: 'delete/:id',
    component: ProdutoFabricanteDeleteComponent
  },
  {
    path: 'update/:id',
    component: ProdutoFabricanteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoFabricanteRoutingModule { }
