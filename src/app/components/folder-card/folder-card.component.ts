import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Folder } from '../../models/document.model';

@Component({
  selector: 'app-folder-card',
  standalone: true,
  imports: [],
  templateUrl: './folder-card.component.html',
  styleUrl: './folder-card.component.css'
})
export class FolderCardComponent {
  @Input() folder!: Folder;
  @Input() compact = false;
  
  @Output() edit = new EventEmitter<Folder>();
  @Output() delete = new EventEmitter<Folder>();
  @Output() open = new EventEmitter<Folder>();

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  onEdit(): void {
    this.edit.emit(this.folder);
  }

  onDelete(): void {
    this.delete.emit(this.folder);
  }

  onOpen(): void {
    this.open.emit(this.folder);
  }
}
