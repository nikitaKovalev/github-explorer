import { useEffect, useState } from "react";
import type { UserReponse, UsersQueryParams } from "../models/user.interface";
import { getUsers } from "../api/getUsers";
import axios from "axios";

export default function useUsers(
  {q, page, per_page }: UsersQueryParams
) {
  const [data, setData] = useState<UserReponse | null>(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [refreshCount, setRefreshCount] = useState(0);

  const refetch = () => setRefreshCount(count => count + 1);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setError(false);

    getUsers({q, page, per_page}, abortController.signal)
      .then((response: UserReponse) => {
        setData(response);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.info('Request canceld: ', error.message);
          return;
        }

        setError(true);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });

      return () => abortController.abort();
  }, [q, page, per_page, refreshCount]);

  return {data, isError, isLoading, refetch};
}