import { Outlet } from "react-router";

import "../styles/global.css";

export const RootLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
