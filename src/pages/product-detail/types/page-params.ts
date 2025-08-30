import type { DYNAMIC_SEGMENTS } from "@/shared/consts/page-routes";

export type ProductDetailPageParams = {
  [DYNAMIC_SEGMENTS.PRODUCT_ID]: string;
};
