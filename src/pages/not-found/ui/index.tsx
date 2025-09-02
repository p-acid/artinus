import { Ghost } from "lucide-react";
import { useNavigate } from "react-router";

import { PAGE_ROUTES } from "@/shared/consts/page-routes";
import { Button } from "@/shared/ui";

import * as styles from "./index.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Ghost className={styles.icon} />
      <p className={styles.text}>404 NOT FOUND</p>
      <Button size="lg" onClick={() => navigate(PAGE_ROUTES.PRODUCTS)}>
        Go to Home
      </Button>
    </div>
  );
};
