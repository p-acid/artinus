import { getDiscountedPrice } from "@/shared/utils/get-discounted-price";

import type { ProductSchema } from "../model/base.schema";
import * as styles from "./product-card.css";
import { ProductThumbnail } from "./product-thumbnail";

export function ProductCard({
  thumbnail,
  title,
  price,
  discountPercentage,
}: ProductSchema) {
  return (
    <div className={styles.card}>
      <ProductThumbnail src={thumbnail} alt={title} />

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <div className={styles.priceWrapper}>
          <span className={styles.discountPercentage}>
            {discountPercentage}%
          </span>
          <span className={styles.price}>
            ${getDiscountedPrice(price, discountPercentage)}
          </span>
        </div>
      </div>
    </div>
  );
}
