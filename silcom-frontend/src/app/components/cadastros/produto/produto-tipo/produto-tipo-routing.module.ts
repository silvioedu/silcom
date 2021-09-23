import { ProdutoTipoReadComponent } from './produto-tipo-read/produto-tipo-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoTipoCreateComponent } from './produto-tipo-create/produto-tipo-create.component';
import { ProdutoTipoDeleteComponent } from './produto-tipo-delete/produto-tipo-delete.component';
import { ProdutoTipoUpdateComponent } from './produto-tipo-update/produto-tipo-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoTipoReadComponent
  },
  {
    path: 'create',
    component: ProdutoTipoCreateComponent
  },
  {
    path: 'delete/:id',
    component: ProdutoTipoDeleteComponent
  },
  {
    path: 'update/:id',
    component: ProdutoTipoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoTipoRoutingModule { }
