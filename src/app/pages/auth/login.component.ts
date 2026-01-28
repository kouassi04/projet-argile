import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from '../../services/mock/mock-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private mockDataService: MockDataService
  ) {}

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.mockDataService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Email ou mot de passe incorrect';
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Une erreur est survenue';
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
