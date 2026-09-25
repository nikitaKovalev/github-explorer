import type { UserDetails } from "../models/user-detail.interface";
import axiosInstance from "./AxiosInstance";

export async function getUser(username: string, signal?: AbortSignal): Promise<UserDetails> {
  const response = await axiosInstance.get<UserDetails>(`/users/${username}`, {signal});
  return response.data;
}