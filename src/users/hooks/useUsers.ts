import type { UsersQueryParams } from "../models/user.interface";
import { getUsers } from "../api/getUsers";
import { useQuery } from "@tanstack/react-query";

export default function useUsers(
  {q, page, per_page }: UsersQueryParams
) {
  return useQuery({
    queryKey: ['users', q, page, per_page],
    queryFn: () => getUsers({q, page, per_page}),
    staleTime: 1000 * 60 * 5,
  })
}