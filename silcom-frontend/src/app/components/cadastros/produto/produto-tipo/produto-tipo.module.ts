import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoTipoRoutingModule } from './produto-tipo-routing.module';
import { ProdutoTipoCreateComponent } from './produto-tipo-create/produto-tipo-create.component';
import { ProdutoTipoReadComponent } from './produto-tipo-read/produto-tipo-read.component';
import { ProdutoTipoUpdateComponent } from './produto-tipo-update/produto-tipo-update.component';
import { ProdutoTipoDeleteComponent } from './produto-tipo-delete/produto-tipo-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoTipoCreateComponent,
    ProdutoTipoReadComponent,
    ProdutoTipoUpdateComponent,
    ProdutoTipoDeleteComponent
  ],
  imports: [
    CommonModule,
    ProdutoTipoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ProdutoTipoModule { }
