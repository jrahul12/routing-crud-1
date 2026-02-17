import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './shared/services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routing-crud';

  isLoader: boolean = false
  constructor(private _loader: SnackbarService) { }
  ngOnInit(): void {
    this._loader.loader.subscribe(res => {
      this.isLoader = res
    })
  }

}
