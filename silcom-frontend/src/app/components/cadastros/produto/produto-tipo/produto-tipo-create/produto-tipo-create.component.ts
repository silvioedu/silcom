import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoTipoInput } from '../model/produto-tipo-input.model';
import { ProdutoTipoService } from '../service/produto-tipo.service';

@Component({
  selector: 'app-produto-tipo-create',
  templateUrl: './produto-tipo-create.component.html',
  styleUrls: ['./produto-tipo-create.component.css']
})
export class ProdutoTipoCreateComponent implements OnInit {

  produtoTipo: ProdutoTipoInput = {
    nome: '',
    sigla: ''
  }

  constructor(private produtoTipoService: ProdutoTipoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.produtoTipoService.create(this.produtoTipo).subscribe(() => {
      this.messageService.showMessage('Tipo de produto criado com sucesso')
      this.router.navigate(['cadastros/produtos/tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/tipos'])
  }

}
