import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.css'
})
export class DocumentCardComponent {
  @Input() document!: Document;
  @Input() compact = false;
  
  @Output() edit = new EventEmitter<Document>();
  @Output() delete = new EventEmitter<Document>();
  @Output() view = new EventEmitter<Document>();

  getFileIcon(type: string): string {
    const icons = {
      pdf: '📄',
      docx: '📝',
      txt: '📃',
      md: '📋'
    };
    return icons[type as keyof typeof icons] || '📄';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  getStatusColor(status: string): string {
    const colors = {
      draft: 'bg-yellow-100 text-yellow-800',
      published: 'bg-green-100 text-green-800',
      archived: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  }

  onEdit(): void {
    this.edit.emit(this.document);
  }

  onDelete(): void {
    this.delete.emit(this.document);
  }

  onView(): void {
    this.view.emit(this.document);
  }
}
