import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoDetalheInput } from '../model/produto-detalhe-input.model';
import { ProdutoDetalheService } from '../service/produto-detalhe.service';

@Component({
  selector: 'app-produto-detalhe-create',
  templateUrl: './produto-detalhe-create.component.html',
  styleUrls: ['./produto-detalhe-create.component.css']
})
export class ProdutoDetalheCreateComponent implements OnInit {

  produtoDetalhe: ProdutoDetalheInput = {
    nome: '',
    sigla: ''
  }

  constructor(private produtoDetalheService: ProdutoDetalheService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.produtoDetalheService.create(this.produtoDetalhe).subscribe(() => {
      this.messageService.showMessage('Detalhe de produto criado com sucesso')
      this.router.navigate(['cadastros/produtos/detalhes'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/detalhes'])
  }

}
