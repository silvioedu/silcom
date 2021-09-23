import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoCorRoutingModule } from './produto-cor-routing.module';
import { ProdutoCorCreateComponent } from './produto-cor-create/produto-cor-create.component';
import { ProdutoCorReadComponent } from './produto-cor-read/produto-cor-read.component';
import { ProdutoCorUpdateComponent } from './produto-cor-update/produto-cor-update.component';
import { ProdutoCorDeleteComponent } from './produto-cor-delete/produto-cor-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoCorCreateComponent,
    ProdutoCorReadComponent,
    ProdutoCorUpdateComponent,
    ProdutoCorDeleteComponent
  ],
  imports: [
    CommonModule,
    ProdutoCorRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ProdutoCorModule { }
