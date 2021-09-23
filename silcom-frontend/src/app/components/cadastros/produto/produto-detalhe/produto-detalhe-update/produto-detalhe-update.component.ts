import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoDetalhe } from '../model/produto-detalhe.model';
import { ProdutoDetalheService } from '../service/produto-detalhe.service';

@Component({
  selector: 'app-produto-detalhe-update',
  templateUrl: './produto-detalhe-update.component.html',
  styleUrls: ['./produto-detalhe-update.component.css']
})
export class ProdutoDetalheUpdateComponent implements OnInit {

  produtoDetalhe: ProdutoDetalhe = {
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
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.produtoDetalheService.readById(id).subscribe(produtoDetalhe => {
      this.produtoDetalhe = produtoDetalhe
    })
  }

  update(): void{
    this.produtoDetalheService.update(this.produtoDetalhe).subscribe(() => {
      this.messageService.showMessage("Detalhe de produto atualizado com sucesso.")
      this.router.navigate(['cadastros/produtos/detalhes'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/detalhes'])
  }

}
