import z from "zod";

export const AvailabilityStatusSchema = z.enum([
  "In Stock",
  "Low Stock",
  "Out of Stock",
]);

export type AvailabilityStatusSchema = z.infer<typeof AvailabilityStatusSchema>;

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  discountPercentage: z.number(),
  brand: z.string().optional(),
  price: z.number(),
  thumbnail: z.string(),
  tags: z.array(z.string()),
  shippingInformation: z.string(),
  warrantyInformation: z.string(),
  availabilityStatus: AvailabilityStatusSchema,
});

export type ProductSchema = z.infer<typeof ProductSchema>;
