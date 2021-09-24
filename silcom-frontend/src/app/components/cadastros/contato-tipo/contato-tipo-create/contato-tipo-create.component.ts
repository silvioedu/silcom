import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ContatoTipoInput } from '../model/contato-tipo-input.model';
import { ContatoTipoService } from '../service/contato-tipo.service';

@Component({
  selector: 'app-contato-tipo-create',
  templateUrl: './contato-tipo-create.component.html',
  styleUrls: ['./contato-tipo-create.component.css']
})
export class ContatoTipoCreateComponent implements OnInit {

  contatoTipo: ContatoTipoInput = {
    nome: ''
  }

  constructor(private contatoTipoService: ContatoTipoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.contatoTipoService.create(this.contatoTipo).subscribe(() => {
      this.messageService.showMessage('Tipo de contato criado com sucesso')
      this.router.navigate(['cadastros/contatos-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/contatos-tipos'])
  }

}
