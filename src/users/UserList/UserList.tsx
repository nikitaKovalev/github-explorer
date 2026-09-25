import { useState } from "react";
import UserListSearch from "./UserListSearch";
import useUsers from "../hooks/useUsers";
import UserListLoading from "./UserListLoader";
import UserListError from "./UserListError";
import UserListResult from "./UserListResult";
import { useUsersFilters } from "../hooks/useUserFilters";

export default function UserList() {
  const {filters, setPage, setSearch, setPerPage} = useUsersFilters();

  const {data, isError, isLoading, refetch} = useUsers({
    page: filters.page, 
    per_page: filters.perPage, 
    q: filters.search
  });
  
  const isPristine = !filters.search && !data && !isLoading && isError;

  return (
    <>
      <h1>Find developers and explore their work</h1>
      
      <UserListSearch 
        searchText={filters.search} 
        onTextChange={setSearch}
      />

      {isPristine && <p className="user-list-pristine">Search GitHub developers</p>}
      {isLoading && <UserListLoading />}
      {!isPristine && isError && <UserListError onRefetch={refetch}/>}

      {
        data && 
        <UserListResult 
          data={data} 
          page={filters.page} 
          perPage={filters.perPage}
          onPageChange={setPage}
          onPageSizeChange={setPerPage}
        />
      }
    </>
  );
}