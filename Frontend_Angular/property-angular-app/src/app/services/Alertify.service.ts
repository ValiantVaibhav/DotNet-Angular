import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

showSuccessMessage(message : string){
  alertify.success(message);
}

showErrorMessage(message : string){
  alertify.error(message);
}

showWarningMessage(message : string){
  alertify.warning(message);
}
}
