import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoFabricante } from '../model/produto-fabricante.model';
import { ProdutoFabricanteService } from '../service/produto-fabricante.service';

@Component({
  selector: 'app-produto-fabricante-update',
  templateUrl: './produto-fabricante-update.component.html',
  styleUrls: ['./produto-fabricante-update.component.css']
})
export class ProdutoFabricanteUpdateComponent implements OnInit {

  produtoFabricante: ProdutoFabricante = {
    nome: '',
    sigla: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private produtoFabricanteService: ProdutoFabricanteService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.produtoFabricanteService.readById(id).subscribe(produtoFabricante => {
      this.produtoFabricante = produtoFabricante
    })
  }

  update(): void{
    this.produtoFabricanteService.update(this.produtoFabricante).subscribe(() => {
      this.messageService.showMessage("Fabricante de produto atualizado com sucesso.")
      this.router.navigate(['cadastros/produtos/fabricantes'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/fabricantes'])
  }

}
