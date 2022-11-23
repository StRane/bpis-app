import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import MediaProvider from "../store/MediaProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    console.log('Could not react window object')
    return <div>Whoops You need window to use that site!!</div>;
  } else {
    return (
      <MediaProvider>
        <Component {...pageProps} />
      </MediaProvider>
    );
  }
}
