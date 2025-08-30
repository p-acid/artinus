import useSWRInfinite from "swr/infinite";

import {
  ProductListSchema,
  type GetProductListParams,
} from "@/entities/product";
import { API_PATHS } from "@/shared/consts/api-paths";
import { fetcher } from "@/shared/libs/swr";
import { serializeSearchParams } from "@/shared/utils/serialize-search-params";

const LIMIT = 20;

const getKey = (
  pageIndex: number,
  previousPageData?: ProductListSchema | null,
) => {
  if (previousPageData && previousPageData.products.length === 0) return null;

  const params: GetProductListParams = {
    skip: pageIndex * LIMIT,
    limit: LIMIT,
  };

  const queryString = serializeSearchParams(params).toString();

  return `${API_PATHS.PRODUCTS}?${queryString}`;
};

export const useInfiniteProductList = () =>
  useSWRInfinite<ProductListSchema>(
    getKey,
    (path) => fetcher(path, ProductListSchema),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
