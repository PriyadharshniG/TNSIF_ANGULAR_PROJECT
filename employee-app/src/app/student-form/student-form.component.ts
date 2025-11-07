import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  registrationForm: any;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['', Validators.required],
      course: ['', Validators.required],
      address: ['']
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submittedData = this.registrationForm.value;
      this.registrationForm.reset();
    }
  }

  onReset() {
    this.registrationForm.reset();
    this.submittedData = null;
  }
}
