import { Star } from "lucide-react";

import { vars } from "@/shared/styles/theme.css";

import * as styles from "./rating.css";

type Props = {
  value: number;
  iconSize?: number;
};

export const Rating = ({ value, iconSize = 16 }: Props) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      {stars.map((star) => (
        <Star
          key={star}
          color={
            star <= value ? vars.colors.primary[500] : vars.colors.neutral[200]
          }
          fill={star <= value ? vars.colors.primary[500] : "none"}
          size={iconSize}
        />
      ))}
    </div>
  );
};
