import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';

import { Ramo } from '../model/ramo.model';
import { RamoInput } from './../model/ramo-input.model';

@Injectable({
  providedIn: 'root'
})
export class RamoService {

  baseUrl = `${environment.BASE_URL}cadastros/ramos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<Ramo[]> {
    return this.httpClient.get<Ramo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<Ramo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Ramo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(ramo: RamoInput): Observable<Ramo> {
    return this.httpClient.post<Ramo>(this.baseUrl, ramo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<Ramo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<Ramo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(ramo: Ramo): Observable<Ramo> {
    const ramoInput: RamoInput = {
      nome: ramo.nome
    }

    const url = `${this.baseUrl}/${ramo.id}`
    return this.httpClient.put<Ramo>(url, ramoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
