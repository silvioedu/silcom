import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { ProdutoComplementoInput } from '../model/produto-complemento-input.model';
import { ProdutoComplemento } from '../model/produto-complemento.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoComplementoService {

  baseUrl = `${environment.BASE_URL}cadastros/produtos/complementos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<ProdutoComplemento[]> {
    return this.httpClient.get<ProdutoComplemento[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<ProdutoComplemento> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<ProdutoComplemento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(produtoComplemento: ProdutoComplementoInput): Observable<ProdutoComplemento> {
    return this.httpClient.post<ProdutoComplemento>(this.baseUrl, produtoComplemento).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<ProdutoComplemento> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<ProdutoComplemento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(produtoComplemento: ProdutoComplemento): Observable<ProdutoComplemento> {
    const produtoComplementoInput: ProdutoComplementoInput = {
      nome: produtoComplemento.nome,
      sigla: produtoComplemento.sigla,
    }

    const url = `${this.baseUrl}/${produtoComplemento.id}`
    return this.httpClient.put<ProdutoComplemento>(url, produtoComplementoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
