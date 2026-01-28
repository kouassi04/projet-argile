import { Component } from '@angular/core';

@Component({
  selector: 'app-document-edit',
  standalone: true,
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Édition Document</h1>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p class="text-gray-600">Formulaire d'édition en construction...</p>
        <div class="mt-4 space-y-4">
          <input type="text" placeholder="Titre du document" class="w-full p-2 border rounded">
          <textarea placeholder="Contenu du document" class="w-full p-2 border rounded h-32"></textarea>
          <button class="bg-blue-600 text-white px-4 py-2 rounded">Sauvegarder</button>
        </div>
      </div>
    </div>
  `
})
export class DocumentEditComponent {}
