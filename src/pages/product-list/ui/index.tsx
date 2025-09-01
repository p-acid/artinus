import { Suspense } from "react";

import * as styles from "./index.css";
import { ProductList, ProductListSkeleton } from "./product-list";

export const ProductListPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </main>
  );
};
