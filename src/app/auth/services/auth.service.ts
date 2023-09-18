import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInDto } from '../entities/sing-in.dto';
import { TokenDto } from '../entities/token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private domain: string | undefined;
  constructor(private readonly http: HttpClient) {
    this.domain = environment.domain;
  }

  signin(signinDto: SignInDto) {
    return this.http
      .post<TokenDto>(`${this.domain}/accounts/auth/sign-in`, signinDto)
      .pipe(
        catchError((error) => {
          console.log('error', error);
          return throwError(() => new Error(error.message));
        })
      );
  }
  sendVerificationCode(email: any) {
    return this.http.post(
      `${this.domain}/accounts/auth/send-email-verification-code/${email}`,
      {}
    );
  }
  signup(signupDto: any) {
    return this.http
      .post(`${this.domain}/accounts/auth/sign-up`, signupDto)
      .pipe(
        catchError((error) => {
          console.log('error', error);
          return throwError(() => new Error(error.message));
        })
      );
  }
}
