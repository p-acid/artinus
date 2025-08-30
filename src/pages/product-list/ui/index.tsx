import * as styles from "./index.css";
import { ProductList } from "./product-list";

export const ProductListPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <ProductList />
    </main>
  );
};
