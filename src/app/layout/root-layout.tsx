import { Suspense } from "react";

import { Outlet } from "react-router";

import { MainLayout } from "@/widgets/main-layout";

import { PageLoading } from "./page-loading";

import "../styles/global.css";

export const RootLayout = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Suspense>
  );
};
