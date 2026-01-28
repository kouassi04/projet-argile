import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDataService } from '../../services/mock/mock-data.service';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-view.component.html',
  styleUrl: './document-view.component.css'
})
export class DocumentViewComponent implements OnInit {
  document: Document | null = null;
  isLoading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadDocument(id);
    }
  }

  loadDocument(id: number): void {
    this.mockDataService.getDocumentById(id).subscribe({
      next: (document) => {
        this.document = document || null;
        this.isLoading = false;
        if (!document) {
          this.error = 'Document non trouvé';
        }
      },
      error: () => {
        this.isLoading = false;
        this.error = 'Erreur lors du chargement du document';
      }
    });
  }

  onEdit(): void {
    if (this.document) {
      this.router.navigate(['/documents', this.document.id, 'edit']);
    }
  }

  onDelete(): void {
    if (this.document && confirm(`Êtes-vous sûr de vouloir supprimer "${this.document.title}" ?`)) {
      this.mockDataService.deleteDocument(this.document.id).subscribe({
        next: () => {
          this.router.navigate(['/documents']);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/documents']);
  }
}
