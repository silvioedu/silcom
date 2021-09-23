import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ErrorMesssage } from '../model/error.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) {
    // intentionally unscoped
  }

  errorHandler(e: HttpErrorResponse): Observable<any> {
    const erro: ErrorMesssage = e.error

    const fields = erro.fields?.map(f => f.userMessage).reduce((acm, act) => acm.concat("; ").concat(act)) || ''

    const msg = `Ocorreu um erro ${erro.status}-${erro.detail}. ${fields}`

    this.messageService.showMessage(msg, false)
    return EMPTY
  }

}
