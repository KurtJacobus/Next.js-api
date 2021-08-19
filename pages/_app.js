// import Layout from "../components/Layout"
// import "../styles/globals.css"

// function MyApp({ Component, pageProps }) {
//   return(

//   <Layout>
//   <Component {...pageProps} />
// </Layout>
//  )
// }

// export default MyApp

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
};

export default MyApp;
