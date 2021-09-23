import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComplementoCreateComponent } from './produto-complemento-create/produto-complemento-create.component';
import { ProdutoComplementoDeleteComponent } from './produto-complemento-delete/produto-complemento-delete.component';
import { ProdutoComplementoReadComponent } from './produto-complemento-read/produto-complemento-read.component';
import { ProdutoComplementoUpdateComponent } from './produto-complemento-update/produto-complemento-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoComplementoReadComponent
  },
  {
    path: 'create',
    component: ProdutoComplementoCreateComponent
  },
  {
    path: 'delete/:id',
    component: ProdutoComplementoDeleteComponent
  },
  {
    path: 'update/:id',
    component: ProdutoComplementoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoComplementoRoutingModule { }
