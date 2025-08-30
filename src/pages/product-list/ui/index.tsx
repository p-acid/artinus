import { Link } from "react-router";

import { PAGE_ROUTES } from "@/shared/consts/page-routes";

import { useInfiniteProductList } from "../hooks/use-infinite-product-list";

export const ProductListPage = () => {
  const { data, setSize } = useInfiniteProductList();

  const products = data?.flatMap(({ products }) => products) ?? [];

  return (
    <main>
      {products.map(({ id, title, price, thumbnail }) => (
        <Link key={id} to={PAGE_ROUTES.PRODUCT_DETAIL(id)}>
          <img width={200} height={200} src={thumbnail} alt={thumbnail} />
          <p>{title}</p>
          <p>{price}</p>
        </Link>
      ))}
      <button onClick={() => setSize((prev) => prev + 1)}>
        목록 더 불러오기
      </button>
    </main>
  );
};
