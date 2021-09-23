import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetalheCreateComponent } from './produto-detalhe-create/produto-detalhe-create.component';
import { ProdutoDetalheDeleteComponent } from './produto-detalhe-delete/produto-detalhe-delete.component';
import { ProdutoDetalheReadComponent } from './produto-detalhe-read/produto-detalhe-read.component';
import { ProdutoDetalheUpdateComponent } from './produto-detalhe-update/produto-detalhe-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoDetalheReadComponent
  },
  {
    path: 'create',
    component: ProdutoDetalheCreateComponent
  },
  {
    path: 'delete/:id',
    component: ProdutoDetalheDeleteComponent
  },
  {
    path: 'update/:id',
    component: ProdutoDetalheUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoDetalheRoutingModule { }
