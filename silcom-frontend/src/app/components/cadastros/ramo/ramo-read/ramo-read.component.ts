import { RamoPage } from './../ramo.model';
import { RamoService } from './../ramo.service';
import { Component, OnInit } from '@angular/core';
import { Ramo } from '../ramo.model';

@Component({
  selector: 'app-ramo-read',
  templateUrl: './ramo-read.component.html',
  styleUrls: ['./ramo-read.component.css']
})
export class RamoReadComponent implements OnInit {

  ramosPage!: RamoPage;
  ramos: Ramo[] = [];
  displayedColumns: string[] = ['id', 'nome', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private ramoService: RamoService) {

  }

  ngOnInit(): void {
    this.ramoService.read().subscribe(ramosPage => {
      this.ramosPage = ramosPage
      this.ramos = ramosPage.content
    })

  }

}
