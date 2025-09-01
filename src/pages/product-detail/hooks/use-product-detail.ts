import useSWR from "swr";

import {
  GetProductDetailRequestSchema,
  GetProductDetailResponseSchema,
} from "@/entities/product";
import { API_PATHS } from "@/shared/consts/api-paths";
import { fetcher } from "@/shared/libs/swr";
import { parseRequest } from "@/shared/utils/parse-request";

export const useProductDetail = (request: GetProductDetailRequestSchema) => {
  const parsed = parseRequest(GetProductDetailRequestSchema, request);

  return useSWR(
    parsed.productId !== null
      ? API_PATHS.PRODUCT_DETAIL(parsed.productId)
      : null,
    (url) => fetcher(url, GetProductDetailResponseSchema),
    {
      suspense: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
