import Footer from "@/components/Footer";
import Nav from "@/components/NavBar/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../contexts/CartContext";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <CartProvider>
        <ResponsiveNav />
        <Component {...pageProps} />
        <Toaster position="top-center" />
        <Footer />
      </CartProvider>
    </main>
  );
}
