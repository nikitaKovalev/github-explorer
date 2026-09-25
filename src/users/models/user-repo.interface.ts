export interface UserRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;

  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;

  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export const userRepoSort = ['updated', 'created', 'pushed', 'full_name'] as const;
export const userRepoSortDirection = ['asc', 'desc'] as const;

export type UserRepoSort = typeof userRepoSort[number];
export type UserRepoSortDirection = typeof userRepoSortDirection[number];

export interface UserRepoQueryParams {
  username: string;
  sort: UserRepoSort | string;
  direction: UserRepoSortDirection | string;
}