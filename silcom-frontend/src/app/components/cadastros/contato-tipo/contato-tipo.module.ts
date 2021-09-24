import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoTipoRoutingModule } from './contato-tipo-routing.module';
import { ContatoTipoCreateComponent } from './contato-tipo-create/contato-tipo-create.component';
import { ContatoTipoReadComponent } from './contato-tipo-read/contato-tipo-read.component';
import { ContatoTipoUpdateComponent } from './contato-tipo-update/contato-tipo-update.component';
import { ContatoTipoDeleteComponent } from './contato-tipo-delete/contato-tipo-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContatoTipoCreateComponent,
    ContatoTipoReadComponent,
    ContatoTipoUpdateComponent,
    ContatoTipoDeleteComponent
  ],
  imports: [
    CommonModule,
    ContatoTipoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ContatoTipoModule { }
