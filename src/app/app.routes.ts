import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login.component';
import { LayoutComponent } from './shared/layout/layout.component';

// Components simples pour le routing
const DashboardComponent = () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent);
const DocumentListComponent = () => import('./pages/documents/document-list.component').then(m => m.DocumentListComponent);
const DocumentViewComponent = () => import('./pages/documents/document-view.component').then(m => m.DocumentViewComponent);
const DocumentEditComponent = () => import('./pages/documents/document-edit.component').then(m => m.DocumentEditComponent);
const FolderListComponent = () => import('./pages/folders/folder-list.component').then(m => m.FolderListComponent);
const AnalyzeComponent = () => import('./pages/analyze/analyze.component').then(m => m.AnalyzeComponent);
const SearchComponent = () => import('./pages/search/search.component').then(m => m.SearchComponent);
const ProfileComponent = () => import('./pages/profile/profile.component').then(m => m.ProfileComponent);

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      { path: 'dashboard', loadComponent: DashboardComponent },
      { path: 'documents', loadComponent: DocumentListComponent },
      { path: 'documents/new', loadComponent: DocumentEditComponent },
      { path: 'documents/:id', loadComponent: DocumentViewComponent },
      { path: 'documents/:id/edit', loadComponent: DocumentEditComponent },
      { path: 'folders', loadComponent: FolderListComponent },
      { path: 'analyze', loadComponent: AnalyzeComponent },
      { path: 'search', loadComponent: SearchComponent },
      { path: 'profile', loadComponent: ProfileComponent },
    ]
  }
];
