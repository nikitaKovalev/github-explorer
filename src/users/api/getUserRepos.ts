import type { UserRepo } from "../models/user-repo.interface";
import axiosInstance from "./AxiosInstance";

export async function getUserRepos(username: string): Promise<UserRepo> {
  const response = await axiosInstance.get(`/users/${username}/repos`);
  return response.data;
}