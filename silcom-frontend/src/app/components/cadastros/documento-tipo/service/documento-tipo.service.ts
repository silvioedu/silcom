import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { DocumentoTipoInput } from '../model/documento-tipo-input.model';
import { DocumentoTipo } from '../model/documento-tipo.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentoTipoService {

  baseUrl = `${environment.BASE_URL}cadastros/documentos-tipos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<DocumentoTipo[]> {
    return this.httpClient.get<DocumentoTipo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<DocumentoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<DocumentoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(ramo: DocumentoTipoInput): Observable<DocumentoTipo> {
    return this.httpClient.post<DocumentoTipo>(this.baseUrl, ramo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<DocumentoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<DocumentoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(ramo: DocumentoTipo): Observable<DocumentoTipo> {
    const ramoInput: DocumentoTipoInput = {
      nome: ramo.nome
    }

    const url = `${this.baseUrl}/${ramo.id}`
    return this.httpClient.put<DocumentoTipo>(url, ramoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
