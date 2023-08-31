import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.scss'],
})
export class ClientRequestComponent {
  requestForm!: FormGroup;
  services: any[] = [];
  constructor(private readonly formBuilder: FormBuilder) {
    this.requestForm = formBuilder.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      comment: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  onSubmit() {}
}
