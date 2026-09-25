export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface UsersQueryParams {
  per_page: number;
  page?: number;
  q?: string;
}

export interface UserReponse {
  total_count: number;
  items: User[];
}