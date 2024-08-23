import { lazy } from "react";
import LazyLoadComponent from "../../components/LazyLoadComponent";

//menuList
import { USER_SCOPE_ROUTES } from "./MenuList";
//components
const UserLayout = lazy(() => import("layouts/UserLayout"));
const HomePage = lazy(() => import("pages/HomePage"));
const Faq = lazy(() => import("pages/Faq"));
const PricingPage = lazy(() => import("pages/PricingPage"));

const authenticatedRoutes = [
  {
    path: USER_SCOPE_ROUTES.homepage.basePath,
    element: LazyLoadComponent(<UserLayout />),
    children: [
      {
        index: true,
        element: LazyLoadComponent(<HomePage />),
      },
      {
        path: USER_SCOPE_ROUTES.faq.basePath,
        element: LazyLoadComponent(<Faq />),
      },
      {
        path: USER_SCOPE_ROUTES.pricing.basePath,
        element: LazyLoadComponent(<PricingPage />),
      },
    ],
  },
];

export default authenticatedRoutes;
