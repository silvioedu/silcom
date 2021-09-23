import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ProdutoFabricante } from '../model/produto-fabricante.model';
import { ProdutoFabricanteService } from '../service/produto-fabricante.service';

@Component({
  selector: 'app-produto-fabricante-delete',
  templateUrl: './produto-fabricante-delete.component.html',
  styleUrls: ['./produto-fabricante-delete.component.css']
})
export class ProdutoFabricanteDeleteComponent implements OnInit {

  produtoFabricante: ProdutoFabricante = {
    id: 0,
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
    const id = this.route.snapshot.paramMap.get('id') as string
    this.produtoFabricanteService.readById(id).subscribe(produtoFabricante => {
      this.produtoFabricante = produtoFabricante
    })
  }

  delete(): void {
    this.produtoFabricanteService.delete(this.produtoFabricante.id + '').subscribe(() => {
      this.messageService.showMessage("Fabricante de produto deletado com sucesso.")
      this.router.navigate(['cadastros/produtos/fabricantes'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/produtos/fabricantes'])
  }

}
