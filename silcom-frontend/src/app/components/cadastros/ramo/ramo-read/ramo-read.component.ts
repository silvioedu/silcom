import { Router } from '@angular/router';
import { RamoService } from '../service/ramo.service';
import { Component, OnInit } from '@angular/core';
import { Ramo } from '../model/ramo.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ramo-read',
  templateUrl: './ramo-read.component.html',
  styleUrls: ['./ramo-read.component.css']
})
export class RamoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<Ramo>;

  displayedColumns: string[] = ['id', 'nome', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private ramoService: RamoService,
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
    this.router.navigate(['cadastros/ramos/create'])
  }
}
