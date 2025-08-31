import type { ProductSchema } from "../model/base.schema";
import * as styles from "./product-card.css";
import { ProductThumbnail } from "./product-thumbnail";

export function ProductCard({ thumbnail, title, price }: ProductSchema) {
  return (
    <div className={styles.card}>
      <ProductThumbnail src={thumbnail} alt={title} />

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
}
