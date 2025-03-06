import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent {
  email!: Email;
  constructor(private route: ActivatedRoute, private emailService: EmailService) {
    route.data.subscribe(({ email }) => {
      this.email = email;
    })
  }
}
