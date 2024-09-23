import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.setPageTitle();
  }
  // title = 'qr-user';
  private setPageTitle(): void {
    const defaultPageTitle = 'QR Pixel';
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          if (!child) {
            return (
              this.activatedRoute.snapshot.data['title'] || defaultPageTitle
            );
          }
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'] || defaultPageTitle;
          }
        })
      )
      .subscribe((title: string) =>
        this.title.setTitle(title + ' | QR Pixel')
      );
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // if (this.auth.isLogin()) {
        //   this.auth.validateToken().then(val => {
        //     if (!val) {
        //       this.router.navigate(['/']);
        //     }
        //   })
        // }
      }
    });
  }
}