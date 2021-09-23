import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoDetalhe } from '../model/produto-detalhe.model';
import { ProdutoDetalheService } from '../service/produto-detalhe.service';

@Component({
  selector: 'app-produto-detalhe-delete',
  templateUrl: './produto-detalhe-delete.component.html',
  styleUrls: ['./produto-detalhe-delete.component.css']
})
export class ProdutoDetalheDeleteComponent implements OnInit {

  produtoDetalhe: ProdutoDetalhe = {
    id: 0,
    nome: '',
    sigla: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private produtoDetalheService: ProdutoDetalheService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.produtoDetalheService.readById(id).subscribe(produtoDetalhe => {
      this.produtoDetalhe = produtoDetalhe
    })
  }

  delete(): void {
    this.produtoDetalheService.delete(this.produtoDetalhe.id + '').subscribe(() => {
      this.messageService.showMessage("Detalhe de produto deletado com sucesso.")
      this.router.navigate(['cadastros/produtos/detalhes'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/produtos/detalhes'])
  }

}
