import { RamoCreateComponent } from './ramo-create/ramo-create.component';
import { RamoUpdateComponent } from './ramo-update/ramo-update.component';
import { RamoDeleteComponent } from './ramo-delete/ramo-delete.component';
import { RamoReadComponent } from './ramo-read/ramo-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RamoReadComponent
  },
  {
    path: 'create',
    component: RamoCreateComponent
  },
  {
    path: 'delete/:id',
    component: RamoDeleteComponent
  },
  {
    path: 'update/:id',
    component: RamoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamoRoutingModule { }
