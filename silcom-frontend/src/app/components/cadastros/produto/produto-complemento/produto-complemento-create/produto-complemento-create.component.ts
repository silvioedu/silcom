import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoComplementoInput } from '../model/produto-complemento-input.model';
import { ProdutoComplementoService } from '../service/produto-complemento.service';

@Component({
  selector: 'app-produto-complemento-create',
  templateUrl: './produto-complemento-create.component.html',
  styleUrls: ['./produto-complemento-create.component.css']
})
export class ProdutoComplementoCreateComponent implements OnInit {

  produtoComplemento: ProdutoComplementoInput = {
    nome: '',
    sigla: ''
  }

  constructor(private produtoComplementoService: ProdutoComplementoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.produtoComplementoService.create(this.produtoComplemento).subscribe(() => {
      this.messageService.showMessage('Complemento de produto criado com sucesso')
      this.router.navigate(['cadastros/produtos/complementos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/complementos'])
  }

}
