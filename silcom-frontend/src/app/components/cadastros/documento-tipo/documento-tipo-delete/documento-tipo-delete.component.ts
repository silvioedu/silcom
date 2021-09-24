import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { DocumentoTipo } from '../model/documento-tipo.model';
import { DocumentoTipoService } from '../service/documento-tipo.service';

@Component({
  selector: 'app-documento-tipo-delete',
  templateUrl: './documento-tipo-delete.component.html',
  styleUrls: ['./documento-tipo-delete.component.css']
})
export class DocumentoTipoDeleteComponent implements OnInit {

  documentoTipo: DocumentoTipo = {
    id: 0,
    nome: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private documentoTipoService: DocumentoTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.documentoTipoService.readById(id).subscribe(documentoTipo => {
      this.documentoTipo = documentoTipo
    })
  }

  delete(): void {
    this.documentoTipoService.delete(this.documentoTipo.id + '').subscribe(() => {
      this.messageService.showMessage("Tipo de documento deletado com sucesso.")
      this.router.navigate(['cadastros/documentos-tipos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/documentos-tipos'])
  }

}
