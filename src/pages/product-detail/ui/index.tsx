import { Link, useParams } from "react-router";

import { PAGE_ROUTES } from "@/shared/consts/page-routes";

import { useProductDetail } from "../hooks/use-product-detail";
import type { ProductDetailPageParams } from "../types/page-params";

export const ProductDetailPage = () => {
  const { productId } = useParams<ProductDetailPageParams>();

  const { data: productDetail } = useProductDetail({
    productId: productId ? Number(productId) : null,
  });

  return (
    <div>
      <Link to={PAGE_ROUTES.PRODUCTS}>Go to Products</Link>
      <img src={productDetail?.thumbnail} alt={productDetail?.thumbnail} />
      <p>{productDetail?.title}</p>
      <p>{productDetail?.price}</p>
      <div>
        {productDetail?.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
