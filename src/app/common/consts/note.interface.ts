export interface Note {
  authorName: string;
  content: string;
  date: string;
  id: number;
}

export interface PartialNote {
  id: number;
  content: string;
}
