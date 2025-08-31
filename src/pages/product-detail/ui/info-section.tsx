import { Package, ShieldCheck, ShoppingCart } from "lucide-react";

import { ProductThumbnail } from "@/entities/product";
import type { ProductSchema } from "@/entities/product/model/base.schema";
import { Button } from "@/shared/ui";
import { capitalizeWords } from "@/shared/utils/capitalize-words";
import { getDiscountedPrice } from "@/shared/utils/get-discounted-price";

import * as styles from "./info-section.css";

type Props = Pick<
  ProductSchema,
  | "thumbnail"
  | "brand"
  | "category"
  | "title"
  | "price"
  | "discountPercentage"
  | "description"
  | "warrantyInformation"
  | "shippingInformation"
  | "tags"
>;

export const InfoSection = ({
  thumbnail,
  brand,
  category,
  title,
  price,
  discountPercentage,
  description,
  warrantyInformation,
  shippingInformation,
  tags,
}: Props) => {
  return (
    <section className={styles.container}>
      <ProductThumbnail
        className={styles.thumbnail}
        src={thumbnail}
        alt={thumbnail}
      />

      <p className={styles.brandAndCategory}>
        {capitalizeWords(category)}
        {brand ? ` · ${brand}` : ""}
      </p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.priceWrapper}>
        <span className={styles.originalPrice}>${price}</span>
        <div className={styles.priceLine}>
          <span className={styles.discountRate}>{discountPercentage}%</span>
          <span className={styles.discountedPrice}>
            ${getDiscountedPrice(price, discountPercentage)}
          </span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.detailField}>
        <ShieldCheck className={styles.warrantyIcon} />
        {warrantyInformation}
      </div>
      <div className={styles.detailField}>
        <Package className={styles.detailIcon} />
        {shippingInformation}
      </div>
      <div className={styles.divider} />
      <Button size="lg" width="full" variant="neutral">
        <ShoppingCart />
        Add to Cart
      </Button>
      <div className={styles.divider} />
      <div className={styles.tagListWrapper}>
        <h3 className={styles.tagTitle}>Tags</h3>
        <ul className={styles.tagList}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              #{tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
