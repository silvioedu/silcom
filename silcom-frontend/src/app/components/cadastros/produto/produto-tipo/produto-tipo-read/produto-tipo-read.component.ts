import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProdutoTipo } from '../model/produto-tipo.model';
import { ProdutoTipoService } from '../service/produto-tipo.service';

@Component({
  selector: 'app-produto-tipo-read',
  templateUrl: './produto-tipo-read.component.html',
  styleUrls: ['./produto-tipo-read.component.css']
})
export class ProdutoTipoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ProdutoTipo>;

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private produtoTipoService: ProdutoTipoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoTipoService.read().subscribe(produtoTipos => {
      this.dataSource = new MatTableDataSource(produtoTipos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/produtos/tipos/create'])
  }

}
