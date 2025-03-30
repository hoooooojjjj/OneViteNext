import GlobalLayout from "@/components/global-layout";

import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const PerPageLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <GlobalLayout>{PerPageLayout(<Component {...pageProps} />)}</GlobalLayout>
  );
}
