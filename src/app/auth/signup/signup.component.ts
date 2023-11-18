import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';


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
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      emailVerificationCode: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  sendVerificationCode(): void {
    const email = this.signupForm.value.email;
    this.authService.sendVerificationCode(email).subscribe((response) => {
      console.log('response', response);
      this.openDialog();
    }, (error) => {
      console.log('error', error);	
      alert(error.error.message);
    });
  }

  onSignup(): void {
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
          this.router.navigate(['/auth/signin']);
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

  navigateToSignin(): void {
    this.router.navigate(['/auth/signin']);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        email: this.signupForm.value.email,
        name: this.signupForm.value.firstName,
        code: ''
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.signupForm.value.emailVerificationCode = dialogRef.componentRef?.instance.data.code;
      console.log(this.signupForm.value.emailVerificationCode);

      if (this.signupForm.value.emailVerificationCode != '') {
        this.onSignup();
      }
    });

  }
}
