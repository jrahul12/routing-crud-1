import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  snackBar(msg: string) {
    this._snackBar.open(msg, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

}
