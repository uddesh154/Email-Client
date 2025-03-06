import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emailclient';
  signedIn = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.signedIn.subscribe((signedin: boolean) => {
      // this.signedIn = signedin;
      // // console.log("routerURL",this.router)
      // if(this.signedIn) {
      //   this.router.navigateByUrl('/inbox');
      // }
    })

    this.authService.checkAuth().subscribe(({ authenticated }) => {
      this.signedIn = authenticated;
      if(this.signedIn) {
        this.router.navigateByUrl('/inbox');
      }
    })
  }
}
