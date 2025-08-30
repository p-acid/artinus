export const API_PATHS = {
  PRODUCTS: "/products",
  PRODUCT_DETAIL: (productId: number) => `/products/${productId}`,
} as const;
