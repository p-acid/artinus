export type GetProductListParams = {
  skip?: number;
  limit?: number;
};

export type GetProductDetailParams = {
  productId: number | null;
};
