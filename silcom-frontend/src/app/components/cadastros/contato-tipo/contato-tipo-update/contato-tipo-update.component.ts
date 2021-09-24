import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ContatoTipo } from '../model/contato-tipo.model';
import { ContatoTipoService } from '../service/contato-tipo.service';

@Component({
  selector: 'app-contato-tipo-update',
  templateUrl: './contato-tipo-update.component.html',
  styleUrls: ['./contato-tipo-update.component.css']
})
export class ContatoTipoUpdateComponent implements OnInit {

  contatoTipo: ContatoTipo = {
    nome: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private contatoTipoService: ContatoTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.contatoTipoService.readById(id).subscribe(contatoTipo => {
      this.contatoTipo = contatoTipo
    })
  }

  update(): void{
    this.contatoTipoService.update(this.contatoTipo).subscribe(() => {
      this.messageService.showMessage("Tipo de contato atualizado com sucesso.")
      this.router.navigate(['cadastros/contatos-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/contatos-tipos'])
  }

}
