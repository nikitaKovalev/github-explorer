import { useEffect, useState } from "react";
import type { UserRepo, UserRepoQueryParams } from "../models/user-repo.interface";
import { getUserRepos } from "../api/getUserRepos";
import axios from "axios";

export default function useUserRepos(params: UserRepoQueryParams) {
  const [data, setData] = useState<UserRepo[]>([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);

    getUserRepos(params.username, params, controller.signal)
      .then((data) => setData(data))
      .catch(error => {
        if (axios.isCancel(error)) {
          console.info('Request canceld: ', error.message);
          return;
        }

        setError(true);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [params.username, params.direction, params.sort]);

  return {data, isLoading, isError};
}