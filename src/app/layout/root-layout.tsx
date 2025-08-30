import { Outlet } from "react-router";

import "../styles/global.css";

import { MainLayout } from "@/widgets/main-layout";

export const RootLayout = () => {
  return (
    <div>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );
};
