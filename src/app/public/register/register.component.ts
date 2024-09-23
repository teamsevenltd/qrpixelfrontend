import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/services/match-password.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hidepassword = false;
  hideconfirmpassword = false;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: passwordMatchValidator('password', 'confirmPassword'),
    });
  }
  togglepassword(){
    this.hidepassword = !this.hidepassword;
  }
  toggleconfirmpassword(){
    this.hideconfirmpassword = !this.hideconfirmpassword;
  }

  submitregisterForm() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.submitted = false;
    }
    else {
      this.auth.post('', this.registerForm.value).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.submitted = false;
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}