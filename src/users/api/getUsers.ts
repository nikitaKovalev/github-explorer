import type { UserReponse, UsersQueryParams } from "../models/user.interface";
import axiosInstance from "./AxiosInstance";

export async function getUsers(params: UsersQueryParams, signal?: AbortSignal): Promise<UserReponse> {
  const response = await axiosInstance.get('/search/users', {params: removeEmptyQueryParams(params), signal});
  return response.data;
}

function removeEmptyQueryParams<T>(params: T) {
  const copy = {...params};
  for (const key in copy) {
    if (Object.prototype.hasOwnProperty.call(copy, key)) {
      const value = copy[key];
      
      if (value === '' || value === null || value === undefined) {
        delete params[key];
      }
    }
  }

  return params;
}