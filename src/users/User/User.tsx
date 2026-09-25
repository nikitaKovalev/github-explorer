import { useLoaderData, useNavigate, useNavigation } from "react-router";
import UserCard from "./UserCard";
import UserRepoFilter from "./UserRepoFilter";
import UserRepoList from "./UserRepoList";
import type { UserDetails } from "../models/user-detail.interface";
import { BACK } from "../../core/constants/navigation";
import './User.css';
import { useUserRepoFilters } from "../hooks/useUserRepoFilters";
import useUserRepos from "../hooks/useUserRepos";

export default function User() {
  const user = useLoaderData<UserDetails>();
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isUserLoading = navigation.state === 'loading';

  const {filters, setDirection, setSort} = useUserRepoFilters();
  const {data, isError, isLoading} = useUserRepos({
    sort: filters.sort, 
    direction: filters.direction, 
    username: user.login,
  });

  return (
    <div className="user-details">
      <button 
        className="user-details__button--back" 
        onClick={() => navigate(BACK)}
      >
        Back to search
      </button>

      {isUserLoading && <p>Loading details...</p>}

      <UserCard user={user} />

      <div>Repositories</div>
      <UserRepoFilter 
        sort={filters.sort} 
        direction={filters.direction} 
        onSortChange={setSort} 
        onDirectionChange={setDirection}
      />
      
      <UserRepoList 
        data={data} 
        isError={isError} 
        isLoading={isLoading} 
      />
    </div>
  );
}