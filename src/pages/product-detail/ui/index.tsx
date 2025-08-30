import { Link } from "react-router";

import { PAGE_ROUTES } from "@/shared/consts/page-routes";

export const ProductDetailPage = () => {
  return (
    <div>
      <Link to={PAGE_ROUTES.PRODUCTS}>Go to Products</Link>
    </div>
  );
};
