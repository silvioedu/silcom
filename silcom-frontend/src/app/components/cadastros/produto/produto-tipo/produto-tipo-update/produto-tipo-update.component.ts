import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoTipo } from '../model/produto-tipo.model';
import { ProdutoTipoService } from '../service/produto-tipo.service';

@Component({
  selector: 'app-produto-tipo-update',
  templateUrl: './produto-tipo-update.component.html',
  styleUrls: ['./produto-tipo-update.component.css']
})
export class ProdutoTipoUpdateComponent implements OnInit {

  produtoTipo: ProdutoTipo = {
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
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.produtoTipoService.readById(id).subscribe(produtoTipo => {
      this.produtoTipo = produtoTipo
    })
  }

  update(): void{
    this.produtoTipoService.update(this.produtoTipo).subscribe(() => {
      this.messageService.showMessage("Tipo de produto atualizado com sucesso.")
      this.router.navigate(['cadastros/produtos/tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/tipos'])
  }

}
