import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoComplemento } from '../model/produto-complemento.model';
import { ProdutoComplementoService } from '../service/produto-complemento.service';

@Component({
  selector: 'app-produto-complemento-delete',
  templateUrl: './produto-complemento-delete.component.html',
  styleUrls: ['./produto-complemento-delete.component.css']
})
export class ProdutoComplementoDeleteComponent implements OnInit {

  produtoComplemento: ProdutoComplemento = {
    id: 0,
    nome: '',
    sigla: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private produtoComplementoService: ProdutoComplementoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.produtoComplementoService.readById(id).subscribe(produtoComplemento => {
      this.produtoComplemento = produtoComplemento
    })
  }

  delete(): void {
    this.produtoComplementoService.delete(this.produtoComplemento.id + '').subscribe(() => {
      this.messageService.showMessage("Complemento de produto deletado com sucesso.")
      this.router.navigate(['cadastros/produtos/complementos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/produtos/complementos'])
  }
}
