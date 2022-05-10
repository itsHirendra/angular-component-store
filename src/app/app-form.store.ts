import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface FormState {
  form: FormGroup;
  data: [];
}

const DEFAULT_STATE: FormState = {
  form: new FormGroup({
    firstName: new FormControl('', [Validators.required]),
  }),
  data: [],
};

@Injectable()
export class AppFormComponentStore extends ComponentStore<FormState> {
  constructor() {
    super(DEFAULT_STATE);
  }

  formData$: Observable<[]> = this.select((state) => state.data);

  setData = this.updater((state, data: []) => ({
    data,
    form: state.form,
  }));
}
