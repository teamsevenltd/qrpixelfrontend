import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  resetForm!: FormGroup
  submitted = false;
  loading = false;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  submitresetForm() {
    this.loading = true;
    this.submitted = true;
    if (this.resetForm.invalid) {
      this.loading = false;
      this.submitted = false;
    }
    else {
      this.auth.post('', this.resetForm.value).subscribe({
        next: (res: any) => {
          console.log(res)
          if (res.status == 200) {
            console.log(this.resetForm.value)
            this.loading = false;
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
