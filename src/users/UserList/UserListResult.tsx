import type { User, UserReponse } from "../models/user.interface";
import UserListPagination from "./UserListPagination";

interface UserListResultProps {
  data: UserReponse | null;
  page: number; 
  perPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export default function UserListResult(
  {data, page, onPageChange}: UserListResultProps,
) {
  const onPrevious = () => {
    if (page < 2) {
      return;
    }

    onPageChange(page - 1);
  };
  const onNext = () => onPageChange(page + 1);
  const userList = (users: User[]) => users.map(user => 
    <li className="user-list-items__item" key={user.id}>{ user.id}: { user.login }</li>
  );

  return (
    <>
      <p>{data?.total_count} users found</p>

      <ul className="user-list-items">
        {userList(data?.items ?? [])}
      </ul>
      
      <UserListPagination page={page} onNext={onNext} onPrevious={onPrevious} />
    </>
  );
}