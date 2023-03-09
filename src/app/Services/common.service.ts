import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {


  selectedIndexs = new BehaviorSubject({});
  elementType = new BehaviorSubject('')
  constructor() { }
}
