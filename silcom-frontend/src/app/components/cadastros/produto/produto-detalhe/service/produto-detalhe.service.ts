import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { ProdutoTipoInput } from '../../produto-tipo/model/produto-tipo-input.model';
import { ProdutoTipo } from '../../produto-tipo/model/produto-tipo.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDetalheService {

  baseUrl = `${environment.BASE_URL}cadastros/produtos/detalhes`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<ProdutoTipo[]> {
    return this.httpClient.get<ProdutoTipo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<ProdutoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<ProdutoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(produtoTipo: ProdutoTipoInput): Observable<ProdutoTipo> {
    return this.httpClient.post<ProdutoTipo>(this.baseUrl, produtoTipo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<ProdutoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<ProdutoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(produtoTipo: ProdutoTipo): Observable<ProdutoTipo> {
    const produtoTipoInput: ProdutoTipoInput = {
      nome: produtoTipo.nome,
      sigla: produtoTipo.sigla,
    }

    const url = `${this.baseUrl}/${produtoTipo.id}`
    return this.httpClient.put<ProdutoTipo>(url, produtoTipoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
