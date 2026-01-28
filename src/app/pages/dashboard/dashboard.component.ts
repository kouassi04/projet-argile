import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock/mock-data.service';
import { Stats } from '../../models/document.model';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  stats!: Stats;
  isLoading = true;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.mockDataService.getStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  getStoragePercentage(): number {
    if (!this.stats) return 0;
    return (this.stats.storageUsed / this.stats.storageLimit) * 100;
  }
}
