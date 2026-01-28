import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Profil</h1>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p class="text-gray-600">Profil utilisateur en construction...</p>
        <div class="mt-4 space-y-4">
          <div class="flex items-center space-x-4">
            <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <div>
              <h3 class="font-medium">Jean Dupont</h3>
              <p class="text-sm text-gray-500">user@example.com</p>
              <p class="text-sm text-gray-500">Membre depuis Jan 2024</p>
            </div>
          </div>
          <div class="border-t pt-4">
            <button class="bg-blue-600 text-white px-4 py-2 rounded">Modifier le profil</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent {}
