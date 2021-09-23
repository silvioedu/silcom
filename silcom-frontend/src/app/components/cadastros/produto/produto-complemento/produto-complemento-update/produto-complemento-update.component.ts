import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoComplemento } from '../model/produto-complemento.model';
import { ProdutoComplementoService } from '../service/produto-complemento.service';

@Component({
  selector: 'app-produto-complemento-update',
  templateUrl: './produto-complemento-update.component.html',
  styleUrls: ['./produto-complemento-update.component.css']
})
export class ProdutoComplementoUpdateComponent implements OnInit {

  produtoComplemento: ProdutoComplemento = {
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
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.produtoComplementoService.readById(id).subscribe(produtoComplemento => {
      this.produtoComplemento = produtoComplemento
    })
  }

  update(): void{
    this.produtoComplementoService.update(this.produtoComplemento).subscribe(() => {
      this.messageService.showMessage("Complemento de produto atualizado com sucesso.")
      this.router.navigate(['cadastros/produtos/complementos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/complementos'])
  }

}
