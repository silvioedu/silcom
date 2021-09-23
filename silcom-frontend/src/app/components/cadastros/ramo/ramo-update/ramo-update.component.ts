import { Ramo } from './../model/ramo.model';
import { Component, OnInit } from '@angular/core';
import { RamoService } from '../service/ramo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/message.service';

@Component({
  selector: 'app-ramo-update',
  templateUrl: './ramo-update.component.html',
  styleUrls: ['./ramo-update.component.css']
})
export class RamoUpdateComponent implements OnInit {

  ramo: Ramo = {
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
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.ramoService.readById(id).subscribe(ramo => {
      this.ramo = ramo
    })
  }

  updateRamo(): void{
    this.ramoService.update(this.ramo).subscribe(() => {
      this.messageService.showMessage("Ramo atualizado com sucesso.")
      this.router.navigate(['/ramos'])
    })
  }

  cancel(): void{
    this.router.navigate(['/ramos'])
  }

}
