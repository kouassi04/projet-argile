import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() placeholder = 'Rechercher des documents...';
  @Input() showFilters = false;
  @Input() compact = false;
  
  @Output() search = new EventEmitter<string>();
  @Output() filter = new EventEmitter<any>();

  query = '';
  showAdvancedFilters = false;

  onSearch(): void {
    this.search.emit(this.query);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  toggleFilters(): void {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  onFilterChange(filterType: string, value: any): void {
    this.filter.emit({ type: filterType, value });
  }

  clearSearch(): void {
    this.query = '';
    this.search.emit('');
  }
}
