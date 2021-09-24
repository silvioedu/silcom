import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoReadComponent } from './produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './produto-delete/produto-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class ProdutoModule { }
