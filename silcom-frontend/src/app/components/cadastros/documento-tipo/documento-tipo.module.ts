import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoTipoRoutingModule } from './documento-tipo-routing.module';
import { DocumentoTipoCreateComponent } from './documento-tipo-create/documento-tipo-create.component';
import { DocumentoTipoReadComponent } from './documento-tipo-read/documento-tipo-read.component';
import { DocumentoTipoUpdateComponent } from './documento-tipo-update/documento-tipo-update.component';
import { DocumentoTipoDeleteComponent } from './documento-tipo-delete/documento-tipo-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DocumentoTipoCreateComponent,
    DocumentoTipoReadComponent,
    DocumentoTipoUpdateComponent,
    DocumentoTipoDeleteComponent
  ],
  imports: [
    CommonModule,
    DocumentoTipoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class DocumentoTipoModule { }
