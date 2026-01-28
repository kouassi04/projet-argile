import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MockDataService } from '../../services/mock/mock-data.service';
import { User } from '../../models/document.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  currentUser: User | null = null;
  isSidebarOpen = false;
  isMobile = false;

  menuItems = [
    { path: '/dashboard', label: 'Tableau de bord', icon: '📊' },
    { path: '/documents', label: 'Documents', icon: '📄' },
    { path: '/folders', label: 'Dossiers', icon: '📁' },
    { path: '/analyze', label: 'Analyse IA', icon: '🤖' },
    { path: '/search', label: 'Recherche', icon: '🔍' },
    { path: '/profile', label: 'Profil', icon: '👤' }
  ];

  constructor(
    private router: Router,
    private mockDataService: MockDataService
  ) {
    this.mockDataService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.isSidebarOpen = false;
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }

  logout(): void {
    // Simulation de logout
    this.router.navigate(['/login']);
  }

  isActiveRoute(path: string): boolean {
    return this.router.url === path;
  }
}
