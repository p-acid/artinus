import { z } from "zod";

export const GetProductListRequestSchema = z.object({
  skip: z.number().optional(),
  limit: z.number().optional(),
});

export type GetProductListRequestSchema = z.infer<
  typeof GetProductListRequestSchema
>;

export const GetProductDetailRequestSchema = z.object({
  productId: z.number().nullable(),
});

export type GetProductDetailRequestSchema = z.infer<
  typeof GetProductDetailRequestSchema
>;
