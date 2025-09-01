import { useCallback, useEffect, useRef } from "react";

import { Link } from "react-router";

import { ProductCard } from "@/entities/product";
import { PAGE_ROUTES } from "@/shared/consts/page-routes";
import { Spinner } from "@/shared/ui";

import { useInfiniteProductList } from "../hooks/use-infinite-product-list";
import * as styles from "./product-list.css";

export const ProductList = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, setSize } = useInfiniteProductList();

  const products = data?.flatMap(({ products }) => products) ?? [];
  const total = data?.[0].total ?? 0;

  const hasMore = products.length < total;

  const loadMore = useCallback(async () => {
    setSize((prev) => prev + 1);
  }, [setSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("hello");
          loadMore();
        }
      },
      {
        threshold: 1.0,
      },
    );

    const target = loadMoreRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [loadMore]);

  return (
    <>
      <div className={styles.container}>
        {products?.map((product) => (
          <Link key={product.id} to={PAGE_ROUTES.PRODUCT_DETAIL(product.id)}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>

      <div ref={loadMoreRef} />
      {hasMore && (
        <div className={styles.loadMoreSpinner}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export const ProductListSkeleton = () => {
  return (
    <div className={styles.loadingSpinner}>
      <Spinner />
      Please wait while we load your content
    </div>
  );
};
