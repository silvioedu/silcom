import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProdutoCor } from '../model/produto-cor.model';
import { ProdutoCorService } from '../service/produto-cor.service';

@Component({
  selector: 'app-produto-cor-read',
  templateUrl: './produto-cor-read.component.html',
  styleUrls: ['./produto-cor-read.component.css']
})
export class ProdutoCorReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ProdutoCor>;

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private produtoCorService: ProdutoCorService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoCorService.read().subscribe(produtoCores => {
      this.dataSource = new MatTableDataSource(produtoCores)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/produtos/cores/create'])
  }

}
