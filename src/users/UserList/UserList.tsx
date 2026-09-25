import { useState } from "react";
import UserListSearch from "./UserListSearch";
import useUsers from "../hooks/useUsers";
import UserListLoading from "./UserListLoader";
import UserListError from "./UserListError";
import UserListResult from "./UserListResult";

export default function UserList() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const {data, isError, isLoading, refetch} = useUsers({page, per_page: perPage, q: search});
  
  const isPristine = !search && !data && !isLoading && isError;

  return (
    <>
      <h1>Find developers and explore their work</h1>
      
      <UserListSearch 
        searchText={search} 
        onTextChange={setSearch}
      />

      {isPristine && <p className="user-list-pristine">Search GitHub developers</p>}
      {isLoading && <UserListLoading />}
      {!isPristine && isError && <UserListError onRefetch={refetch}/>}

      {
        data && 
        <UserListResult 
          data={data} 
          page={page} 
          perPage={perPage}
          onPageChange={setPage}
          onPageSizeChange={setPerPage}
        />
      }
    </>
  );
}