import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';

import { ProdutoFabricanteInput } from '../model/produto-fabricante-input.model';
import { ProdutoFabricante } from '../model/produto-fabricante.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFabricanteService {

  baseUrl = `${environment.BASE_URL}cadastros/produtos/fabricantes`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<ProdutoFabricante[]> {
    return this.httpClient.get<ProdutoFabricante[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<ProdutoFabricante> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<ProdutoFabricante>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(produtoFabricante: ProdutoFabricanteInput): Observable<ProdutoFabricante> {
    return this.httpClient.post<ProdutoFabricante>(this.baseUrl, produtoFabricante).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<ProdutoFabricante> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<ProdutoFabricante>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(produtoFabricante: ProdutoFabricante): Observable<ProdutoFabricante> {
    const produtoFabricanteInput: ProdutoFabricanteInput = {
      nome: produtoFabricante.nome,
      sigla: produtoFabricante.sigla,
    }

    const url = `${this.baseUrl}/${produtoFabricante.id}`
    return this.httpClient.put<ProdutoFabricante>(url, produtoFabricanteInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
