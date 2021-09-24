import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';

import { ProdutoId } from '../model/produto-id.model';
import { ProdutoInput } from '../model/produto-input.model';
import { ProdutoResumo } from './../model/produto-resumo.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = `${environment.BASE_URL}cadastros/produtos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<ProdutoResumo[]> {
    return this.httpClient.get<ProdutoResumo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<ProdutoResumo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<ProdutoResumo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readIdById(id: string): Observable<ProdutoId> {
    const url = `${this.baseUrl}/${id}/id`
    return this.httpClient.get<ProdutoId>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(produto: ProdutoInput): Observable<ProdutoResumo> {
    return this.httpClient.post<ProdutoResumo>(this.baseUrl, produto).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<ProdutoResumo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<ProdutoResumo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(id: number, produtoInput: ProdutoInput): Observable<ProdutoResumo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.put<ProdutoResumo>(url, produtoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
