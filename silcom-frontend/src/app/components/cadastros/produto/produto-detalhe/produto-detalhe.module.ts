import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoDetalheRoutingModule } from './produto-detalhe-routing.module';
import { ProdutoDetalheCreateComponent } from './produto-detalhe-create/produto-detalhe-create.component';
import { ProdutoDetalheReadComponent } from './produto-detalhe-read/produto-detalhe-read.component';
import { ProdutoDetalheUpdateComponent } from './produto-detalhe-update/produto-detalhe-update.component';
import { ProdutoDetalheDeleteComponent } from './produto-detalhe-delete/produto-detalhe-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoDetalheCreateComponent,
    ProdutoDetalheReadComponent,
    ProdutoDetalheUpdateComponent,
    ProdutoDetalheDeleteComponent
  ],
  imports: [
    CommonModule,
    ProdutoDetalheRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ProdutoDetalheModule { }
