import { ProdutoFabricanteInput } from './../model/produto-fabricante-input.model';
import { Component, OnInit } from '@angular/core';
import { ProdutoFabricanteService } from '../service/produto-fabricante.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';

@Component({
  selector: 'app-produto-fabricante-create',
  templateUrl: './produto-fabricante-create.component.html',
  styleUrls: ['./produto-fabricante-create.component.css']
})
export class ProdutoFabricanteCreateComponent implements OnInit {

  produtoFabricante: ProdutoFabricanteInput = {
    nome: '',
    sigla: ''
  }

  constructor(private produtoFabricanteService: ProdutoFabricanteService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.produtoFabricanteService.create(this.produtoFabricante).subscribe(() => {
      this.messageService.showMessage('Fabricante de produto criado com sucesso')
      this.router.navigate(['cadastros/produtos/fabricantes'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/produtos/fabricantes'])
  }

}
