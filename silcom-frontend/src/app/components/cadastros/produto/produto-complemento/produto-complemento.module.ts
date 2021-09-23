import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoComplementoRoutingModule } from './produto-complemento-routing.module';
import { ProdutoComplementoCreateComponent } from './produto-complemento-create/produto-complemento-create.component';
import { ProdutoComplementoReadComponent } from './produto-complemento-read/produto-complemento-read.component';
import { ProdutoComplementoUpdateComponent } from './produto-complemento-update/produto-complemento-update.component';
import { ProdutoComplementoDeleteComponent } from './produto-complemento-delete/produto-complemento-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoComplementoCreateComponent,
    ProdutoComplementoReadComponent,
    ProdutoComplementoUpdateComponent,
    ProdutoComplementoDeleteComponent
  ],
  imports: [
    CommonModule,
    ProdutoComplementoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ProdutoComplementoModule { }
