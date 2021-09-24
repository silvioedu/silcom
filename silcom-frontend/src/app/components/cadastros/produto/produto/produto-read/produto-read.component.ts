import { ProdutoResumo } from './../model/produto-resumo.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ProdutoResumo>;

  displayedColumns: string[] = ['id', 'tipoNome', 'corNome', 'detalheNome', 'complementoNome', 'fabricanteNome', 'codigo', 'folder', 'preco', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private produtoService: ProdutoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.dataSource = new MatTableDataSource(produtos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/produtos/create'])
  }

}
