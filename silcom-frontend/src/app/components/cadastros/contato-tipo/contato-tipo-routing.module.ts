import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoTipoCreateComponent } from './contato-tipo-create/contato-tipo-create.component';
import { ContatoTipoDeleteComponent } from './contato-tipo-delete/contato-tipo-delete.component';
import { ContatoTipoReadComponent } from './contato-tipo-read/contato-tipo-read.component';
import { ContatoTipoUpdateComponent } from './contato-tipo-update/contato-tipo-update.component';

const routes: Routes = [
  {
    path: '',
    component: ContatoTipoReadComponent
  },
  {
    path: 'create',
    component: ContatoTipoCreateComponent
  },
  {
    path: 'delete/:id',
    component: ContatoTipoDeleteComponent
  },
  {
    path: 'update/:id',
    component: ContatoTipoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoTipoRoutingModule { }
