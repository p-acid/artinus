import type { ProductSchema } from "../model/responses";
import * as styles from "./product-card.css";

export function ProductCard({ thumbnail, title, price }: ProductSchema) {
  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.image} />

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}$</p>
      </div>
    </div>
  );
}
