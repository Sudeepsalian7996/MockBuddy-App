import { lazy } from "react";
import LazyLoadComponent from "../../components/LazyLoadComponent";

//menuList
import { USER_SCOPE_ROUTES } from "./MenuList";
//components
const UserLayout = lazy(() => import("layouts/UserLayout"));
const HomePage = lazy(() => import("pages/HomePage"));

const authenticatedRoutes = [
  {
    path: USER_SCOPE_ROUTES.homepage.basePath,
    element: LazyLoadComponent(<UserLayout />),
    children: [
      {
        index: true,
        element: LazyLoadComponent(<HomePage />),
      },
    ],
  },
];

export default authenticatedRoutes;
