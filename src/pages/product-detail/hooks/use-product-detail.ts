import useSWR from "swr";

import {
  ProductDetailSchema,
  type GetProductDetailParams,
} from "@/entities/product";
import { API_PATHS } from "@/shared/consts/api-paths";
import { fetcher } from "@/shared/libs/swr";

export const useProductDetail = ({ productId }: GetProductDetailParams) =>
  useSWR(
    productId ? API_PATHS.PRODUCT_DETAIL(productId) : null,
    (url) => fetcher(url, ProductDetailSchema),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
