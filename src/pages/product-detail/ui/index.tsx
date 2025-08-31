import { useParams } from "react-router";

import { useProductDetail } from "../hooks/use-product-detail";
import type { ProductDetailPageParams } from "../types/page-params";
import { ContentSection } from "./content-section";
import * as styles from "./index.css";
import { InfoSection } from "./info-section";

export const ProductDetailPage = () => {
  const { productId } = useParams<ProductDetailPageParams>();

  const { data: productDetail } = useProductDetail({
    productId: productId ? Number(productId) : null,
  });

  if (!productDetail) {
    return <div>로딩중 ...</div>;
  }

  return (
    <main className={styles.container}>
      <ContentSection
        thumbnail={productDetail.thumbnail}
        reviews={productDetail.reviews}
        images={productDetail.images}
      />
      <InfoSection
        title={productDetail.title}
        description={productDetail.description}
        category={productDetail.category}
        discountPercentage={productDetail.discountPercentage}
        price={productDetail.price}
        thumbnail={productDetail.thumbnail}
        tags={productDetail.tags}
        shippingInformation={productDetail.shippingInformation}
        warrantyInformation={productDetail.warrantyInformation}
      />
    </main>
  );
};
