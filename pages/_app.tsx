import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Nav />
      <Component {...pageProps} />
      <Toaster position="top-center" />
      <Footer />
    </main>
  );
}


