import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ContatoTipo } from '../model/contato-tipo.model';
import { ContatoTipoService } from '../service/contato-tipo.service';

@Component({
  selector: 'app-contato-tipo-read',
  templateUrl: './contato-tipo-read.component.html',
  styleUrls: ['./contato-tipo-read.component.css']
})
export class ContatoTipoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ContatoTipo>;

  displayedColumns: string[] = ['id', 'nome', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private contatoTipoService: ContatoTipoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.contatoTipoService.read().subscribe(contatoTipos => {
      this.dataSource = new MatTableDataSource(contatoTipos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/contatos-tipos/create'])
  }

}
