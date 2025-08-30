import { createBrowserRouter, Navigate } from "react-router";

import { ProductDetailPage } from "@/pages/product-detail/ui";
import { ProductListPage } from "@/pages/product-list/ui";
import { PAGE_ROUTES } from "@/shared/consts/page-routes";

import { RootLayout } from "./layout/root-layout";

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
    ],
  },
]);
