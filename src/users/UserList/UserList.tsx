import UserListSearch from "./UserListSearch";
import useUsers from "../hooks/useUsers";
import UserListLoading from "./UserListLoader";
import UserListError from "./UserListError";
import UserListResult from "./UserListResult";
import { useUsersFilters } from "../hooks/useUserFilters";
import { useEffect, useState } from "react";
import useDebounce from "../../core/hooks/useDebounce";

export default function UserList() {
  const {filters, setPage, setSearch, setPerPage} = useUsersFilters();
  const [localSearch, setLocalSearch] = useState(filters.search);
  const debounceValue = useDebounce(localSearch);

  useEffect(() => setLocalSearch(filters.search), [filters.search]);
  useEffect(() => setSearch(debounceValue), [debounceValue]);

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
        searchText={localSearch} 
        onTextChange={setLocalSearch}
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