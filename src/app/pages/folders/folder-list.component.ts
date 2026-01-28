import { Component } from '@angular/core';

@Component({
  selector: 'app-folder-list',
  standalone: true,
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Dossiers</h1>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p class="text-gray-600">Liste des dossiers en construction...</p>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="border rounded-lg p-4 hover:bg-gray-50">
            <div class="text-2xl mb-2">📁</div>
            <h3 class="font-medium">Rapports</h3>
            <p class="text-sm text-gray-500">12 documents</p>
          </div>
          <div class="border rounded-lg p-4 hover:bg-gray-50">
            <div class="text-2xl mb-2">📁</div>
            <h3 class="font-medium">Marketing</h3>
            <p class="text-sm text-gray-500">8 documents</p>
          </div>
          <div class="border rounded-lg p-4 hover:bg-gray-50">
            <div class="text-2xl mb-2">📁</div>
            <h3 class="font-medium">Légal</h3>
            <p class="text-sm text-gray-500">5 documents</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FolderListComponent {}
