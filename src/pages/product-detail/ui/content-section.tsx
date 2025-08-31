import { v4 as uuidv4 } from "uuid";

import { ProductThumbnail, ReviewItem } from "@/entities/product";
import type { ProductSchema } from "@/entities/product/model/base.schema";

import { CONTENT_SECTION_IDS } from "../constants";
import { ContentNav } from "./content-nav";
import * as styles from "./content-section.css";

type Props = Pick<ProductSchema, "thumbnail" | "images" | "reviews">;

export const ContentSection = ({ thumbnail, images, reviews }: Props) => {
  return (
    <section className={styles.container}>
      <ProductThumbnail
        className={styles.thumbnail}
        src={thumbnail}
        alt={thumbnail}
      />

      <ContentNav />

      <div id={CONTENT_SECTION_IDS.INFO} className={styles.imagesWrapper}>
        {images.map((url) => (
          <ProductThumbnail
            key={url}
            src={url}
            alt={url}
            className={styles.productImage}
          />
        ))}
      </div>

      <div id={CONTENT_SECTION_IDS.REVIEWS} className={styles.reviewList}>
        <h3 className={styles.subtitle}>Reviews</h3>
        <ul>
          {reviews.map((review) => (
            <ReviewItem key={uuidv4()} {...review} />
          ))}
        </ul>
      </div>
    </section>
  );
};
