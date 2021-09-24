import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { ContatoTipoInput } from '../model/contato-tipo-input.model';
import { ContatoTipo } from '../model/contato-tipo.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoTipoService {

  baseUrl = `${environment.BASE_URL}cadastros/contatos-tipos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<ContatoTipo[]> {
    return this.httpClient.get<ContatoTipo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<ContatoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<ContatoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(ramo: ContatoTipoInput): Observable<ContatoTipo> {
    return this.httpClient.post<ContatoTipo>(this.baseUrl, ramo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<ContatoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<ContatoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(ramo: ContatoTipo): Observable<ContatoTipo> {
    const ramoInput: ContatoTipoInput = {
      nome: ramo.nome
    }

    const url = `${this.baseUrl}/${ramo.id}`
    return this.httpClient.put<ContatoTipo>(url, ramoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
