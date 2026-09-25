import type { ShouldRevalidateFunction } from "react-router";
import { getUser } from "./users/api/getUser";

export async function userResolver({params}: {params: any}) {
  const {username} = params;

  if (!username) {
    throw new Response("Not Found", { status: 404 });
  }

  return await getUser(username);;
}

export const shouldUserDetailsRevalidate: ShouldRevalidateFunction = ({ currentUrl, nextUrl }): boolean => {
  if (currentUrl.pathname !== nextUrl.pathname) {
    return true;
  }

  return false;
}