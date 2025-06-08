// angular import
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // <== ici
import { CommonModule } from '@angular/common'; // ✅ Ajouter ceci
import { AuthService } from '../services/auth.service'; // adapte le chemin

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule , HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export  class SignInComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService // 

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const loginData = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.http.post('http://localhost:8888/USER-SERVICE/auth/login', loginData).subscribe({
      next: (response:any) => {
        // Handle successful login
        console.log('Login successful', response);
        localStorage.setItem("token",response.token)
        localStorage.setItem("idUser",response.id)

      this.authService.login(response.role); // 👈 notifie le service

        localStorage.setItem("role",response.role)
        this.isLoading = false;
        this.router.navigate(['/home']); // Redirect to dashboard or desired route
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Login failed. Please try again.';
        console.error('Login error', error);
      }
    });
  }
}
