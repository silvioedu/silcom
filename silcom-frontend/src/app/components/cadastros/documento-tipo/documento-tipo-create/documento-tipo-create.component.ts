import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { DocumentoTipoInput } from '../model/documento-tipo-input.model';
import { DocumentoTipoService } from '../service/documento-tipo.service';

@Component({
  selector: 'app-documento-tipo-create',
  templateUrl: './documento-tipo-create.component.html',
  styleUrls: ['./documento-tipo-create.component.css']
})
export class DocumentoTipoCreateComponent implements OnInit {

  documentoTipo: DocumentoTipoInput = {
    nome: ''
  }

  constructor(private documentoTipoService: DocumentoTipoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.documentoTipoService.create(this.documentoTipo).subscribe(() => {
      this.messageService.showMessage('Tipo de documento criado com sucesso')
      this.router.navigate(['cadastros/documentos-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/documentos-tipos'])
  }

}
