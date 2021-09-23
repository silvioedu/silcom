import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';

import { ProdutoCorInput } from '../model/produto-cor-input.model';
import { ProdutoCor } from '../model/produto-cor.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCorService {

  baseUrl = `${environment.BASE_URL}cadastros/produtos/cores`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<ProdutoCor[]> {
    return this.httpClient.get<ProdutoCor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<ProdutoCor> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<ProdutoCor>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(produtoCor: ProdutoCorInput): Observable<ProdutoCor> {
    return this.httpClient.post<ProdutoCor>(this.baseUrl, produtoCor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<ProdutoCor> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<ProdutoCor>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(produtoCor: ProdutoCor): Observable<ProdutoCor> {
    const produtoCorInput: ProdutoCorInput = {
      nome: produtoCor.nome,
      sigla: produtoCor.sigla,
    }

    const url = `${this.baseUrl}/${produtoCor.id}`
    return this.httpClient.put<ProdutoCor>(url, produtoCorInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
