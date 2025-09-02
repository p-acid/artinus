import { Spinner } from "@/shared/ui";

import * as styles from "./page-loading.css";

export const PageLoading = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
};
