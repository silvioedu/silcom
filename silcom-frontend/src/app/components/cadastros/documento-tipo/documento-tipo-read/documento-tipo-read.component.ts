import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DocumentoTipo } from '../model/documento-tipo.model';
import { DocumentoTipoService } from '../service/documento-tipo.service';

@Component({
  selector: 'app-documento-tipo-read',
  templateUrl: './documento-tipo-read.component.html',
  styleUrls: ['./documento-tipo-read.component.css']
})
export class DocumentoTipoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<DocumentoTipo>;

  displayedColumns: string[] = ['id', 'nome', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private ramoService: DocumentoTipoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.ramoService.read().subscribe(ramos => {
      this.dataSource = new MatTableDataSource(ramos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/documentos-tipos/create'])
  }

}
