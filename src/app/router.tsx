import { lazy } from "react";

import { createBrowserRouter, Navigate } from "react-router";

import { PAGE_ROUTES } from "@/shared/consts/page-routes";

import { RootLayout } from "./layout/root-layout";

const ProductListPage = lazy(() =>
  import("@/pages/product-list").then(({ ProductListPage }) => ({
    default: ProductListPage,
  })),
);

const ProductDetailPage = lazy(() =>
  import("@/pages/product-detail").then(({ ProductDetailPage }) => ({
    default: ProductDetailPage,
  })),
);

const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  })),
);

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={PAGE_ROUTES.PRODUCTS} replace />,
      },
      {
        path: PAGE_ROUTES.PRODUCTS,
        element: <ProductListPage />,
      },
      {
        path: PAGE_ROUTES.PRODUCT_DETAIL(),
        element: <ProductDetailPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
