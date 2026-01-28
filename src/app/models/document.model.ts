export interface Document {
  id: number;
  title: string;
  content: string;
  tags: string[];
  folderId?: number;
  created: string;
  updated?: string;
  type: 'pdf' | 'docx' | 'txt' | 'md';
  size: number;
  status: 'draft' | 'published' | 'archived';
  author: string;
}

export interface Folder {
  id: number;
  name: string;
  description?: string;
  color: string;
  documentCount: number;
  created: string;
  parentId?: number;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: string;
  lastLogin?: string;
}

export interface Stats {
  totalDocuments: number;
  totalFolders: number;
  recentActivity: number;
  storageUsed: number;
  storageLimit: number;
}

export interface SearchResult {
  documents: Document[];
  folders: Folder[];
  totalResults: number;
}

export interface AnalysisResult {
  summary: string;
  keywords: string[];
  category: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  readability: number;
  wordCount: number;
}
