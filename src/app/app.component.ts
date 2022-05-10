import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppFormComponentStore } from './app-form.store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppFormComponentStore],
})
export class AppComponent {
  name = 'Angular';

  state$ = this._store.state$;

  formData$ = this._store.formData$;

  dataArray: any = [];

  constructor(private _store: AppFormComponentStore) {}

  submit(value: any) {
    console.log('value = ', value.firstName);
    this.dataArray.push(value.firstName);
    this._store.setData(this.dataArray);
  }

  removeData() {
    this.dataArray.pop();
    this._store.setData(this.dataArray);
  }
}
