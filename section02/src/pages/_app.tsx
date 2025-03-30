import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href={"/"}>home</Link>
      &nbsp;
      <Link href={"/about/1"} prefetch={false}>
        about
      </Link>
      <Component {...pageProps} />
    </>
  );
}
