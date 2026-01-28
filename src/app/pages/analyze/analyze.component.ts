import { Component } from '@angular/core';

@Component({
  selector: 'app-analyze',
  standalone: true,
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Analyse IA</h1>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p class="text-gray-600">Analyse intelligente en construction...</p>
        <div class="mt-4 space-y-4">
          <button class="bg-purple-600 text-white px-4 py-2 rounded">🤖 Analyser un document</button>
          <div class="border rounded-lg p-4 bg-purple-50">
            <h3 class="font-medium mb-2">Résultats de l'analyse</h3>
            <p class="text-sm text-gray-600">• Résumé: Document professionnel bien structuré</p>
            <p class="text-sm text-gray-600">• Mots-clés: rapport, analyse, stratégie</p>
            <p class="text-sm text-gray-600">• Catégorie: Business</p>
            <p class="text-sm text-gray-600">• Sentiment: Positif</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AnalyzeComponent {}
