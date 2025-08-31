import useSWRInfinite from "swr/infinite";

import {
  GetProductListRequestSchema,
  GetProductListResponseSchema,
} from "@/entities/product";
import { API_PATHS } from "@/shared/consts/api-paths";
import { fetcher } from "@/shared/libs/swr";
import { parseRequest } from "@/shared/utils/parse-request";
import { serializeSearchParams } from "@/shared/utils/serialize-search-params";

const LIMIT = 20;

const getKey = (
  pageIndex: number,
  previousPageData?: GetProductListResponseSchema | null,
) => {
  if (previousPageData && previousPageData.products.length === 0) return null;

  const parsed = parseRequest(GetProductListRequestSchema, {
    skip: pageIndex * LIMIT,
    limit: LIMIT,
  });

  const queryString = serializeSearchParams(parsed).toString();

  return `${API_PATHS.PRODUCTS}?${queryString}`;
};

export const useInfiniteProductList = () =>
  useSWRInfinite<GetProductListResponseSchema>(
    getKey,
    (path) => fetcher(path, GetProductListResponseSchema),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
