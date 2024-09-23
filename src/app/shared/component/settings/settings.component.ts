import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/services/match-password.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  informationForm!: FormGroup
  resetpasswordForm!: FormGroup
  loading = false;
  submitted = false;
  hideoldPassword = false;
  hidenewPassword = false;
  hideconfirmPassword = false;
  checkedswitch = false;
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.informationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['',Validators.required]
    });
    this.resetpasswordForm = this.fb.group({
      // oldpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/)]],
      oldpassword: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: passwordMatchValidator('password', 'confirmPassword'),
    })
  }

  toforgetpassword() {
    this.route.navigate(['/forget-password'])
  }
  toggleoldPassword() {
    this.hideoldPassword = !this.hideoldPassword
  }
  togglenewPassword() {
    this.hidenewPassword = !this.hidenewPassword
  }
  toggleconfirmPassword() {
    this.hideconfirmPassword = !this.hideconfirmPassword
  }
  toggleswitch() {
    this.checkedswitch = !this.checkedswitch
  }

  savemyAccount() {
    console.log(this.informationForm.value)
  }
  resetpassword() {
    console.log(this.resetpasswordForm.value)
  }

}