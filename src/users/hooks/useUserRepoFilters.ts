import { useSearchParams } from "react-router";
import { userRepoSort, userRepoSortDirection, type UserRepoSort, type UserRepoSortDirection } from "../models/user-repo.interface";

export function useUserRepoFilters() {
  const [searchParams, setSerachParams] = useSearchParams();

  const sort = searchParams.get('sort') ?? userRepoSort[0];
  const direction = searchParams.get('direction') ?? userRepoSortDirection[1];

  const setSort = (newSort: UserRepoSort | string) => {
    const newParams = new URLSearchParams(searchParams);

    if (newSort) {
      newParams.set('sort', newSort);
    } else {
      newParams.delete('sort');
    }

    setSerachParams(newParams);
  };
  
  const setDirection = (newDirection: UserRepoSortDirection | string) => {
    const newParams = new URLSearchParams(searchParams);

    if (newDirection) {
      newParams.set('direction', newDirection);
    } else {
      newParams.delete('direction');
    }

    setSerachParams(newParams);
  };

  return {
    filters: {sort, direction},
    setSort,
    setDirection,
  };
}