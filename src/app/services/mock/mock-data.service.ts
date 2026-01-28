import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Document, Folder, User, Stats, SearchResult, AnalysisResult } from '../../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  private mockDocuments: Document[] = [
    {
      id: 1,
      title: 'Rapport Annuel 2024',
      content: 'Ce rapport présente les résultats financiers et opérationnels de l\'année 2024...',
      tags: ['rapport', 'financier', '2024'],
      folderId: 1,
      created: '2024-01-15T10:30:00Z',
      updated: '2024-01-20T14:45:00Z',
      type: 'pdf',
      size: 2048576,
      status: 'published',
      author: 'Jean Dupont'
    },
    {
      id: 2,
      title: 'Plan Marketing Q1',
      content: 'Stratégie marketing pour le premier trimestre 2024 avec objectifs KPI...',
      tags: ['marketing', 'Q1', 'stratégie'],
      folderId: 2,
      created: '2024-01-10T09:15:00Z',
      type: 'docx',
      size: 1024576,
      status: 'published',
      author: 'Marie Martin'
    },
    {
      id: 3,
      title: 'Contrat Client ABC',
      content: 'Contrat de service entre notre entreprise et le client ABC...',
      tags: ['contrat', 'client', 'légal'],
      folderId: 3,
      created: '2024-01-05T16:20:00Z',
      type: 'pdf',
      size: 512288,
      status: 'published',
      author: 'Pierre Durand'
    },
    {
      id: 4,
      title: 'Note de Réunion Projet X',
      content: 'Compte-rendu de la réunion du 15 janvier concernant le projet X...',
      tags: ['réunion', 'projet', 'compte-rendu'],
      folderId: 2,
      created: '2024-01-15T17:30:00Z',
      type: 'txt',
      size: 256144,
      status: 'draft',
      author: 'Sophie Lefebvre'
    },
    {
      id: 5,
      title: 'Documentation Technique API',
      content: 'Documentation complète de l\'API REST avec exemples d\'utilisation...',
      tags: ['documentation', 'API', 'technique'],
      folderId: 4,
      created: '2024-01-12T11:45:00Z',
      type: 'md',
      size: 1536576,
      status: 'published',
      author: 'Thomas Bernard'
    }
  ];

  private mockFolders: Folder[] = [
    {
      id: 1,
      name: 'Rapports',
      description: 'Tous les rapports annuels et trimestriels',
      color: '#3B82F6',
      documentCount: 1,
      created: '2024-01-01T00:00:00Z'
    },
    {
      id: 2,
      name: 'Marketing',
      description: 'Documents marketing et communication',
      color: '#10B981',
      documentCount: 2,
      created: '2024-01-01T00:00:00Z'
    },
    {
      id: 3,
      name: 'Légal',
      description: 'Contrats et documents juridiques',
      color: '#EF4444',
      documentCount: 1,
      created: '2024-01-01T00:00:00Z'
    },
    {
      id: 4,
      name: 'Technique',
      description: 'Documentation technique et guides',
      color: '#F59E0B',
      documentCount: 1,
      created: '2024-01-01T00:00:00Z'
    }
  ];

  private mockUser: User = {
    id: 1,
    email: 'user@example.com',
    firstName: 'Jean',
    lastName: 'Dupont',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    role: 'user',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-01-28T08:00:00Z'
  };

  private mockStats: Stats = {
    totalDocuments: 156,
    totalFolders: 12,
    recentActivity: 23,
    storageUsed: 256000000,
    storageLimit: 1000000000
  };

  constructor() { }

  // Documents
  getDocuments(): Observable<Document[]> {
    return of(this.mockDocuments).pipe(delay(500));
  }

  getDocumentById(id: number): Observable<Document | undefined> {
    return of(this.mockDocuments.find(doc => doc.id === id)).pipe(delay(300));
  }

  createDocument(document: Omit<Document, 'id' | 'created'>): Observable<Document> {
    const newDoc: Document = {
      ...document,
      id: Math.max(...this.mockDocuments.map(d => d.id)) + 1,
      created: new Date().toISOString()
    };
    this.mockDocuments.push(newDoc);
    return of(newDoc).pipe(delay(300));
  }

  updateDocument(id: number, updates: Partial<Document>): Observable<Document> {
    const index = this.mockDocuments.findIndex(doc => doc.id === id);
    if (index !== -1) {
      this.mockDocuments[index] = { ...this.mockDocuments[index], ...updates, updated: new Date().toISOString() };
      return of(this.mockDocuments[index]).pipe(delay(300));
    }
    return of(this.mockDocuments[index]).pipe(delay(300));
  }

  deleteDocument(id: number): Observable<boolean> {
    const index = this.mockDocuments.findIndex(doc => doc.id === id);
    if (index !== -1) {
      this.mockDocuments.splice(index, 1);
      return of(true).pipe(delay(300));
    }
    return of(false).pipe(delay(300));
  }

  // Folders
  getFolders(): Observable<Folder[]> {
    return of(this.mockFolders).pipe(delay(400));
  }

  createFolder(folder: Omit<Folder, 'id' | 'documentCount' | 'created'>): Observable<Folder> {
    const newFolder: Folder = {
      ...folder,
      id: Math.max(...this.mockFolders.map(f => f.id)) + 1,
      documentCount: 0,
      created: new Date().toISOString()
    };
    this.mockFolders.push(newFolder);
    return of(newFolder).pipe(delay(300));
  }

  // Search
  searchDocuments(query: string): Observable<SearchResult> {
    const filteredDocs = this.mockDocuments.filter(doc => 
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.content.toLowerCase().includes(query.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    const result: SearchResult = {
      documents: filteredDocs,
      folders: [],
      totalResults: filteredDocs.length
    };
    
    return of(result).pipe(delay(600));
  }

  // Analysis
  analyzeDocument(documentId: number): Observable<AnalysisResult> {
    const mockAnalysis: AnalysisResult = {
      summary: 'Ce document traite principalement de sujets professionnels avec une approche structurée. Les points clés incluent des objectifs clairs, des métriques définies et des recommandations actionnables.',
      keywords: ['professionnel', 'structuré', 'objectifs', 'métriques', 'recommandations'],
      category: 'Business',
      sentiment: 'positive',
      readability: 75,
      wordCount: 1250
    };
    
    return of(mockAnalysis).pipe(delay(1500));
  }

  // User
  getCurrentUser(): Observable<User> {
    return of(this.mockUser).pipe(delay(200));
  }

  updateUser(updates: Partial<User>): Observable<User> {
    this.mockUser = { ...this.mockUser, ...updates };
    return of(this.mockUser).pipe(delay(300));
  }

  // Stats
  getStats(): Observable<Stats> {
    return of(this.mockStats).pipe(delay(400));
  }

  // Auth (simulation)
  login(email: string, password: string): Observable<{ success: boolean; user?: User }> {
    if (email === 'user@example.com' && password === 'password') {
      return of({ success: true, user: this.mockUser }).pipe(delay(800));
    }
    return of({ success: false }).pipe(delay(800));
  }

  register(userData: Omit<User, 'id' | 'createdAt'>): Observable<{ success: boolean; user?: User }> {
    const newUser: User = {
      ...userData,
      id: Math.max(...this.mockDocuments.map(d => d.id)) + 100,
      createdAt: new Date().toISOString()
    };
    return of({ success: true, user: newUser }).pipe(delay(1000));
  }
}
