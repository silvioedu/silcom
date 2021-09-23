import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoCorInput } from '../model/produto-cor-input.model';
import { ProdutoCorService } from '../service/produto-cor.service';

@Component({
  selector: 'app-produto-cor-create',
  templateUrl: './produto-cor-create.component.html',
  styleUrls: ['./produto-cor-create.component.css']
})
export class ProdutoCorCreateComponent implements OnInit {

  produtoCor: ProdutoCorInput = {
    nome: '',
    sigla: ''
  }

  constructor(private produtoCorService: ProdutoCorService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.produtoCorService.create(this.produtoCor).subscribe(() => {
      this.messageService.showMessage('Cor de produto criado com sucesso')
      this.router.navigate(['cadastros/produtos/cores'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/cores'])
  }

}
