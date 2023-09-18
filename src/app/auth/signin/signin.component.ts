import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserSessionService } from 'src/app/core/services/user-session.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userSessionService: UserSessionService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signinForm.valid) {
      const signinDto = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
      };
      this.authService.signin(signinDto).subscribe({
        next: (response) => {
          if (response && response.accessToken) {
            this.userSessionService.setUserSession(response.accessToken);
            this.router.navigate(['/activities']);
          } else {
            this.snackBar.open(
              'Signin failed! Invalid response from server.',
              'Close',
              {
                duration: 5000,
              }
            );
          }
        },
        error: (error) => {
          this.snackBar.open(error.message || 'Signin failed!', 'Close', {
            duration: 5000,
          });
        },
      });
    }
  }
}
