import { RamoService } from '../service/ramo.service';
import { Component, OnInit } from '@angular/core';
import { Ramo } from '../model/ramo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';

@Component({
  selector: 'app-ramo-delete',
  templateUrl: './ramo-delete.component.html',
  styleUrls: ['./ramo-delete.component.css']
})
export class RamoDeleteComponent implements OnInit {

  ramo: Ramo = {
    id: 0,
    nome: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private ramoService: RamoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.ramoService.readById(id).subscribe(ramo => {
      this.ramo = ramo
    })
  }

  delete(): void {
    this.ramoService.delete(this.ramo.id + '').subscribe(() => {
      this.messageService.showMessage("Ramo deletado com sucesso.")
      this.router.navigate(['cadastros/ramos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/ramos'])
  }
}
