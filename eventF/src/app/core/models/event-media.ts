export type MediaType = 'IMAGE' | 'VIDEO';

export interface EventMedia {
  id: number;
  mediaUrl: string;
  mediaType: MediaType;
  orderIndex: number;
  createdAt: string;
}

export interface EventMediaRequest {
  mediaUrl: string;
  mediaType: MediaType;
  orderIndex: number;
}
