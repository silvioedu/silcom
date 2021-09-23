import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProdutoDetalhe } from '../model/produto-detalhe.model';
import { ProdutoDetalheService } from '../service/produto-detalhe.service';

@Component({
  selector: 'app-produto-detalhe-read',
  templateUrl: './produto-detalhe-read.component.html',
  styleUrls: ['./produto-detalhe-read.component.css']
})
export class ProdutoDetalheReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ProdutoDetalhe>;

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private produtoDetalheService: ProdutoDetalheService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoDetalheService.read().subscribe(produtoDetalhes => {
      this.dataSource = new MatTableDataSource(produtoDetalhes)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/produtos/detalhes/create'])
  }

}
