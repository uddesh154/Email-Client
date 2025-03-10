import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.signedOut().subscribe(() => {
      this.router.navigateByUrl('/');
    })
  }
}
