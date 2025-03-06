import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent {
  showModal = false;

  constructor(private authService: AuthService, private emailService: EmailService) {}

  email: Email = {
    to: '',
    from: `${this.authService.userName}@angular-email.com`,
    html: '',
    subject: '',
    text: '',
    id: ''
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    })
  }
}
