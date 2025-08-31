import z from "zod";

import { ProductSchema } from "./base.schema";

export const GetProductListResponseSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type GetProductListResponseSchema = z.infer<
  typeof GetProductListResponseSchema
>;

export const GetProductDetailResponseSchema = ProductSchema;

export type GetProductDetailResponseSchema = z.infer<
  typeof GetProductDetailResponseSchema
>;
