import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "@/prismicio";
import "@madzadev/audio-player/dist/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={(props) => <Link {...props} />}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
