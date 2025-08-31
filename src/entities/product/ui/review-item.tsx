import dayjs from "dayjs";

import type { ReviewSchema } from "../model/base.schema";
import { Rating } from "./rating";
import * as styles from "./review-item.css";

export const ReviewItem = ({
  reviewerName,
  reviewerEmail,
  date,
  rating,
  comment,
}: ReviewSchema) => {
  return (
    <li className={styles.container}>
      <div className={styles.reviewerWrapper}>
        <div>
          <p className={styles.reviewerName}>{reviewerName}</p>
          <p className={styles.reviewerEmail}>{reviewerEmail}</p>
        </div>
        <div>
          <p className={styles.date}>{dayjs(date).format("MMMM DD, YYYY.")}</p>
          <Rating value={rating} />
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </li>
  );
};
