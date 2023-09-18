import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      emailVerificationCode: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  sendVerificationCode(): void {
    const email = this.signupForm.value.email;
    this.authService.sendVerificationCode(email).subscribe((response) => {
      console.log('response', response);
      alert('Verification code sent to your email');
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const signupDto = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        firstName: this.signupForm.value.firstName,
        lastName: this.signupForm.value.lastName,
        rolesId: [1],
        emailVerificationCode: this.signupForm.value.emailVerificationCode,
      };

      this.authService.signup(signupDto).subscribe(
        (response) => {
          console.log('response', response);
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          console.error('Error:', error);
          this.snackBar.open(error.message || 'Signup failed!', 'Close', {
            duration: 5000,
          });
        }
      );
    }
  }
}
