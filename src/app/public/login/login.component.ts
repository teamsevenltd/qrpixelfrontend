import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  hidePassword = false;
  loading = false;
  submitted = false;
  constructor(private fb: FormBuilder, private auth: AuthService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  submitloginForm() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      this.submitted = false;
      this.loginForm.markAllAsTouched()
    }
    else {
      this.auth.post('', this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.status == 200) {
            console.log(this.loginForm.value);
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
