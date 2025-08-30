import { Link } from "react-router";

import { ProductCard } from "@/entities/product";
import { PAGE_ROUTES } from "@/shared/consts/page-routes";

import { useInfiniteProductList } from "../hooks/use-infinite-product-list";
import * as styles from "./product-list.css";

export const ProductList = () => {
  const { data, setSize } = useInfiniteProductList();

  const products = data?.flatMap(({ products }) => products) ?? [];

  return (
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <Link key={product.id} to={PAGE_ROUTES.PRODUCT_DETAIL(product.id)}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
      <button onClick={() => setSize((prev) => prev + 1)}>
        목록 더 불러오기
      </button>
    </>
  );
};
