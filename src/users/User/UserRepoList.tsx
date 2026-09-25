import type { UserRepo } from "../models/user-repo.interface";

interface UserRepoListProps {
  data: UserRepo[];
  isError: boolean;
  isLoading: boolean;
}

export default function UserRepoList({data}: UserRepoListProps) {
  return (
    <div className="user-details-repo-list" style={{
      maxHeight: '600px',
      overflowY: 'scroll',
      width: '100%',
    }}>
      {data.map((repo, index) => 
        <div style={{margin: '1rem 0', textAlign: 'start'}}>
          <a href={repo.html_url} key={repo.html_url}>{index + 1}. {repo.full_name}</a>
        </div>
      )}
    </div>
  );
}