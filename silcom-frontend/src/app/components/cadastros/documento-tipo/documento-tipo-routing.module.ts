import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentoTipoCreateComponent } from './documento-tipo-create/documento-tipo-create.component';
import { DocumentoTipoDeleteComponent } from './documento-tipo-delete/documento-tipo-delete.component';
import { DocumentoTipoReadComponent } from './documento-tipo-read/documento-tipo-read.component';
import { DocumentoTipoUpdateComponent } from './documento-tipo-update/documento-tipo-update.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentoTipoReadComponent
  },
  {
    path: 'create',
    component: DocumentoTipoCreateComponent
  },
  {
    path: 'delete/:id',
    component: DocumentoTipoDeleteComponent
  },
  {
    path: 'update/:id',
    component: DocumentoTipoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoTipoRoutingModule { }
