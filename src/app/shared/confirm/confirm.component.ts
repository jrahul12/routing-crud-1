import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  msg!: string

  constructor(private _dailogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) { this.msg = data }

  ngOnInit(): void {
  }

  onClose(flag: boolean) {
    this._dailogRef.close(flag)
  }

}
