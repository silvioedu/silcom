import { Component, OnInit } from '@angular/core';
import { ProdutoTipoService } from '../service/produto-tipo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoTipo } from '../model/produto-tipo.model';

@Component({
  selector: 'app-produto-tipo-delete',
  templateUrl: './produto-tipo-delete.component.html',
  styleUrls: ['./produto-tipo-delete.component.css']
})
export class ProdutoTipoDeleteComponent implements OnInit {

  produtoTipo: ProdutoTipo = {
    id: 0,
    nome: '',
    sigla: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private produtoTipoService: ProdutoTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.produtoTipoService.readById(id).subscribe(produtoTipo => {
      this.produtoTipo = produtoTipo
    })
  }

  delete(): void {
    this.produtoTipoService.delete(this.produtoTipo.id + '').subscribe(() => {
      this.messageService.showMessage("Tipo de produto deletado com sucesso.")
      this.router.navigate(['cadastros/produtos/tipos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/produtos/tipos'])
  }

}
