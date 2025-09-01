import { Suspense } from "react";

import { useParams } from "react-router";

import { useProductDetail } from "../hooks/use-product-detail";
import type { ProductDetailPageParams } from "../types/page-params";
import { ContentSection, ContentSectionSkeleton } from "./content-section";
import * as styles from "./index.css";
import { InfoSection, InfoSectionSkeleton } from "./info-section";

const ProductDetailPageBase = () => {
  const { productId } = useParams<ProductDetailPageParams>();

  const { data: productDetail } = useProductDetail({
    productId: productId ? Number(productId) : null,
  });

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

const ProductDetailPageSkeleton = () => {
  return (
    <main className={styles.container}>
      <ContentSectionSkeleton />
      <InfoSectionSkeleton />
    </main>
  );
};

export const ProductDetailPage = () => {
  return (
    <Suspense fallback={<ProductDetailPageSkeleton />}>
      <ProductDetailPageBase />
    </Suspense>
  );
};
