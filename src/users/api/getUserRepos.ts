import type { UserRepo, UserRepoQueryParams } from "../models/user-repo.interface";
import axiosInstance from "./AxiosInstance";

export async function getUserRepos(
  username: string, 
  params: UserRepoQueryParams, 
  signal?: AbortSignal
): Promise<UserRepo[]> {
  const response = await axiosInstance.get(`/users/${username}/repos`, {params, signal});
  return response.data;
}