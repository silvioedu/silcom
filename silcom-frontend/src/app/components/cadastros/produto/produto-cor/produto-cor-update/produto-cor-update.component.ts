import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoCor } from '../model/produto-cor.model';
import { ProdutoCorService } from '../service/produto-cor.service';

@Component({
  selector: 'app-produto-cor-update',
  templateUrl: './produto-cor-update.component.html',
  styleUrls: ['./produto-cor-update.component.css']
})
export class ProdutoCorUpdateComponent implements OnInit {

  produtoCor: ProdutoCor = {
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
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.produtoCorService.readById(id).subscribe(produtoCor => {
      this.produtoCor = produtoCor
    })
  }

  update(): void{
    this.produtoCorService.update(this.produtoCor).subscribe(() => {
      this.messageService.showMessage("Cor de produto atualizado com sucesso.")
      this.router.navigate(['cadastros/produtos/cores'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/cores'])
  }

}
