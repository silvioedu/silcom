import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoCor } from '../model/produto-cor.model';
import { ProdutoCorService } from '../service/produto-cor.service';

@Component({
  selector: 'app-produto-cor-delete',
  templateUrl: './produto-cor-delete.component.html',
  styleUrls: ['./produto-cor-delete.component.css']
})
export class ProdutoCorDeleteComponent implements OnInit {

  produtoCor: ProdutoCor = {
    id: 0,
    nome: '',
    sigla: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private produtoCorService: ProdutoCorService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.produtoCorService.readById(id).subscribe(produtoCor => {
      this.produtoCor = produtoCor
    })
  }

  delete(): void {
    this.produtoCorService.delete(this.produtoCor.id + '').subscribe(() => {
      this.messageService.showMessage("Cor de produto deletado com sucesso.")
      this.router.navigate(['cadastros/produtos/cores'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/produtos/cores'])
  }

}
