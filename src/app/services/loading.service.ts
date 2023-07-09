import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading$ = new Subject<boolean>();

  constructor() { }

  showLoadingSpinner():void {
    this.isLoading$.next(true);
  }
  hideLoadingSpinner():void {
    this.isLoading$.next(false);
  }
}
