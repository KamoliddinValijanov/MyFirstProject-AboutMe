import "../styles/globals.css";

import type { AppProps } from "next/app";
// import Layuot from "../modules/Layout";

export default function App({ Component, pageProps }: AppProps) {
  // <Layuot>
  return <Component {...pageProps} />;
  // </Layuot>;
}
