import { ErrorMesssage } from './../model/error.model';
import { RamoInput } from './../model/ramo-input.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Ramo } from '../model/ramo.model';
import { MessageService } from 'src/app/components/shared/message.service';

@Injectable({
  providedIn: 'root'
})
export class RamoService {

  baseUrl = 'http://localhost:8080/cadastros/ramos'

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  read(): Observable<Ramo[]> {
    return this.httpClient.get<Ramo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<Ramo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Ramo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  create(ramo: RamoInput): Observable<Ramo> {
    return this.httpClient.post<Ramo>(this.baseUrl, ramo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<Ramo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<Ramo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(ramo: Ramo): Observable<Ramo> {
    const ramoInput: RamoInput = {
      nome: ramo.nome
    }

    const url = `${this.baseUrl}/${ramo.id}`
    return this.httpClient.put<Ramo>(url, ramoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: HttpErrorResponse): Observable<any> {
    const erro: ErrorMesssage = e.error

    const fields = erro.fields?.map(f => f.userMessage).reduce((acm, act) => acm.concat("; ").concat(act))

    const msg = `Ocorreu um erro ${erro.status}-${erro.detail}: ${fields}`

    this.messageService.showMessage(msg, false)
    return EMPTY
  }

}
