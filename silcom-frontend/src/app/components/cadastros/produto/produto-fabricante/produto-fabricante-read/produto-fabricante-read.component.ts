import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProdutoFabricante } from '../model/produto-fabricante.model';
import { ProdutoFabricanteService } from '../service/produto-fabricante.service';

@Component({
  selector: 'app-produto-fabricante-read',
  templateUrl: './produto-fabricante-read.component.html',
  styleUrls: ['./produto-fabricante-read.component.css']
})
export class ProdutoFabricanteReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ProdutoFabricante>;

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private produtoFabricanteService: ProdutoFabricanteService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoFabricanteService.read().subscribe(produtoFabricantes => {
      this.dataSource = new MatTableDataSource(produtoFabricantes)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/produtos/fabricantes/create'])
  }

}
