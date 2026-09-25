import { createBrowserRouter } from "react-router";
import App from "./App";
import UserList from "./users/UserList/UserList";
import User from "./users/User/User";
import UserFavorites from "./users/UserFavorites/UserFavorites";

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: UserList,
      },
      {
        path: ':userLogin',
        Component: User,
      },
      {
        path: 'favorites',
        Component: UserFavorites,
      }
    ],
  }
]);