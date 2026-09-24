import { createBrowserRouter } from "react-router";
import { UserList, UserFavorites, User } from "./features/users/pages";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: UserList,
        children: [
          {
            path: ':userId',
            Component: User,
          }
        ],
      },
      {
        path: 'favorites',
        Component: UserFavorites
      }
    ],
  }
]);