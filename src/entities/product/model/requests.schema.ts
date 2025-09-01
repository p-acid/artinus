import * as z from "zod/mini";

export const GetProductListRequestSchema = z.object({
  skip: z.optional(z.number()),
  limit: z.optional(z.number()),
});

export type GetProductListRequestSchema = z.infer<
  typeof GetProductListRequestSchema
>;

export const GetProductDetailRequestSchema = z.object({
  productId: z.nullable(z.number()),
});

export type GetProductDetailRequestSchema = z.infer<
  typeof GetProductDetailRequestSchema
>;
