import { ProdutoResumo } from './../model/produto-resumo.model';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: ProdutoResumo = {
    id: 0,
    tipoNome: '',
    corNome: '',
    detalheNome: '',
    complementoNome: '',
    fabricanteNome: '',
    codigo: '',
    folder: '',
    preco: 0,
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.produtoService.readById(id).subscribe(produto => {
      this.produto = produto
    })
  }

  delete(): void {
    this.produtoService.delete(this.produto.id + '').subscribe(() => {
      this.messageService.showMessage("Produto deletado com sucesso.")
      this.router.navigate(['cadastros/produtos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/produtos'])
  }

}
