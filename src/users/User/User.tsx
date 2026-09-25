import { useLoaderData, useNavigate, useNavigation } from "react-router";
import UserCard from "./UserCard";
import UserRepoFilter from "./UserRepoFilter";
import UserRepoList from "./UserRepoList";
import type { UserDetails } from "../models/user-detail.interface";
import { BACK } from "../../core/constants/navigation";
import './User.css';

export default function User() {
  const user = useLoaderData<UserDetails>();
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isLoading = navigation.state === 'loading';

  return (
    <div className="user-details">
      <button className="user-details__button--back" onClick={() => navigate(BACK)}>
        Back to search
      </button>

      {isLoading && <p>Loading details...</p>}

      <UserCard user={user} />

      <div>Repositories</div>
      <UserRepoFilter />
      <UserRepoList />
    </div>
  );
}