import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Recherche Avancée</h1>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p class="text-gray-600">Recherche avancée en construction...</p>
        <div class="mt-4 space-y-4">
          <input type="text" placeholder="Rechercher..." class="w-full p-2 border rounded">
          <div class="flex space-x-4">
            <select class="p-2 border rounded">
              <option>Tous les types</option>
              <option>PDF</option>
              <option>Word</option>
            </select>
            <input type="date" class="p-2 border rounded">
            <button class="bg-blue-600 text-white px-4 py-2 rounded">🔍 Rechercher</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SearchComponent {}
