
export interface Reply {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
  upvotes: number;
  isSolution: boolean;
}

export interface Discussion {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  replies: Reply[];
  isSolved: boolean;
  upvotes: number;
}

