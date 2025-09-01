import * as z from "zod/mini";

export const AvailabilityStatusSchema = z.enum([
  "In Stock",
  "Low Stock",
  "Out of Stock",
]);

export type AvailabilityStatusSchema = z.infer<typeof AvailabilityStatusSchema>;

export const ReviewSchema = z.object({
  rating: z.number(),
  comment: z.string(),
  date: z.string(),
  reviewerName: z.string(),
  reviewerEmail: z.string(),
});

export type ReviewSchema = z.infer<typeof ReviewSchema>;

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  discountPercentage: z.number(),
  brand: z.optional(z.string()),
  price: z.number(),
  thumbnail: z.string(),
  tags: z.array(z.string()),
  shippingInformation: z.string(),
  warrantyInformation: z.string(),
  availabilityStatus: AvailabilityStatusSchema,
  reviews: z.array(ReviewSchema),
  images: z.array(z.string()),
});

export type ProductSchema = z.infer<typeof ProductSchema>;
