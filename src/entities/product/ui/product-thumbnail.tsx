import type { ComponentProps } from "react";

import clsx from "clsx";

import * as styles from "./product-thumbnail.css";

export const ProductThumbnail = ({
  className,
  ...props
}: ComponentProps<"img">) => {
  return (
    <div className={clsx(styles.container, className)}>
      <img {...props} />
    </div>
  );
};
