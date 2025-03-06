import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

interface UserCredintials {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  passwordConfirmation: FormControl<string | null>;
}

interface SignUpResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

interface signedInCredintials {
  username: string;
  password: string;
}

interface signInResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedIn = new BehaviorSubject(false);
  userName = '';

  constructor(private http: HttpClient) { }

  userAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>('https://api.angular-email.com/auth/username', {
            username: username
        })
  }

  signup(credintials: UserCredintials | any) {
    return this.http.post<SignUpResponse>(
      'https://api.angular-email.com/auth/signup',
      credintials
    ).pipe(
      tap(({username}) => {
        this.signedIn.next(true);
        this.userName = username;
      })
    )
  }

  checkAuth() {
    return this.http.get<SignedInResponse>('https://api.angular-email.com/auth/signedin')
    .pipe(
      tap(({ authenticated, username }) => {
        this.signedIn.next(authenticated);
        this.userName = username;
      })
    )
  }

  signedOut() {
    return this.http.post('https://api.angular-email.com/auth/signout',{})
    .pipe(
      tap(() => {
        this.signedIn.next(false);
      })
    )
  }

  signIn(credintials: signedInCredintials | any) {
    return this.http.post<signInResponse>('https://api.angular-email.com/auth/signin', credintials)
    .pipe(
      tap(({ username }) => {
          this.signedIn.next(true);
          this.userName = username;
      })
    )
  }

}
