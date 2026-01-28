import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockDataService } from '../../services/mock/mock-data.service';
import { Document } from '../../models/document.model';
import { DocumentCardComponent } from '../../components/document-card/document-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, DocumentCardComponent, SearchBarComponent],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  isLoading = true;
  searchTerm = '';

  constructor(
    private mockDataService: MockDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.mockDataService.getDocuments().subscribe({
      next: (documents) => {
        this.documents = documents;
        this.filteredDocuments = documents;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    if (!searchTerm) {
      this.filteredDocuments = this.documents;
      return;
    }

    this.mockDataService.searchDocuments(searchTerm).subscribe({
      next: (result) => {
        this.filteredDocuments = result.documents;
      }
    });
  }

  onDocumentView(document: Document): void {
    this.router.navigate(['/documents', document.id]);
  }

  onDocumentEdit(document: Document): void {
    this.router.navigate(['/documents', document.id, 'edit']);
  }

  onDocumentDelete(document: Document): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer "${document.title}" ?`)) {
      this.mockDataService.deleteDocument(document.id).subscribe({
        next: () => {
          this.loadDocuments();
        }
      });
    }
  }

  createNewDocument(): void {
    this.router.navigate(['/documents/new']);
  }
}
