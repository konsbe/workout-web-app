import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/SideBar/sidebar";
import { NextRouter, useRouter } from "next/router";
import React, { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const getLayout = (page: React.ReactElement, router: NextRouter) =>
  router.pathname.includes("user") ? <Sidebar>{page}</Sidebar> : page;

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  return getLayout(<Component {...pageProps} />, router);
}
