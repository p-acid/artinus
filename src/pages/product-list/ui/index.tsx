import { Link } from "react-router";

import { PAGE_ROUTES } from "@/shared/consts/page-routes";

export const ProductListPage = () => {
  return (
    <main>
      <Link to={PAGE_ROUTES.PRODUCT_DETAIL(1)}>Go to Product Detail</Link>
    </main>
  );
};
