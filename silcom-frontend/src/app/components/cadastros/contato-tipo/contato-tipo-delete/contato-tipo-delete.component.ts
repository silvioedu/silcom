import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ContatoTipo } from '../model/contato-tipo.model';
import { ContatoTipoService } from '../service/contato-tipo.service';

@Component({
  selector: 'app-contato-tipo-delete',
  templateUrl: './contato-tipo-delete.component.html',
  styleUrls: ['./contato-tipo-delete.component.css']
})
export class ContatoTipoDeleteComponent implements OnInit {

  contatoTipo: ContatoTipo = {
    id: 0,
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
    const id = this.route.snapshot.paramMap.get('id') as string
    this.contatoTipoService.readById(id).subscribe(contatoTipo => {
      this.contatoTipo = contatoTipo
    })
  }

  delete(): void {
    this.contatoTipoService.delete(this.contatoTipo.id + '').subscribe(() => {
      this.messageService.showMessage("Tipo de contato deletado com sucesso.")
      this.router.navigate(['cadastros/contatos-tipos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/contatos-tipos'])
  }

}
