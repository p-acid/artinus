export const DYNAMIC_SEGMENTS = {
  PRODUCT_ID: "productId",
} as const;

export const PAGE_ROUTES = {
  PRODUCTS: "/products",
  PRODUCT_DETAIL: (productId?: number) =>
    `/products/${productId ?? `:${DYNAMIC_SEGMENTS.PRODUCT_ID}`}`,
} as const;
