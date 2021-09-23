import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoFabricanteRoutingModule } from './produto-fabricante-routing.module';
import { ProdutoFabricanteCreateComponent } from './produto-fabricante-create/produto-fabricante-create.component';
import { ProdutoFabricanteReadComponent } from './produto-fabricante-read/produto-fabricante-read.component';
import { ProdutoFabricanteUpdateComponent } from './produto-fabricante-update/produto-fabricante-update.component';
import { ProdutoFabricanteDeleteComponent } from './produto-fabricante-delete/produto-fabricante-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoFabricanteCreateComponent,
    ProdutoFabricanteReadComponent,
    ProdutoFabricanteUpdateComponent,
    ProdutoFabricanteDeleteComponent
  ],
  imports: [
    CommonModule,
    ProdutoFabricanteRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ProdutoFabricanteModule { }
