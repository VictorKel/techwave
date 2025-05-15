import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <CartProvider>
        <Nav />
        <Component {...pageProps} />
        <Toaster position="top-center" />
        <Footer />
      </CartProvider>
    </main>
  );
}
