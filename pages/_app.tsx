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
    console.log('yarrak')
    return <div>Yarrak</div>;
  } else {
    return (
      <MediaProvider>
        <Component {...pageProps} />
      </MediaProvider>
    );
  }
}
