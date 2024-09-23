import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent {

  username = ''
  userData:any

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']) //coming undefined
    // this.username = this.route.snapshot.params['id'] ? this.route.snapshot.params['id']: '';
    // console.log(this.username)
    // if(!this.username) {
    //   console.log(this.username)
    //   window.location.href = environment.landingPage
    //   return
    // }
    // this.getUser()
 }

 getUser() {
  let q = 'publicuser?='+this.username
  this.auth.get(q).subscribe({
    next: (res) => {
      console.log(res)
    },
    error: (err) => {
      console.log(err)
    }
  })
 }
}
