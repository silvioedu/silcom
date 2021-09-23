import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCorCreateComponent } from './produto-cor-create/produto-cor-create.component';
import { ProdutoCorDeleteComponent } from './produto-cor-delete/produto-cor-delete.component';
import { ProdutoCorReadComponent } from './produto-cor-read/produto-cor-read.component';
import { ProdutoCorUpdateComponent } from './produto-cor-update/produto-cor-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCorReadComponent
  },
  {
    path: 'create',
    component: ProdutoCorCreateComponent
  },
  {
    path: 'delete/:id',
    component: ProdutoCorDeleteComponent
  },
  {
    path: 'update/:id',
    component: ProdutoCorUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoCorRoutingModule { }
