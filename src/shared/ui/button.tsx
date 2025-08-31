import { forwardRef, type ComponentProps } from "react";

import type { RecipeVariants } from "@vanilla-extract/recipes";
import clsx from "clsx";

import * as styles from "./button.css";

type VariantsProps = RecipeVariants<typeof styles.button>;

type Props = ComponentProps<"button"> & VariantsProps;

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { size, variant, width, children, className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={clsx(styles.button({ size, variant, width }), className)}
      {...props}
    >
      {children}
    </button>
  );
});
