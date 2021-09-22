import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { RamoPage } from './ramo.model';

@Injectable({
  providedIn: 'root'
})
export class RamoService {

  baseUrl = 'http://localhost:8080/cadastros/ramos'

  constructor(private httpClient: HttpClient) { }

  read(): Observable<RamoPage> {
    return this.httpClient.get<RamoPage>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    const errorMessage = `Ocorreu um erro: ${e.error.detail} (${e.error.status})`
    console.error(errorMessage)
    return EMPTY
  }

}
