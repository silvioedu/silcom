import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { CadastroProduto } from '../model/cadastro-produto.model';
import { CadastrosProdutoService } from '../service/cadastros-produto.service';

import { ProdutoService } from '../service/produto.service';
import { ProdutoId } from './../model/produto-id.model';
import { ProdutoInput } from './../model/produto-input.model';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  produtoId: ProdutoId = {
    id: 0,
    tipoId: 0,
    corId: 0,
    detalheId: 0,
    complementoId: 0,
    fabricanteId:0,
    codigo: '',
    folder: '',
    preco: 0.0,
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

  cadastro: CadastroProduto = {
    complementos: [],
    cores: [],
    detalhes: [],
    tipos: [],
    fabricantes: []
  }

  constructor(private produtoService: ProdutoService,
    private cadastroService: CadastrosProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')  as string

    this.produtoService.readIdById(id).subscribe(produtoId => {
      this.produtoId = produtoId
      this.selected.complemento = this.produtoId.complementoId
      this.selected.cor = this.produtoId.corId
      this.selected.detalhe = this.produtoId.detalheId
      this.selected.fabricante = this.produtoId.fabricanteId
      this.selected.tipo = this.produtoId.tipoId
      this.selected.preco = `R$ ${this.produtoId.preco.toFixed(2).toString().replace(".",",")}`
    })

    this.cadastroService.read().subscribe(cadastro => {
      this.cadastro = cadastro
    })

  }

  update(): void{
    const produtoInput: ProdutoInput = {
      complementoId: this.selected.complemento,
      corId: this.selected.cor,
      detalheId: this.selected.detalhe,
      fabricanteId: this.selected.fabricante,
      tipoId: this.selected.tipo,
      folder: this.selected.folder,
      preco: parseFloat(this.selected.preco.replace(",",".").replace(/R\$/gi,''))
    }
    console.log(produtoInput)

    this.produtoService.update(this.produtoId.id, produtoInput).subscribe(() => {
      this.messageService.showMessage("Produto atualizado com sucesso.")
      this.router.navigate(['cadastros/produtos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos'])
  }

}
