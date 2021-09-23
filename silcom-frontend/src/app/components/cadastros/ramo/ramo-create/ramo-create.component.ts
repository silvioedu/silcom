import { RamoInput } from './../model/ramo-input.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RamoService } from '../service/ramo.service';
import { FormsModule }   from '@angular/forms';
import { MessageService } from 'src/app/components/shared/service/message.service';

@Component({
  selector: 'app-ramo-create',
  templateUrl: './ramo-create.component.html',
  styleUrls: ['./ramo-create.component.css']
})
export class RamoCreateComponent implements OnInit {

  ramo: RamoInput = {
    nome: ''
  }

  constructor(private ramoService: RamoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.ramoService.create(this.ramo).subscribe(() => {
      this.messageService.showMessage('Ramo criado com sucesso')
      this.router.navigate(['cadastros/ramos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/ramos'])
  }

}
