import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProdutoComplemento } from '../model/produto-complemento.model';
import { ProdutoComplementoService } from '../service/produto-complemento.service';

@Component({
  selector: 'app-produto-complemento-read',
  templateUrl: './produto-complemento-read.component.html',
  styleUrls: ['./produto-complemento-read.component.css']
})
export class ProdutoComplementoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ProdutoComplemento>;

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private produtoComplementoService: ProdutoComplementoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoComplementoService.read().subscribe(produtoComplementoes => {
      this.dataSource = new MatTableDataSource(produtoComplementoes)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/produtos/complementos/create'])
  }

}
