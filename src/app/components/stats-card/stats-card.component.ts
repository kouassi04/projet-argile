import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})
export class StatsCardComponent {
  @Input() title!: string;
  @Input() value!: number | string;
  @Input() icon!: string;
  @Input() color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' = 'blue';
  @Input() trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  @Input() subtitle?: string;

  getColorClasses(): string {
    const colors = {
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
      yellow: 'bg-yellow-500 text-white',
      red: 'bg-red-500 text-white',
      purple: 'bg-purple-500 text-white'
    };
    return colors[this.color];
  }

  getTrendColor(): string {
    if (!this.trend) return '';
    return this.trend.direction === 'up' ? 'text-green-600' : 'text-red-600';
  }

  getTrendIcon(): string {
    if (!this.trend) return '';
    return this.trend.direction === 'up' ? '↑' : '↓';
  }
}
