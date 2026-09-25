import { userRepoSort, userRepoSortDirection } from "../hooks/useUserRepoFilters";
import type { UserRepoSort, UserRepoSortDirection } from "../hooks/useUserRepoFilters";


interface UserRepoFilterProps {
  sort: UserRepoSort | string, 
  direction: UserRepoSortDirection | string,
  onSortChange: (sort: UserRepoSort | string) => void,
  onDirectionChange: (direction: UserRepoSortDirection | string) => void,
};

export default function UserRepoFilter(
  {sort, direction, onSortChange, onDirectionChange}: UserRepoFilterProps,
) {
  const changeDirection = () => {
    const newDirection = direction === userRepoSortDirection[0] 
      ? userRepoSortDirection[1] 
      : userRepoSortDirection[0];
  
    onDirectionChange(newDirection);
  };

  return (
    <div className="user-details-repo-sort">
      Sort by:
      <select 
        name="user-details-repo-sort" 
        id="user-details-repo-sort" 
        value={sort} 
        onChange={(event) => onSortChange(event.target.value)}
      >
        {
          userRepoSort.map(value => {
            return <option value={value} key={value}>{value}</option>
          })
        }
      </select>
      <button onClick={changeDirection}>{direction}</button>
    </div>
  );
}