import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamoRoutingModule } from './ramo-routing.module';
import { RamoCreateComponent } from './ramo-create/ramo-create.component';
import { RamoReadComponent } from './ramo-read/ramo-read.component';
import { RamoDeleteComponent } from './ramo-delete/ramo-delete.component';
import { RamoUpdateComponent } from './ramo-update/ramo-update.component';


@NgModule({
  declarations: [
    RamoCreateComponent,
    RamoReadComponent,
    RamoDeleteComponent,
    RamoUpdateComponent
  ],
  imports: [
    CommonModule,
    RamoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class RamoModule { }
