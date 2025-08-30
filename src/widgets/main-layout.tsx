import type { PropsWithChildren } from "react";

import * as styles from "./main-layout.css";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
