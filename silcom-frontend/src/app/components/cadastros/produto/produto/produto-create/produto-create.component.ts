import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';

import { ProdutoInput } from '../model/produto-input.model';
import { ProdutoService } from '../service/produto.service';
import { CadastroProduto } from './../model/cadastro-produto.model';
import { CadastrosProdutoService } from './../service/cadastros-produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: ProdutoInput = {
    tipoId: 0,
    corId: 0,
    detalheId: 0,
    complementoId: 0,
    fabricanteId:0,
    folder: '',
    preco: 0.0
  }

  cadastro: CadastroProduto = {
    complementos: [],
    cores: [],
    detalhes: [],
    tipos: [],
    fabricantes: []
  }

  selected = {
    complemento: 0,
    cor: 0,
    detalhe: 0,
    fabricante: 0,
    tipo: 0,
    folder: '',
    preco: ''
  }

  constructor(private produtoService: ProdutoService,
    private cadastroService: CadastrosProdutoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(cadastro => {
      this.cadastro = cadastro
    })
  }

  create(): void{
    this.produto.complementoId = this.selected.complemento
    this.produto.corId = this.selected.cor
    this.produto.detalheId = this.selected.detalhe
    this.produto.fabricanteId = this.selected.fabricante
    this.produto.tipoId = this.selected.tipo
    this.produto.folder = this.selected.folder
    this.produto.preco = parseFloat(this.selected.preco.replace(",",".").replace(/R\$/gi,''))
    this.produtoService.create(this.produto).subscribe(() => {
      this.messageService.showMessage('Produto criado com sucesso')
      this.router.navigate(['cadastros/produtos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos'])
  }

}
