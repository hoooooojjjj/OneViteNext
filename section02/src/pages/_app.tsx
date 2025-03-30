import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href={"/"}>home</Link>
      {/* prefetch={false} 속성을 통해 prefetch를 막을 수 있다. */}
      <Link href={"/about/1"} prefetch={false}>
        about
      </Link>
      <Component {...pageProps} />
    </>
  );
}
