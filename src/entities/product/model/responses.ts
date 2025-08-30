import z from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  thumbnail: z.string(),
});

export const ProductListSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type ProductListSchema = z.infer<typeof ProductListSchema>;

export const ProductDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  thumbnail: z.string(),
  tags: z.array(z.string()),
});
