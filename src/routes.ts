import { createBrowserRouter } from "react-router";
import App from "./App";
import UserList from "./users/UserList/UserList";
import User from "./users/User/User";
import UserFavorites from "./users/UserFavorites/UserFavorites";
import { userResolver } from "./user-resolver";
import UserError from "./users/User/UserError";

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
        path: ':username',
        Component: User,
        loader: userResolver,
      },
      {
        path: 'favorites',
        Component: UserFavorites,
        ErrorBoundary: UserError,
      }
    ],
  }
]);