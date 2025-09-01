import type { ComponentProps, CSSProperties } from "react";

import type { RecipeVariants } from "@vanilla-extract/recipes";
import clsx from "clsx";

import * as styles from "./skeleton.css";

interface Props extends ComponentProps<"div"> {
  width?: number | string;
  height?: number | string;
}

export const Skeleton = ({
  width = "100%",
  height,
  variant,
  className,
  ...props
}: Props & RecipeVariants<typeof styles.skeleton>) => {
  const styleProps: CSSProperties = {
    width,
    height,
  };

  return (
    <div
      className={clsx(styles.skeleton({ variant }), className)}
      style={styleProps}
      {...props}
    />
  );
};
